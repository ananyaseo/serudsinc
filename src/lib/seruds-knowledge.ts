// Curated SERUDS knowledge base, distilled from the site content already in this project
// (programs, beneficiaries, contact, donation pages) plus public facts from serudsinc.org
// and serudsindia.org. Used by the seed endpoint to populate knowledge_chunks.

export type SeedEntry = {
  org: "india" | "usa" | "both";
  source_title: string;
  source_url?: string;
  image_url?: string;
  content: string;
};

export const SERUDS_KNOWLEDGE: SeedEntry[] = [
  {
    org: "both",
    source_title: "About SERUDS",
    source_url: "https://serudsinc.org/",
    content:
      "SERUDS works for the development of poor elderly persons and abandoned orphan children in Kurnool District, Andhra Pradesh, India. The mission is to provide shelter, nutrition, education, healthcare, and dignity to those who have no one to care for them. Two related organisations operate together: SERUDS India (serudsindia.org) is the implementing non-profit on the ground in India; SERUDS Inc. (serudsinc.org) is a US 501(c)(3) public charity that raises tax-deductible funds in the United States and channels them to programs in India. 100% of donations made to SERUDS Inc. are sent to India to fund programs.",
  },
  {
    org: "usa",
    source_title: "SERUDS Inc. — US 501(c)(3) Charity",
    source_url: "https://serudsinc.org/",
    content:
      "SERUDS Inc. is a 501(c)(3) tax-exempt public charity registered in the United States. Donations from US donors are tax-deductible to the fullest extent allowed by US law. SERUDS Inc. exists to support the work of SERUDS India and commits that 100% of donations are forwarded to India for program work (orphan care, elderly care, child education, and women empowerment). US donors receive a receipt that can be used for IRS tax-deduction purposes.",
  },
  {
    org: "india",
    source_title: "SERUDS India — Indian 80G Tax Benefits",
    source_url: "https://serudsindia.org/",
    content:
      "SERUDS India is a registered Indian non-profit operating in Kurnool, Andhra Pradesh. Donations made by Indian residents and companies to SERUDS India are eligible for tax exemption under Section 80G of the Indian Income Tax Act. SERUDS India also engages with companies on Corporate Social Responsibility (CSR) projects and accepts foreign contributions through its FCRA registration where applicable.",
  },
  {
    org: "both",
    source_title: "Joy Home Orphanage",
    source_url: "https://serudsindia.org/donate-orphanage-in-andhrapradesh-for-child-education/",
    content:
      "The Joy Home is SERUDS' residential orphanage in Kurnool. It provides safe shelter, three nutritious meals a day, school uniforms and books, evening tuition, healthcare and life-skills mentoring to abandoned and destitute children. Sponsorship starts from about USD 30 / month (₹2,000 / month) per child and covers food, education, clothing and medical care. The program currently supports more than 1,200 children over the years.",
  },
  {
    org: "both",
    source_title: "Happy Old Age Home for Elderly Women",
    source_url: "https://serudsinc.org/old-age-home/",
    content:
      "The Happy Old Age Home provides residential care to destitute, abandoned and widowed elderly women who have no family support. Residents receive a safe room, three meals a day, medical care, eye check-ups, recreation, and the dignity of community in their final years. Care for one elderly woman costs about USD 36 / month. The program currently supports 350+ elderly women in Kurnool.",
  },
  {
    org: "both",
    source_title: "Sponsor a Child's Education",
    source_url: "https://serudsinc.org/sponsor-child-education-india/",
    content:
      "The Sponsor Child Education program covers the full annual cost of sending an underprivileged child to school: books, uniforms, school and tuition fees, school bag and stationery, and mentoring. The recommended sponsorship is about USD 360 per year (roughly ₹24,000 / year). Sponsors receive updates on the child's progress and a year-end report.",
  },
  {
    org: "india",
    source_title: "Sponsor a Girl Child — Education for Girls",
    source_url: "https://serudsindia.org/donations/donate-education-girlchild-meghana/",
    content:
      "SERUDS runs dedicated sponsorships for girl children at risk of dropping out of school due to poverty, abandonment, illness in the family, or alcoholism at home. Sponsoring a girl child covers her schooling, tuition, uniforms and basic needs for one year. Most girl-child sponsorships are between ₹20,000 and ₹24,000 per year (about USD 250-300). To sponsor a girl, donors can choose a specific child on serudsindia.org or contribute to the general girl-child fund.",
  },
  {
    org: "both",
    source_title: "Featured Beneficiary — V. Sreelakshmi",
    source_url:
      "https://serudsindia.org/donations/donate-orphanage-in-andhrapradesh-for-child-education/",
    content:
      "V. Sreelakshmi, age 12, studies in 7th class at IGMM Government High School in Kurnool. Her mother attempted suicide after years of abuse by her alcoholic husband and harassment by in-laws. Her father, a lorry driver, did not provide for the family. After her mother was severely injured, Sreelakshmi was admitted to the Joy Home, where she is now safe, well-fed, attending school, and dreams of becoming an engineer. Sponsorship: about ₹24,000 / year.",
  },
  {
    org: "both",
    source_title: "Featured Beneficiary — C. Hemalatha",
    source_url:
      "https://serudsindia.org/donations/donate-a-child-in-need-for-sponsership-of-education-india/",
    content:
      "C. Hemalatha, age 12, studies in 9th standard at IGMM School in Kurnool. Her father passed away from HIV/AIDS and her mother is also HIV-positive and unable to work consistently. Brought to SERUDS' Joy Home in 2014, Hemalatha now has a safe home, regular meals, schooling, and medical care, and is excelling in her studies.",
  },
  {
    org: "both",
    source_title: "Featured Beneficiary — K. Roopa",
    source_url: "https://serudsindia.org/donations/sponsor-education-roopa-kurnool/",
    content:
      "K. Roopa, age 15, studies in 9th class at Good Shepherd School in Kurnool. Both her parents are daily-wage coolies; her mother is now bedridden after heavy medical expenses during COVID-19. A sponsorship of ₹1,700 per month (₹20,400 per year) covers her full school and tuition fees and keeps her in school.",
  },
  {
    org: "both",
    source_title: "Featured Beneficiary — Golla Meghana",
    source_url: "https://serudsindia.org/donations/donate-education-girlchild-meghana/",
    content:
      "Golla Meghana, age 8, studies in 3rd class at IGMMCH School in Kurnool. Her father spends his earnings on alcohol; her mother could not provide enough food, clothing or schooling. Admitted to the Joy Home in 2021, Meghana now has meals, school, evening tuition, friends and a safe place to grow up.",
  },
  {
    org: "india",
    source_title: "How to Donate from India",
    source_url: "https://serudsindia.org/",
    content:
      "Indian donors can donate to SERUDS India online through the donation pages on serudsindia.org. Payment options include credit/debit card, UPI, net banking, and NEFT/IMPS bank transfer to the SERUDS India bank account. All Indian donations are eligible for 80G tax exemption; an 80G receipt is issued by email after the donation is confirmed.",
  },
  {
    org: "usa",
    source_title: "How to Donate from the USA",
    source_url: "https://serudsinc.org/",
    content:
      "US donors can give to SERUDS Inc. online via credit card, debit card or PayPal through the donation page on serudsinc.org, or by mailing a check to the SERUDS Inc. mailing address. Donations are tax-deductible in the USA under section 501(c)(3); SERUDS Inc. emails a tax receipt that donors can use for their IRS filing. 100% of donations are sent to India for program work.",
  },
  {
    org: "both",
    source_title: "Volunteering with SERUDS",
    source_url: "https://serudsinc.org/contact-us/",
    content:
      "SERUDS welcomes volunteers — both in person at the Kurnool campus and remotely. In-person volunteers help with teaching, tutoring, art and play activities at the Joy Home and Old Age Home, and assist with healthcare camps. Remote volunteers can help with fundraising, digital marketing, content writing, translations, sponsor communications and donor outreach. Interested volunteers should email or use the Contact page to start a conversation.",
  },
  {
    org: "both",
    source_title: "Contact SERUDS",
    source_url: "https://serudsinc.org/contact-us/",
    content:
      "To contact SERUDS, use the Contact page (serudsinc.org/contact-us) or write directly. For sponsorships, partnerships, CSR proposals, volunteering or any general queries you can reach the team via the contact form on the website. SERUDS team responds within a few working days. The field office is located in Kurnool, Andhra Pradesh, India.",
  },
  {
    org: "both",
    source_title: "Impact at a Glance",
    source_url: "https://serudsinc.org/",
    content:
      "SERUDS' ongoing impact: more than 1,200 orphan and destitute children housed, fed and educated; more than 350 elderly women cared for in the Happy Old Age Home; more than 5,000 meals served every month across programs; and 100% of US donations to SERUDS Inc. forwarded to India for program work.",
  },
  {
    org: "both",
    source_title: "When SERUDS was founded",
    source_url: "https://serudsindia.org/about-us/",
    content:
      "SERUDS (Sai Educational Rural and Urban Development Society) was founded and registered in the year 2003 in Kurnool, Andhra Pradesh, India, under the Andhra Pradesh Public Societies Registration Act, XXXV of 2001 (Registration No. 264 of 2003, dated 21st April 2003). The organisation was founded by Mr. G. Mallikarjuna, a Bachelor of Engineering graduate from Vasavi College of Engineering, Hyderabad, who started social work at the age of 24. He continues to serve as President of SERUDS. SERUDS Inc., the US 501(c)(3) sister charity, was later established in Florida to support SERUDS India's programs.",
  },
  {
    org: "india",
    source_title: "SERUDS India — Legal Status & Registrations",
    source_url: "https://serudsindia.org/about-us/our-legal-status/",
    content:
      "Legal status of SERUDS India: Registered as a Society under the Andhra Pradesh Public Societies Registration Act, XXXV of 2001 (Reg. No. 264 of 2003, dated 21 April 2003). Registered under Section 12AA of the Income Tax Act, 1961 (F.No. DIT(E)/HYD/12A & 80G/47(11)/06-07, dated 01-03-2007). Registered under Section 80G(5)(vi) of the Income Tax Act, 1961 (F.No. DIT(E)/HYD/80G/1(08)/10-11, dated 20-01-2011, valid from 01-04-2010). Registered under Section 6(1)(a) of the Foreign Contribution (Regulation) Act (FCRA Reg. No. 010270206), valid till 31-03-2027. PAN: AAFTS8988J. NGO Darpan Unique ID: AP/2009/0014271. Listed/verified with GuideStar India, HelpyourNGO, Give2Asia, GiveIndia, GlobalGiving Foundation, LetzChange, Godparents, Icharity and others. Auditor: Mr. K. Raghuveer Singh, Chartered Accountant, Kurnool.",
  },
  {
    org: "india",
    source_title: "Contact SERUDS India (Kurnool office)",
    source_url: "https://serudsindia.org/contact/",
    content:
      "SERUDS India head office: Sai Educational Rural and Urban Development Society (SERUDS), D.No. 46-740, Budhavarapeta, Beside Canara Bank, Kurnool – 518 002, Andhra Pradesh, India. Mobile: +91 9849977577. Phone: +91 (8518) 255626. Email: info@serudsindia.org. Visitors are welcome at the orphanage and day care centres. SERUDS is within easy driving distance of Hyderabad (205 km), Vijayawada (330 km) and Bengaluru (345 km), and many donors visit and spend time with the children.",
  },
  {
    org: "usa",
    source_title: "Contact SERUDS Inc. (USA office)",
    source_url: "https://serudsinc.org/contact-us/",
    content:
      "How to contact SERUDS Inc. (the US 501(c)(3) charity): Address — 5126 Ballantrae Blvd., Land O' Lakes, Florida 34638, USA. Phone: +1 813 946 0254 (also reachable at +1 347 717 4569). Email: seruds.inc@gmail.com. You can also use the contact form on serudsinc.org/contact-us. SERUDS Inc. responds to sponsorship, partnership, CSR and volunteering enquiries from US donors and forwards 100% of donations to program work in India.",
  },
  {
    org: "india",
    source_title: "Women Empowerment & Development Programs",
    source_url: "https://serudsindia.org/women-development-programs-in-andhrapradesh/",
    content:
      "SERUDS India runs women empowerment and development programs in and around Kurnool, Andhra Pradesh. Activities include vocational training (tailoring, handicrafts, computer skills), self-help group (SHG) formation, micro-credit linkages, health and hygiene awareness, legal-rights education, and support for women from Scheduled Caste, Scheduled Tribe and economically backward communities. The goal is to help destitute, widowed and abandoned women earn a sustainable livelihood and live with dignity.",
  },
  {
    org: "india",
    source_title: "Donate Food for Poor Elders",
    source_url: "https://serudsindia.org/elders/donate-food-for-poor-elder/",
    content:
      "Through the 'Donate Food for Poor Elders' program, donors can sponsor nutritious meals for destitute elderly women living at the Happy Old Age Home in Kurnool. A donation of about ₹2,000 (roughly USD 25) feeds one elderly woman for a month; larger gifts cover annual food costs or birthday/anniversary meals for all residents. Donors can dedicate a day of meals in memory of a loved one.",
  },
  {
    org: "india",
    source_title: "Sponsor a Poor Elder",
    source_url: "https://serudsindia.org/elders/sponsor-poor-elder/",
    content:
      "The 'Sponsor a Poor Elder' program lets donors fully support one destitute elderly woman at the Happy Old Age Home, covering food, shelter, clothing, medicines, eye care and basic medical attention. Sponsorship is approximately ₹2,500 per month (about USD 30-36/month, or ₹30,000 per year). Donors receive periodic updates about the elder they sponsor.",
  },
  {
    org: "both",
    source_title: "Ways to Contribute / Donate to SERUDS",
    source_url: "https://serudsindia.org/contribute-donation-for-charity/",
    content:
      "Ways to support SERUDS: one-time or monthly online donations through serudsindia.org (India, 80G receipt) or serudsinc.org (USA, 501(c)(3) tax receipt); sponsor a child, a girl child, or an elder; donate food, books, clothes or medicines; fund a specific project such as a healthcare camp or vocational training batch; partner via Corporate Social Responsibility (CSR); leave a legacy gift; or volunteer your time and skills. Indian donors can pay by UPI, card, net banking or NEFT; US donors by card or PayPal; checks accepted at the SERUDS Inc. Florida address.",
  },
];

