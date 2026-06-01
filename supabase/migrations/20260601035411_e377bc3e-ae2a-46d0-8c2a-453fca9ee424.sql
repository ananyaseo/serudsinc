
create extension if not exists vector;

create table public.knowledge_chunks (
  id uuid primary key default gen_random_uuid(),
  org text not null default 'both' check (org in ('india','usa','both')),
  source_title text not null,
  source_url text,
  image_url text,
  content text not null,
  embedding vector(1536),
  created_at timestamptz not null default now()
);
create index knowledge_chunks_embedding_idx on public.knowledge_chunks using hnsw (embedding vector_cosine_ops);
create index knowledge_chunks_org_idx on public.knowledge_chunks (org);

create table public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions(id) on delete cascade,
  role text not null check (role in ('user','assistant')),
  content text not null,
  sources jsonb,
  created_at timestamptz not null default now()
);
create index chat_messages_session_idx on public.chat_messages (session_id, created_at);

create table public.user_feedback (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.chat_sessions(id) on delete cascade,
  message_id uuid references public.chat_messages(id) on delete cascade,
  question text,
  answer text,
  rating smallint not null check (rating in (-1, 1)),
  created_at timestamptz not null default now()
);

-- Grants
grant select on public.knowledge_chunks to anon, authenticated;
grant all on public.knowledge_chunks to service_role;
grant select, insert on public.chat_sessions to anon, authenticated;
grant all on public.chat_sessions to service_role;
grant select, insert on public.chat_messages to anon, authenticated;
grant all on public.chat_messages to service_role;
grant select, insert on public.user_feedback to anon, authenticated;
grant all on public.user_feedback to service_role;

-- RLS — widget is anonymous, so we keep these permissive for v1.
alter table public.knowledge_chunks enable row level security;
create policy "knowledge readable" on public.knowledge_chunks for select to anon, authenticated using (true);

alter table public.chat_sessions enable row level security;
create policy "anyone can create session" on public.chat_sessions for insert to anon, authenticated with check (true);
create policy "anyone can read sessions" on public.chat_sessions for select to anon, authenticated using (true);

alter table public.chat_messages enable row level security;
create policy "anyone can insert message" on public.chat_messages for insert to anon, authenticated with check (true);
create policy "anyone can read messages" on public.chat_messages for select to anon, authenticated using (true);

alter table public.user_feedback enable row level security;
create policy "anyone can submit feedback" on public.user_feedback for insert to anon, authenticated with check (true);
create policy "anyone can read feedback" on public.user_feedback for select to anon, authenticated using (true);

-- Similarity search RPC
create or replace function public.match_knowledge_chunks(
  query_embedding vector(1536),
  match_count int default 5,
  filter_org text default null
)
returns table (
  id uuid,
  content text,
  source_title text,
  source_url text,
  image_url text,
  org text,
  similarity float
)
language sql stable
as $$
  select
    k.id,
    k.content,
    k.source_title,
    k.source_url,
    k.image_url,
    k.org,
    1 - (k.embedding <=> query_embedding) as similarity
  from public.knowledge_chunks k
  where k.embedding is not null
    and (filter_org is null or k.org = filter_org or k.org = 'both')
  order by k.embedding <=> query_embedding
  limit match_count;
$$;
