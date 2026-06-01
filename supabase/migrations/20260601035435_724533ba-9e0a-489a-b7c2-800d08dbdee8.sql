
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
set search_path = public
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
