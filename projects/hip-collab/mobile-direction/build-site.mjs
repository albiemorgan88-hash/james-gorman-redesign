import fs from 'node:fs';
import path from 'node:path';

const site = 'https://antibullyingni.co.uk';
const today = '2026-06-16';

const nav = [
  ['Anti-Bullying Week', '/anti-bullying-week/2026/'],
  ['Odd Socks Day', '/anti-bullying-week/odd-socks-day-2026/'],
  ['NI Schools', '/northern-ireland-schools/'],
  ['ROI Schools', '/republic-of-ireland-schools/'],
  ['Cyberbullying', '/cyberbullying-in-schools/'],
  ['Resources', '/resources/free-anti-bullying-classroom-pack/'],
  ['Blog', '/blog/'],
];

const authority = {
  aba: ['Anti-Bullying Alliance', 'https://anti-bullyingalliance.org.uk/anti-bullying-week-2026'],
  oddSocks: ['Anti-Bullying Alliance: Odd Socks Day', 'https://anti-bullyingalliance.org.uk/anti-bullying-week-2026/odd-socks-day'],
  ea: ['Education Authority NI', 'https://www.eani.org.uk/schools/policies-and-guidance/other-policies-and-procedures/addressing-bullying-in-schools-act-0'],
  eaParents: ['Education Authority NI parent information', 'https://www.eani.org.uk/school-management/policies-and-guidance/addressing-bullying-in-schools-act-2016/bullying'],
  abs: ['Addressing Bullying in Schools Act (Northern Ireland) 2016', 'https://www.legislation.gov.uk/nia/2016/25/contents'],
  govBi: ['Department of Education Ireland: Bi Cinealta procedures', 'https://www.gov.ie/en/department-of-education/policy-information/b%C3%AD-cine%C3%A1lta-procedures-to-prevent-and-address-bullying-behaviour-for-primary-and-post-primary-schools/'],
  govCinealtas: ['Department of Education Ireland: Cinealtas', 'https://www.gov.ie/en/department-of-education/publications/cinealtas-action-plan-on-bullying/'],
  tusla: ['Tusla: Children First guidance', 'https://www.tusla.ie/children-first/children-first-guidance-and-legislation/'],
  ncca: ['NCCA: SPHE curriculum', 'https://www.curriculumonline.ie/'],
  webwise: ['Webwise cyberbullying guidance', 'https://www.webwise.ie/cyberbullying-guidance/'],
};

function esc(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function words(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function navHtml() {
  return nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
}

function header() {
  return `<header class="site-header"><nav class="nav" aria-label="Primary navigation"><a class="brand" href="/"><span class="mark">HiP</span><span>HIP Psychology</span></a><div class="nav-links">${navHtml()}</div></nav></header>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-inner"><div>HIP Psychology anti-bullying support for NI and ROI schools.</div><div><a href="/blog/">Blog</a><a href="/resources/free-anti-bullying-classroom-pack/">Free pack</a><a href="/workshops/anti-bullying/">Workshops</a><a href="/sitemap.xml">Sitemap</a></div></div></footer>`;
}

function orgSchema() {
  return { '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: 'HIP Psychology', url: site, areaServed: ['Northern Ireland', 'Republic of Ireland'], knowsAbout: ['Anti-Bullying Week', 'school wellbeing', 'cyberbullying', 'pupil workshops'] };
}

function breadcrumbSchema(page) {
  const parts = page.slug.split('/').filter(Boolean);
  const itemListElement = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` }];
  let running = '';
  parts.forEach((part, index) => {
    running += `/${part}`;
    itemListElement.push({ '@type': 'ListItem', position: index + 2, name: part.replaceAll('-', ' '), item: `${site}${running}/` });
  });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement };
}

function articleSchema(page) {
  return { '@context': 'https://schema.org', '@type': 'Article', headline: page.h1, description: page.description, author: { '@type': 'Organization', name: 'HIP Psychology' }, publisher: { '@type': 'Organization', name: 'HIP Psychology' }, datePublished: page.datePublished ?? today, dateModified: page.dateModified ?? today, mainEntityOfPage: `${site}${page.slug}` };
}

function blogPostingSchema(page) {
  return { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: page.h1, description: page.description, author: { '@type': 'Organization', name: 'HIP Psychology' }, publisher: { '@type': 'Organization', name: 'HIP Psychology' }, datePublished: page.datePublished ?? today, dateModified: page.dateModified ?? today, mainEntityOfPage: `${site}${page.slug}` };
}

function collectionSchema(page, items) {
  return { '@context': 'https://schema.org', '@type': 'CollectionPage', name: page.h1, description: page.description, url: `${site}${page.slug}`, mainEntity: { '@type': 'ItemList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.h1, url: `${site}${item.slug}` })) } };
}

function faqSchema(page) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

function serviceSchema(page) {
  return { '@context': 'https://schema.org', '@type': 'Service', name: page.h1, serviceType: 'School wellbeing workshops', provider: { '@type': 'EducationalOrganization', name: 'HIP Psychology' }, areaServed: ['Northern Ireland', 'Republic of Ireland'], offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP' } } };
}

function eventSchema() {
  return { '@context': 'https://schema.org', '@type': 'Event', name: 'Anti-Bullying Week 2026', startDate: '2026-11-16', endDate: '2026-11-20', eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode', location: [{ '@type': 'Place', name: 'Northern Ireland schools' }, { '@type': 'Place', name: 'Republic of Ireland schools' }], organizer: { '@type': 'Organization', name: 'HIP Psychology' } };
}

function jsonLd(items) {
  return items.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n  ');
}

function authorityLinks(keys) {
  return `<div class="resource-list">${keys.map((key) => `<a class="resource-link" href="${authority[key][1]}">${authority[key][0]} <span>Open</span></a>`).join('')}</div>`;
}

function ctaBlock(kind = 'pack') {
  if (kind === 'workshop') {
    return `<section class="section"><div class="cta-band"><div><h2>Book an anti-bullying workshop for your school</h2><p>Choose primary, post-primary or staff CPD support and HIP Psychology will shape the session around your school context.</p></div><a class="button" href="/workshops/anti-bullying/">View workshops</a></div></section>`;
  }
  return `<section class="section"><div class="cta-band"><div><h2>Download the free Anti-Bullying Week pack</h2><p>Assembly scripts, lesson plans, Odd Socks Day printables and a parent newsletter template for Anti-Bullying Week 2026.</p></div><a class="button" href="/resources/free-anti-bullying-classroom-pack/">Get the free pack</a></div></section>`;
}

function leadForm(pack, pdf) {
  return `<form class="lead-form" action="mailto:hello@hippsychology.com" method="post" enctype="text/plain"><label>Name<input name="name" autocomplete="name"></label><label>School<input name="school" autocomplete="organization"></label><label>Role<select name="role"><option>Principal / Vice-Principal</option><option>Pastoral Care Lead</option><option>Wellbeing Coordinator</option><option>Teacher</option><option>Parent</option></select></label><label>Email<input name="email" type="email" autocomplete="email"></label><div class="form-actions"><a class="button" href="${pdf}">Download preview PDF</a><button class="button secondary" type="submit">Register interest</button></div><p class="form-note">Preview flow: final delivery will connect this form to the confirmed email platform and nurture sequence.</p><input type="hidden" name="pack" value="${esc(pack)}"></form>`;
}

function pageChrome(page, body, extraSchemas = []) {
  const schemas = [orgSchema(), breadcrumbSchema(page), ...extraSchemas];
  const canonical = `${site}${page.slug}`;
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="stylesheet" href="/styles.css">
  ${jsonLd(schemas)}
</head>
<body>
${header()}
<main>${body}</main>
${footer()}
</body>
</html>
`;
}

function standardPage(page) {
  const intro = `<section class="section"><p class="eyebrow">${page.eyebrow}</p><div class="content"><h1>${page.h1}</h1><p class="lead">${page.lead}</p><div class="toc">${page.sections.map((section) => `<a href="#${section.id}">${section.title}</a>`).join('')}</div>${page.sections.map((section) => `<h2 id="${section.id}">${section.title}</h2>${section.html}`).join('')}<h2>Useful official resources</h2>${authorityLinks(page.links)}</div></section>`;
  const schemaItems = [articleSchema(page), faqSchema(page)];
  if (page.event) schemaItems.push(eventSchema());
  if (page.service) schemaItems.push(serviceSchema(page));
  return pageChrome(page, intro + ctaBlock(page.cta || 'pack'), schemaItems);
}

function card(title, body, link, label) {
  return `<article class="card"><h3>${title}</h3><p>${body}</p><a href="${link}">${label}</a></article>`;
}

function blogCard(post) {
  return `<article class="card blog-card"><p class="blog-meta">${post.category}</p><h3>${post.h1}</h3><p>${post.description}</p><a href="${post.slug}">Read the guide</a></article>`;
}

const blogHub = {
  slug: '/blog/',
  title: 'Anti-bullying blog for schools | HIP Psychology',
  description: 'Practical anti-bullying blog for schools, with Anti-Bullying Week ideas, assemblies, lesson plans, policy prompts and cyberbullying guidance.',
  h1: 'Anti-bullying blog for schools',
};

function blogHubPage() {
  const body = `<section class="section"><p class="eyebrow">School resources</p><div class="content"><h1>${blogHub.h1}</h1><p class="lead">Practical anti-bullying guidance for school leaders, pastoral teams and teachers across Northern Ireland and Ireland. Start with Anti-Bullying Week 2026, then move into assemblies, lesson plans, parent communication, policy review and online safety.</p></div></section><section class="section tight"><div class="grid">${blogPosts.map(blogCard).join('')}</div></section>${ctaBlock('pack')}`;
  return pageChrome(blogHub, body, [collectionSchema(blogHub, blogPosts)]);
}

function blogPostPage(page) {
  const related = blogPosts.filter((post) => (page.related ?? []).includes(post.slug));
  const body = `<section class="section"><p class="eyebrow">${page.category}</p><div class="content"><h1>${page.h1}</h1><p class="lead">${page.lead}</p><div class="toc">${page.sections.map((section) => `<a href="#${section.id}">${section.title}</a>`).join('')}</div>${page.sections.map((section) => `<h2 id="${section.id}">${section.title}</h2>${section.html}`).join('')}<h2>Useful official resources</h2>${authorityLinks(page.links)}${related.length ? `<h2>Related school guides</h2><div class="grid">${related.map(blogCard).join('')}</div>` : ''}</div></section>${ctaBlock(page.cta || 'pack')}`;
  return pageChrome(page, body, [blogPostingSchema(page), faqSchema(page)]);
}

const home = {
  slug: '/',
  title: 'Anti-bullying support for schools | HIP Psychology',
  description: 'Anti-bullying support for schools across NI and Ireland. Download free Anti-Bullying Week plans, policy templates and workshop support.',
  h1: 'Anti-bullying support for schools across Northern Ireland and Ireland',
};

function homePage() {
  const body = `<section class="hero"><div><p class="eyebrow">ANTI-BULLYING WEEK 2026</p><h1>${home.h1}</h1><p class="lead">Free lesson plans, assembly scripts and policy templates for Anti-Bullying Week 2026 (16-20 November), plus expert-led workshops for primary, post-primary and staff teams across NI and ROI.</p><div class="hero-actions"><a class="button" href="/resources/free-anti-bullying-classroom-pack/">Download the free Anti-Bullying Week pack</a><a class="button secondary" href="/workshops/anti-bullying/">Book a workshop for your school</a></div><p class="trust-strip">Trusted by Dalriada High School, St Malachy's College Belfast, Ballymena Primary School and 100+ schools across NI and ROI</p></div><aside class="poster-card" aria-label="HIP Psychology anti-bullying support preview"><div class="poster-top"><div class="poster-brand"><span class="mark">HiP</span><div><strong>HIP Psychology</strong><span>PSYCHOLOGY LTD</span></div></div><div class="badge">Anti-Bullying NI</div></div><h2>Workshops for <span>kindness, respect and resilience</span></h2><p>Practical classroom resources and expert-led school workshops for Anti-Bullying Week 2026.</p><img class="poster-image" src="/classroom.jpg" alt="School wellbeing classroom workshop for Anti-Bullying Week" loading="eager"><div class="quick-links"><a href="/anti-bullying-week/2026/">Anti-Bullying Week 2026 guide <span>Read</span></a><a href="/anti-bullying-week/odd-socks-day-2026/">Odd Socks Day 2026 <span>Plan</span></a><a href="/resources/free-anti-bullying-classroom-pack/">Free classroom pack <span>Get</span></a><a href="/workshops/anti-bullying/">Workshop options <span>View</span></a></div></aside></section><section class="section tight"><h2>Free resources for Anti-Bullying Week</h2><div class="grid">${card('Anti-Bullying Week 2026 guide', 'Dates, Break the Silence theme notes, daily activities, assembly scripts and lesson plans for primary and post-primary classrooms.', '/anti-bullying-week/2026/', 'Read the full guide')}${card('Odd Socks Day 2026 ideas', 'Assembly prompts, classroom activities and parent-message copy for schools marking Odd Socks Day on Monday 16 November.', '/anti-bullying-week/odd-socks-day-2026/', 'Plan Odd Socks Day')}${card('Free lesson plans and assembly scripts', 'Download-ready resources mapped to NI and ROI contexts, designed for KS1-KS5 and primary/post-primary use.', '/resources/free-anti-bullying-classroom-pack/', 'Get the free pack')}${card('Policy compliance templates', 'Free checklist routes aligned to the Addressing Bullying in Schools Act (NI) 2016 and Bi Cinealta procedures for Irish schools.', '/resources/anti-bullying-policy-checklist/', 'Get the checklist')}</div></section><section class="section"><h2>Support for every school team</h2><div class="grid">${card('Anti-bullying programme support', 'Build a whole-school programme that connects awareness activity, pupil voice, reporting routes, policy review and staff confidence.', '/anti-bullying/', 'Explore programme support')}${card('Northern Ireland schools', 'Guidance around the Addressing Bullying in Schools Act, Education Authority resources, policy review and whole-school prevention.', '/northern-ireland-schools/', 'Explore NI school support')}${card('Republic of Ireland schools', 'Practical context around Cinealtas, Bi Cinealta procedures, school culture and prevention in primary and post-primary settings.', '/republic-of-ireland-schools/', 'Explore ROI school support')}${card('Cyberbullying and online safety', 'Age-appropriate support for group chats, online reporting, bystander behaviour, social platforms and pupil wellbeing.', '/cyberbullying-in-schools/', 'Explore cyberbullying support')}</div></section>${ctaBlock('pack')}`;
  return pageChrome(home, body, []);
}

const pages = [
  {
    slug: '/anti-bullying/', title: 'Anti-bullying programme for schools | HIP Psychology', description: 'Anti-bullying programme support for schools, including pupil workshops, staff guidance, reporting routes and Anti-Bullying Week follow-up.', eyebrow: 'School programme', h1: 'Anti-bullying programme for schools', lead: 'A useful anti-bullying programme gives pupils clear language, gives staff shared response tools and helps leaders connect awareness activity with pastoral systems.', service: true, cta: 'workshop', links: ['aba', 'ea', 'govBi'],
    sections: [
      { id: 'programme', title: 'What an anti-bullying programme should include', html: '<p>A school anti-bullying programme should cover prevention, early intervention, reporting routes, recording, pupil voice, parent communication and follow-up. Anti-Bullying Week can start the conversation, but the strongest work continues through assemblies, classroom activities, staff briefings and pastoral review.</p><p>HIP Psychology positions the programme around kindness, respect, resilience and practical help-seeking, with language that can be adapted for primary, post-primary, NI and ROI settings.</p>' },
      { id: 'systems', title: 'Connect lessons with school systems', html: '<p>Pupils need more than a poster. They need to know what bullying behaviour looks like, who they can speak to, what happens after a report and how bystanders can support without escalating risk.</p><p>School leaders can use the free resources for assemblies and lesson plans, then use the policy checklist pages to review whether the same language appears in staff guidance, parent communication and written procedures.</p>' },
      { id: 'delivery', title: 'Workshop and resource routes', html: '<p>For awareness week planning, start with the <a href="/anti-bullying-week/2026/">Anti-Bullying Week 2026 guide</a> and the <a href="/anti-bullying-week/odd-socks-day-2026/">Odd Socks Day 2026 ideas</a>. For implementation, pair those resources with a pupil workshop or staff CPD session.</p><p><a href="/workshops/anti-bullying/">View anti-bullying workshops</a> or <a href="/resources/free-anti-bullying-classroom-pack/">download the free classroom pack</a>.</p>' },
      { id: 'phases', title: 'Primary and post-primary support', html: '<p>Primary pupils usually need simple language around kindness, friendship, exclusion and telling a trusted adult. Post-primary pupils often need deeper discussion around peer groups, group chats, social pressure, prejudice-based bullying and online escalation.</p><p>A whole-school programme should keep the same core principles while changing examples, discussion prompts and outcomes by age and context.</p>' },
    ],
    faqs: [['What is an anti-bullying programme?', 'It is a connected plan for prevention, reporting, response, pupil learning, staff consistency and follow-up.'], ['Can it support Anti-Bullying Week?', 'Yes. Awareness week activity works best when it connects to policy, pastoral systems and classroom follow-up.'], ['Is this suitable for NI and ROI schools?', 'Yes. The resources are written for schools across Northern Ireland and the Republic of Ireland, with links to official context pages.'], ['What is the best first step?', 'Download the classroom pack for immediate activity, then review workshop options if the school wants live delivery.']],
  },
  {
    slug: '/anti-bullying-week/2026/', title: 'Anti-Bullying Week 2026: Break the Silence | HIP Psychology', description: 'Anti-Bullying Week 2026 runs 16-20 November with the Break the Silence theme. Plan assemblies, lessons, Odd Socks Day and school workshops.', eyebrow: 'Campaign guide', h1: 'Anti-Bullying Week 2026: Break the Silence guide for schools', lead: 'Anti-Bullying Week 2026 runs from Monday 16 to Friday 20 November with the theme Break the Silence. This guide helps school leaders plan assemblies, classroom activity, pupil voice and follow-up work that lasts beyond one awareness week.', event: true, links: ['aba', 'oddSocks', 'ea', 'govBi', 'tusla'],
    sections: [
      { id: 'dates', title: 'Dates and theme', html: '<p>Anti-Bullying Week 2026 runs from Monday 16 November to Friday 20 November. The Anti-Bullying Alliance theme is Break the Silence, which gives schools a clear route into pupil voice, safe reporting, trusted adults and the reasons bullying can stay hidden.</p><p>Planning early matters because pastoral teams need time to coordinate assemblies, class activities, parent communication, staff reminders and any external workshop dates.</p>' },
      { id: 'daily-plan', title: 'Daily school plan', html: '<p>Monday can focus on <a href="/anti-bullying-week/odd-socks-day-2026/">Odd Socks Day 2026</a> and celebrating difference. Tuesday can explore what silence around bullying looks like. Wednesday can introduce bystander choices. Thursday can focus on cyberbullying, screenshots and group chats. Friday can close with pupil voice, reporting routes and commitments for the rest of the school year.</p><p>The strongest campaigns give pupils repeated, age-appropriate chances to practise language for seeking help and supporting peers.</p>' },
      { id: 'assembly', title: 'Assembly and lesson plan ideas', html: '<p>An Anti-Bullying Week assembly should create shared language without putting individual pupils on the spot. A useful structure is: define bullying behaviour, connect the Break the Silence theme to help-seeking, show pupils where to report concerns and close with one realistic action each year group can practise.</p><p>Classroom lessons can then explore scenarios by phase: friendship and exclusion in primary, group dynamics and bystander pressure in KS3, and online escalation, prejudice-based bullying and repair in older year groups.</p>' },
      { id: 'whole-school', title: 'Whole-school campaign planning', html: '<p>A useful campaign links visible activity with policy and pastoral systems. Assemblies create shared attention, lessons create deeper conversation, parent letters keep families informed, and staff briefings keep the response consistent.</p><p>Schools should decide in advance who owns the week, how incidents will be recorded, what resources each year group will use and how pupil feedback will be gathered afterwards.</p>' },
      { id: 'downloads', title: 'Downloads and workshops', html: '<p>Use the free classroom pack for assembly scripts, lesson plans and Odd Socks Day material. Schools that want live delivery can book HIP Psychology workshops for primary, post-primary or staff teams.</p><p><a href="/resources/free-anti-bullying-classroom-pack/">Download the free classroom pack</a> or <a href="/workshops/anti-bullying/">view anti-bullying workshops</a>.</p>' },
    ],
    faqs: [['When is Anti-Bullying Week 2026?', 'Anti-Bullying Week 2026 runs from Monday 16 to Friday 20 November.'], ['What is the Anti-Bullying Week 2026 theme?', 'The 2026 theme is Break the Silence.'], ['What should schools plan first?', 'Start with dates, year-group activity, staff briefing needs, parent communication and any external workshop booking.'], ['Can the same activities work for primary and post-primary?', 'The core themes can be shared, but discussion prompts, examples and learning outcomes should be age-appropriate.'], ['What should happen after Anti-Bullying Week?', 'Schools should review pupil feedback, reinforce reporting routes and connect follow-up activity to their anti-bullying policy.']],
  },
  {
    slug: '/anti-bullying-week/odd-socks-day-2026/', title: 'Odd Socks Day 2026 ideas for schools | HIP Psychology', description: 'Odd Socks Day 2026 ideas for schools, including assembly prompts, classroom activities, parent messages and Anti-Bullying Week planning.', eyebrow: 'Odd Socks Day', h1: 'Odd Socks Day 2026 ideas for schools', lead: 'Odd Socks Day 2026 starts Anti-Bullying Week on Monday 16 November. Use it as a visible, low-barrier way to celebrate difference and open a careful conversation about bullying, silence and help-seeking.', links: ['oddSocks', 'aba', 'ea', 'govBi'],
    sections: [
      { id: 'purpose', title: 'What Odd Socks Day is for', html: '<p>Odd Socks Day works because it is simple, visible and inclusive. Pupils can take part without needing expensive costumes, and teachers can use the moment to talk about difference, belonging and the value of not pretending everyone is the same.</p><p>For 2026, schools can connect the activity to the Break the Silence theme by asking how people can notice exclusion, support a peer and speak to a trusted adult when something feels wrong.</p>' },
      { id: 'assembly', title: 'Odd Socks Day assembly prompts', html: '<p>Keep the assembly short, warm and practical. Ask pupils why odd socks are easier to talk about than bullying, then bridge into the idea that some pupils stay quiet because they feel embarrassed, worried or unsure who will help.</p><p>Close by naming the school reporting routes clearly and giving pupils one sentence they can use: I need help with something that is happening to me or someone else.</p>' },
      { id: 'classroom', title: 'Classroom activities by phase', html: '<p>Primary classes can draw or write about what makes a good friend, practise trusted-adult language and sort kind, unkind and bullying behaviours. Post-primary classes can analyse group-chat scenarios, discuss bystander choices and map how silence can protect bullying behaviour.</p><p>The activity should never ask pupils to disclose personal incidents publicly. Keep examples fictional, structured and easy for staff to hold safely.</p>' },
      { id: 'parents', title: 'Parent message for schools', html: '<p>Parent communication can explain that Odd Socks Day is not just a dress-up activity. It is part of Anti-Bullying Week 2026 and supports school conversations about respect, inclusion, reporting routes and online behaviour.</p><p>The free classroom pack includes parent newsletter copy that schools can adapt for NI and ROI contexts.</p>' },
    ],
    faqs: [['When is Odd Socks Day 2026?', 'Odd Socks Day 2026 is Monday 16 November, the first day of Anti-Bullying Week 2026.'], ['Do pupils need to buy anything?', 'No. The point is to wear odd socks if they can, not to create cost or pressure for families.'], ['How can schools link it to learning?', 'Use a short assembly, age-appropriate class activity and clear reminders about trusted adults and reporting routes.'], ['Can HIP Psychology support Odd Socks Day?', 'Yes. Schools can use the free pack or book a workshop as part of their Anti-Bullying Week programme.']],
  },
  {
    slug: '/northern-ireland-schools/', title: 'Anti-bullying support Northern Ireland schools | HIP Psychology', description: 'Anti-bullying support for Northern Ireland schools, including policy context, EA resources, classroom packs and workshop options.', eyebrow: 'Northern Ireland', h1: 'Anti-bullying support for Northern Ireland schools', lead: 'Northern Ireland schools need anti-bullying work that fits the Addressing Bullying in Schools Act, Education Authority guidance, pastoral practice and pupil wellbeing.', links: ['abs', 'ea', 'eaParents'],
    sections: [
      { id: 'framework', title: 'Northern Ireland policy context', html: '<p>The Addressing Bullying in Schools Act (Northern Ireland) 2016 gives schools a clear legal context for anti-bullying policy, recording and review. Campaign activity should therefore connect with real school procedures, not sit apart from them.</p><p>This hub page links to the Phase 1 NI policy pages covering the Act summary, policy template and Education Authority resources.</p>' },
      { id: 'school-use', title: 'How schools can use this hub', html: '<p>Principals, pastoral leads and anti-bullying coordinators can use the campaign resources for November planning, then use the policy checklist to review consistency in recording, language and response.</p><p>For pupil-facing activity, the classroom pack gives ready-to-use assembly and lesson material that can be adapted by phase.</p>' },
      { id: 'ni-links', title: 'Northern Ireland policy pages', html: '<ul><li><a href="/northern-ireland-schools/addressing-bullying-act-summary/">Addressing Bullying in Schools Act summary</a></li><li><a href="/northern-ireland-schools/anti-bullying-policy-template/">Anti-bullying policy template for NI schools</a></li><li><a href="/northern-ireland-schools/education-authority-resources/">Education Authority resources guide</a></li><li><a href="/resources/anti-bullying-policy-checklist-ni/">NI Anti-Bullying Policy Checklist</a></li></ul>' },
    ],
    faqs: [['Who is this page for?', 'It is for NI principals, pastoral leaders, anti-bullying coordinators, teachers and wellbeing staff.'], ['Does this replace legal guidance?', 'No. It supports school planning and links to official sources, but schools should still use statutory and Education Authority guidance.'], ['Can HIP Psychology deliver workshops in NI schools?', 'Yes. The workshop pages set out primary, post-primary and staff CPD options.'], ['What is the main lead magnet for NI schools?', 'The NI Anti-Bullying Policy Checklist is the main compliance-focused lead magnet.']],
  },
  {
    slug: '/northern-ireland-schools/addressing-bullying-act-summary/', title: 'Addressing Bullying in Schools Act summary | HIP Psychology', description: 'Read a practical Addressing Bullying in Schools Act NI summary for school anti-bullying planning, recording and policy review.', eyebrow: 'NI policy', h1: 'Addressing Bullying in Schools Act NI summary for schools', lead: 'A practical summary page for school leaders reviewing how anti-bullying activity, policy language and recording expectations connect under the Northern Ireland framework.', links: ['abs', 'ea'],
    sections: [
      { id: 'requirements', title: 'What the Act requires schools to consider', html: '<p>The Act created a statutory framework for how grant-aided schools in Northern Ireland address bullying. For school teams, the practical task is to maintain clear policy language, consistent recording and a review process that staff understand.</p><p>This page is written as a planning aid and links out to the legislation and Education Authority resources for official detail.</p>' },
      { id: 'definitions', title: 'Definitions and scope', html: '<p>Schools should be precise about repeated behaviour, intention, impact, power imbalance and the contexts in which school responsibility may apply. Online behaviour and journeys to and from school can become relevant where they affect learning or wellbeing in school.</p>' },
      { id: 'missed', title: 'What schools commonly miss', html: '<p>Common gaps include vague reporting routes, inconsistent terminology, limited pupil consultation, old parent-facing documents and campaign activity that is not reflected in the written policy.</p><p><a href="/resources/anti-bullying-policy-checklist/">Download the policy checklist preview</a> for the review structure.</p>' },
    ],
    faqs: [['Is this legal advice?', 'No. It is a practical education planning summary with links to official sources.'], ['Who should own anti-bullying policy review?', 'Usually senior leadership with pastoral, safeguarding and anti-bullying coordinator input.'], ['How often should policy be reviewed?', 'Schools should follow statutory and Education Authority guidance, and review after meaningful incidents or procedural changes.'], ['Can workshops support compliance?', 'Workshops do not replace policy work, but they can help pupils and staff understand the behaviours, reporting routes and culture behind the policy.']],
  },
  {
    slug: '/northern-ireland-schools/anti-bullying-policy-template/', title: 'Anti-bullying policy template NI | HIP Psychology', description: 'Anti-bullying policy template guidance for NI schools. Review structure, pupil consultation, recording and common omissions.', eyebrow: 'NI template', h1: 'Anti-bullying policy template for Northern Ireland schools', lead: 'A practical structure for reviewing an NI school anti-bullying policy before Anti-Bullying Week or a wider pastoral review.', links: ['abs', 'ea', 'eaParents'],
    sections: [
      { id: 'structure', title: 'Template structure', html: '<p>A useful anti-bullying policy should define bullying behaviour, explain reporting routes, describe recording expectations, set out responsibilities, show how pupils and parents are consulted, and explain how the policy is reviewed.</p><p>The template should also make clear how the school responds after a concern is raised: who listens, who records, who communicates with home, what follow-up checks happen and how staff know whether the behaviour has stopped.</p>' },
      { id: 'consultation', title: 'Pupil and parent consultation', html: '<p>Policy review is stronger when pupils can explain whether reporting routes feel realistic and whether adults respond consistently. Parent-facing language should be clear enough for families to understand what happens after a concern is raised.</p><p>Schools can use pupil council, class discussion, anonymous feedback or parent surveys to test whether the policy is visible and believable. The most useful consultation asks practical questions, not just whether people have read the document.</p>' },
      { id: 'checklist', title: 'Download the checklist', html: '<p>The Phase 1 NI checklist will turn this page into a gated download with a review schedule, recording prompts and a clear policy audit structure.</p><p><a href="/resources/anti-bullying-policy-checklist-ni/">Open the NI Anti-Bullying Policy Checklist</a> or use the <a href="/resources/anti-bullying-policy-checklist/">general policy checklist preview</a> if you want the cross-border version first.</p>' },
    ],
    faqs: [['Can schools use a generic template?', 'A generic template is only useful if it is adapted to the school context and checked against current NI requirements.'], ['Should pupils help review the policy?', 'Yes, pupil voice helps schools test whether reporting routes and language make sense in practice.'], ['Should the policy mention online behaviour?', 'Yes, where online behaviour affects wellbeing or learning in school, it should be addressed clearly.'], ['What is the CTA for this page?', 'The main CTA is the NI policy checklist download, followed by staff CPD or workshop enquiry.']],
  },
  {
    slug: '/northern-ireland-schools/education-authority-resources/', title: 'Education Authority anti-bullying resources | HIP Psychology', description: 'Education Authority anti-bullying resources explained for NI schools, with links to guidance, parent information and workshop support.', eyebrow: 'NI resources', h1: 'Education Authority anti-bullying resources for schools', lead: 'A guide to using Education Authority anti-bullying resources alongside classroom activity, staff briefings and policy review.', links: ['ea', 'eaParents'],
    sections: [
      { id: 'ea', title: 'Key EA resources', html: '<p>The Education Authority publishes resources and information connected to the Addressing Bullying in Schools Act. This page exists to point school teams toward official material while keeping the HIP hub useful for planning and implementation.</p><p>Official resources should sit at the centre of any NI policy review. HIP materials then help schools turn that policy language into assemblies, lessons, staff reminders and parent communication that pupils and families can understand.</p>' },
      { id: 'coordinator', title: 'Coordinator and pastoral team use', html: '<p>Anti-bullying coordinators and pastoral leads can use official resources for policy alignment, then use HIP classroom materials for assemblies, tutor activities and pupil-facing discussion.</p><p>A practical review can ask whether staff are using the same definitions, whether incidents are recorded consistently, whether pupils know who to speak to and whether follow-up checks are happening after concerns are raised.</p>' },
      { id: 'training', title: 'Training and workshop routes', html: '<p>Where staff need shared language or pupils need guided discussion, HIP Psychology workshops can sit alongside the school policy process.</p><p><a href="/workshops/anti-bullying/">View workshop options</a> or download the <a href="/resources/anti-bullying-policy-checklist-ni/">NI Anti-Bullying Policy Checklist</a> for a policy-focused starting point.</p>' },
    ],
    faqs: [['Why link to EA resources?', 'Policy pages should cite official sources and help schools find authoritative guidance.'], ['Is this page for parents or schools?', 'It is primarily for school leaders and pastoral teams, but parents may also find the official links useful.'], ['Can this page support local SEO?', 'Yes, it strengthens the NI policy cluster and links to workshop conversion pages.'], ['Does HIP Psychology provide audits?', 'The final service wording should depend on the approved workshop and policy-review offer.']],
  },
  {
    slug: '/republic-of-ireland-schools/', title: 'Anti-bullying support Irish schools | HIP Psychology', description: 'Anti-bullying support for Irish schools, including Cinealtas, Bi Cinealta procedures, policy checklists and workshop planning.', eyebrow: 'Republic of Ireland', h1: 'Anti-bullying support for schools in Ireland', lead: 'ROI schools need anti-bullying work that connects classroom practice with Cinealtas, Bi Cinealta procedures, online safety and whole-school culture.', links: ['govBi', 'govCinealtas', 'ncca', 'tusla'],
    sections: [
      { id: 'context', title: 'ROI policy context', html: '<p>Cinealtas and the Bi Cinealta procedures create a clear whole-education context for preventing and addressing bullying behaviour in primary and post-primary schools.</p><p>This hub links to explainers for Cinealtas, primary procedures, post-primary procedures and child protection overlap. It is written to help school leaders move from policy awareness into practical classroom, pastoral and parent-facing work.</p>' },
      { id: 'school-use', title: 'How schools can use this hub', html: '<p>School leaders can use the policy pages for compliance-aware planning and use the classroom pack for Anti-Bullying Week lessons, assemblies and parent communication.</p><p>For planning meetings, start with the school phase, then check whether prevention, intervention, recording, oversight and family communication are all covered. The ROI checklist gives a simple review route before deeper staff CPD or pupil workshop support.</p>' },
      { id: 'roi-links', title: 'ROI policy pages', html: '<ul><li><a href="/republic-of-ireland-schools/cinealtas-explained/">Cinealtas explained</a></li><li><a href="/republic-of-ireland-schools/bi-cinealta-procedures-primary/">Bi Cinealta procedures for primary schools</a></li><li><a href="/republic-of-ireland-schools/bi-cinealta-procedures-post-primary/">Bi Cinealta procedures for post-primary schools</a></li><li><a href="/republic-of-ireland-schools/tusla-guidance-summary/">Tusla guidance summary</a></li><li><a href="/resources/anti-bullying-policy-checklist-roi/">ROI Anti-Bullying Policy Checklist</a></li></ul>' },
    ],
    faqs: [['Who is this page for?', 'It is for ROI school leaders, wellbeing teams, SPHE leads and pastoral staff.'], ['Does this replace Department guidance?', 'No. It links to official guidance and supports implementation planning.'], ['Can HIP Psychology support ROI schools?', 'Yes, the hub positions HIP Psychology for primary, post-primary and staff support across Ireland.'], ['What is the main ROI lead magnet?', 'The ROI Anti-Bullying Policy Checklist is the main compliance-focused download.']],
  },
  {
    slug: '/republic-of-ireland-schools/cinealtas-explained/', title: 'Cinealtas explained for schools | HIP Psychology', description: 'Cinealtas explained for Irish schools, including whole-school bullying prevention, Bi Cinealta links and classroom planning.', eyebrow: 'ROI policy', h1: 'Cinealtas explained for schools', lead: 'Cinealtas sets out a whole-education approach to preventing and addressing bullying. This page translates that policy context into practical planning questions for schools.', links: ['govCinealtas', 'govBi', 'ncca'],
    sections: [
      { id: 'meaning', title: 'What Cinealtas is', html: '<p>Cinealtas is Ireland\'s action plan on bullying. It frames prevention and response as a whole-education responsibility, connecting school culture, curriculum, policy and support.</p><p>For schools, the important point is that anti-bullying work should not live in one annual awareness week or one written policy. It needs to show up in relationships, everyday language, reporting routes and how adults follow up concerns.</p>' },
      { id: 'implications', title: 'School-level implications', html: '<p>For school leaders, the practical question is how policy becomes behaviour: what pupils learn, how staff respond, how parents are kept informed and how patterns are reviewed.</p><p>Useful implementation work might include reviewing pupil voice, checking whether staff use the same definitions, mapping who records concerns and making parent communication easier to understand after an incident.</p>' },
      { id: 'abw', title: 'Using Anti-Bullying Week', html: '<p>Anti-Bullying Week can act as a visible implementation point for the wider Cinealtas principles when schools use it to reinforce language, reporting routes and pupil voice.</p><p>The week is strongest when schools use assemblies and lessons to open a conversation, then return to the same messages through SPHE, pastoral care, tutor time and staff briefings across the year.</p>' },
    ],
    faqs: [['Is Cinealtas the same as Bi Cinealta?', 'Cinealtas is the wider action plan; Bi Cinealta procedures provide school procedures to prevent and address bullying behaviour.'], ['Should schools mention Cinealtas in campaign planning?', 'Yes, where it helps connect classroom activity to whole-school priorities.'], ['Does this page need official links?', 'Yes, it links to gov.ie and curriculum sources.'], ['What CTA should this page use?', 'The ROI policy checklist and workshop options are the main CTAs.']],
  },
  {
    slug: '/republic-of-ireland-schools/bi-cinealta-procedures-primary/', title: 'Bi Cinealta procedures primary school | HIP Psychology', description: 'Bi Cinealta procedures for primary schools explained with prevention, intervention, recording and parent communication prompts.', eyebrow: 'ROI primary', h1: 'Bi Cinealta procedures for primary schools', lead: 'A primary-school focused guide to Bi Cinealta planning, with practical prevention, intervention and parent communication prompts.', links: ['govBi', 'ncca', 'tusla'],
    sections: [
      { id: 'primary', title: 'Primary school prevention', html: '<p>Primary prevention should use age-appropriate language around kindness, friendship, exclusion, telling a trusted adult and safe online behaviour.</p><p>Lessons should be concrete and calm: pupils can sort examples, practise help-seeking sentences, name trusted adults and learn the difference between a one-off disagreement and repeated harmful behaviour.</p>' },
      { id: 'intervention', title: 'Intervention and recording', html: '<p>Schools need clear steps for listening to children, recording concerns, communicating with families and checking whether behaviour has stopped.</p><p>Primary settings also need careful follow-up because younger children may not have the language to explain patterns clearly. Staff consistency helps children feel safe enough to report early.</p>' },
      { id: 'parents', title: 'Parent communication', html: '<p>Parent letters should avoid jargon and explain what the school is doing, what parents can do at home and how follow-up will happen.</p><p>The <a href="/resources/anti-bullying-policy-checklist-roi/">ROI Anti-Bullying Policy Checklist</a> gives leaders a practical way to review prevention, intervention and parent communication before or after a campaign week.</p>' },
    ],
    faqs: [['Is this page primary-specific?', 'Yes, examples and language are aimed at primary school settings.'], ['What lead magnet fits this page?', 'The ROI policy checklist is the main download.'], ['Can classroom resources support Bi Cinealta?', 'Yes, resources can support prevention and pupil understanding.'], ['Does this include child protection advice?', 'It links to Tusla for official child protection guidance.']],
  },
  {
    slug: '/republic-of-ireland-schools/bi-cinealta-procedures-post-primary/', title: 'Bi Cinealta procedures post-primary | HIP Psychology', description: 'Bi Cinealta procedures for post-primary schools, including peer dynamics, online behaviour, recording and parent communication.', eyebrow: 'ROI post-primary', h1: 'Bi Cinealta procedures for post-primary schools', lead: 'A post-primary guide to using Bi Cinealta procedures in real school contexts, including online behaviour, peer dynamics and staff consistency.', links: ['govBi', 'webwise', 'tusla'],
    sections: [
      { id: 'post-primary', title: 'Post-primary prevention', html: '<p>Post-primary prevention should address group dynamics, bystander behaviour, social exclusion, prejudice-based bullying and online escalation in language pupils recognise.</p><p>Older pupils often know the official message already, so lessons need realistic scenarios: group-chat pressure, screenshots, rumours, identity-based harm, silence from bystanders and the fear of making things worse by reporting.</p>' },
      { id: 'response', title: 'Response and oversight', html: '<p>Consistent recording, year-head communication and follow-up checks help schools avoid one-off responses that do not change behaviour.</p><p>Oversight also matters because patterns can sit across classes, year groups and online spaces. A useful process helps staff join the dots without exposing pupils to unnecessary public attention.</p>' },
      { id: 'online', title: 'Online behaviour', html: '<p>Group chats, screenshots, image sharing and anonymous accounts should be part of the conversation, especially when online behaviour affects attendance, wellbeing or learning.</p><p>Pair this page with the <a href="/cyberbullying-in-schools/">cyberbullying in schools guide</a> and the ROI checklist when planning policy review or pupil workshops.</p>' },
    ],
    faqs: [['Is this page post-primary-specific?', 'Yes, examples focus on adolescents, peer groups and online behaviour.'], ['What workshop fits this page?', 'The post-primary anti-bullying workshop is the main conversion CTA.'], ['Does it cover cyberbullying?', 'It links to the dedicated cyberbullying hub for deeper detail.'], ['What lead magnet fits this page?', 'The ROI policy checklist is the main download.']],
  },
  {
    slug: '/republic-of-ireland-schools/tusla-guidance-summary/', title: 'Tusla anti-bullying guidance summary | HIP Psychology', description: 'Tusla guidance summary for schools considering when bullying behaviour overlaps with child protection and safeguarding concern.', eyebrow: 'ROI safeguarding', h1: 'Tusla guidance summary for anti-bullying planning', lead: 'A practical signposting page for schools considering when bullying behaviour may overlap with child protection, safeguarding or Children First responsibilities.', links: ['tusla', 'govBi'],
    sections: [
      { id: 'role', title: 'Tusla role and Children First context', html: '<p>Tusla is the official child and family agency in Ireland. Schools should use official Children First guidance when a bullying concern may become a child protection concern.</p><p>This page is included because anti-bullying planning sometimes overlaps with safeguarding, especially where there are threats, coercion, image sharing, serious emotional harm or concerns about a child outside school.</p>' },
      { id: 'escalation', title: 'When to escalate', html: '<p>Escalation depends on the nature, severity and risk around the behaviour. School staff should follow safeguarding procedures and use official guidance rather than relying on campaign resources alone.</p><p>A practical school process should help staff recognise when a concern remains a pastoral matter, when senior oversight is needed and when the designated liaison person or child protection procedures should be involved.</p>' },
      { id: 'planning', title: 'How this fits Anti-Bullying Week', html: '<p>Anti-Bullying Week resources can reinforce help-seeking and reporting, but safeguarding decisions must follow the school\'s established procedures.</p><p>For pupil-facing activity, keep the focus on trusted adults, early help and safe reporting. For staff, use the week as a prompt to check whether anti-bullying, online safety and safeguarding routes are clearly understood.</p>' },
    ],
    faqs: [['Is this child protection advice?', 'No. It is a signposting page that links to official Tusla guidance.'], ['Why include Tusla on an anti-bullying hub?', 'Because some bullying concerns overlap with safeguarding and schools need clear signposts.'], ['Who should read this page?', 'School leaders, designated liaison persons and pastoral staff.'], ['What CTA should this page use?', 'The policy checklist and staff CPD workshop are the main CTAs.']],
  },
  {
    slug: '/cyberbullying-in-schools/', title: 'Cyberbullying in schools: guidance and workshops | HIP Psychology', description: 'Cyberbullying in schools guidance for NI and Ireland, including group chats, screenshots, reporting routes, lessons and workshops.', eyebrow: 'Online safety', h1: 'Cyberbullying in schools: guidance, lessons and workshops', lead: 'Cyberbullying work should help pupils understand online escalation, group-chat pressure, screenshots, image sharing, reporting routes and how to support peers safely.', cta: 'workshop', links: ['webwise', 'ea', 'govBi', 'tusla'],
    sections: [
      { id: 'what-counts', title: 'What cyberbullying can look like in school life', html: '<p>Cyberbullying can include repeated harmful messages, exclusion from group chats, sharing humiliating screenshots, pressure around images, anonymous accounts, rumour spreading and targeted comments that follow a pupil into school.</p><p>Schools need age-appropriate language that recognises how quickly online behaviour can affect attendance, learning, friendship groups and wellbeing.</p>' },
      { id: 'group-chats', title: 'Group chats, screenshots and bystander choices', html: '<p>Many pupils are not the person posting the harmful message, but they may still be part of the audience that allows it to spread. Lessons should help pupils understand forwarding, saving, reacting and staying silent as choices that can increase or reduce harm.</p><p>Useful discussion stays practical: what should a pupil save, who should they tell, when should they leave a chat, and how can they support someone without making the situation worse?</p>' },
      { id: 'response', title: 'School response and reporting routes', html: '<p>Cyberbullying incidents need clear reporting routes, calm evidence handling and consistent follow-up. Staff should know how to record concerns, when safeguarding routes may be needed, and how to avoid asking pupils to manage complex online conflict alone.</p><p>For Anti-Bullying Week 2026, schools can link cyberbullying lessons to the Break the Silence theme by focusing on trusted adults, early help and safe reporting.</p>' },
      { id: 'workshops', title: 'Cyberbullying workshops and resources', html: '<p>HIP Psychology workshops can cover online bystander behaviour, digital pressure, peer dynamics, reporting and support-seeking for primary or post-primary pupils.</p><p><a href="/workshops/anti-bullying/">View anti-bullying workshop options</a> or <a href="/resources/free-anti-bullying-classroom-pack/">download the free classroom pack</a>.</p>' },
    ],
    faqs: [['What is cyberbullying?', 'Cyberbullying is bullying behaviour carried out through digital technology, including messages, images, social platforms, group chats or online exclusion.'], ['Should schools teach cyberbullying during Anti-Bullying Week?', 'Yes. Online behaviour is one of the most relevant areas for older pupils and can be handled through careful, age-appropriate scenarios.'], ['Can this support primary schools?', 'Yes, but the examples should be simple and focused on kindness, trusted adults and safe online behaviour.'], ['When should safeguarding procedures be used?', 'Schools should follow their own safeguarding procedures and official guidance whenever online behaviour raises child protection or significant wellbeing concerns.']],
  },
];

const blogPosts = [
  {
    slug: '/blog/anti-bullying-week-2026-assembly-ideas/',
    title: 'Anti-Bullying Week 2026 assembly ideas | HIP Psychology',
    description: 'Anti-Bullying Week 2026 assembly ideas for primary and post-primary schools using the Break the Silence theme.',
    eyebrow: 'Assembly planning',
    category: 'Anti-Bullying Week',
    h1: 'Anti-Bullying Week 2026 assembly ideas',
    lead: 'A strong Anti-Bullying Week assembly gives pupils shared language, names the reporting routes clearly and opens the Break the Silence theme without asking anyone to disclose personal experiences in public.',
    cta: 'pack',
    links: ['aba', 'oddSocks', 'ea', 'govBi'],
    related: ['/blog/anti-bullying-week-staff-briefing-template/', '/blog/parent-letter-anti-bullying-week-template/', '/blog/bystander-activities-anti-bullying-week/'],
    sections: [
      { id: 'structure', title: 'A simple assembly structure', html: '<p>Open with the theme: Break the Silence. Explain that silence can happen when pupils feel embarrassed, worried they will not be believed, or unsure what adults will do next. Keep the tone calm and practical.</p><p>Then define bullying behaviour in age-appropriate language, give two fictional examples, name the trusted adults in school and close with one safe sentence pupils can use if they need help: I need to talk to someone about something that is happening.</p>' },
      { id: 'primary', title: 'Primary assembly idea', html: '<p>For primary pupils, build the assembly around kindness, difference, telling a trusted adult and not joining in with exclusion. Use simple scenarios: someone being left out every lunchtime, a repeated nickname that hurts, or a message in a class chat that makes a pupil anxious.</p><p>Ask pupils to identify the helpful adult action, the safe friend action and the sentence a pupil could use to ask for help.</p>' },
      { id: 'post-primary', title: 'Post-primary assembly idea', html: '<p>For post-primary pupils, focus on social pressure, group chats, screenshots and bystander choices. Pupils usually understand the headline message, so the assembly should make the hidden parts visible: fear of being labelled a tell-tale, not wanting to lose friends, or assuming adults cannot help with online behaviour.</p><p>Make the reporting route specific. Name who pupils can speak to, what happens after a report and how evidence such as screenshots should be handled.</p>' },
      { id: 'follow-up', title: 'What to do after the assembly', html: '<p>An assembly should start the week, not carry the whole campaign. Follow it with class activities, staff reminders, parent communication and a Friday reflection task that checks whether pupils know the reporting route.</p><p>For a ready-to-use flow, pair this assembly with the <a href="/resources/free-anti-bullying-classroom-pack/">free Anti-Bullying Week classroom pack</a> and the <a href="/workshops/anti-bullying/">anti-bullying workshop options</a>.</p>' },
    ],
    faqs: [['What should an Anti-Bullying Week assembly include?', 'It should include the theme, a clear definition of bullying behaviour, fictional scenarios, trusted adults and the reporting route.'], ['Should pupils be asked to share bullying experiences in assembly?', 'No. Keep personal disclosure private and use fictional examples for whole-school discussion.'], ['How long should the assembly be?', 'Ten to fifteen minutes is enough if the message is clear and followed by class activity.']],
  },
  {
    slug: '/blog/anti-bullying-week-2026-primary-activities/',
    title: 'Anti-Bullying Week 2026 primary activities | HIP Psychology',
    description: 'Anti-Bullying Week 2026 primary school activities for kindness, friendship, trusted adults and safe reporting.',
    eyebrow: 'Primary activities',
    category: 'Primary schools',
    h1: 'Anti-Bullying Week 2026 primary activities',
    lead: 'Primary activities should make the Break the Silence theme concrete: pupils need simple language for friendship, exclusion, telling a trusted adult and helping someone safely.',
    cta: 'pack',
    links: ['aba', 'oddSocks', 'ea'],
    related: ['/blog/anti-bullying-lesson-plan-ks2/', '/blog/odd-socks-day-2026-assembly-script/', '/blog/parent-letter-anti-bullying-week-template/'],
    sections: [
      { id: 'activity-one', title: 'Activity 1: kind, unkind or bullying', html: '<p>Give pupils a set of fictional classroom and playground examples. Ask them to sort each example into kind, unkind, conflict or bullying behaviour. The aim is not to catch pupils out; it is to help them notice repetition, power imbalance and impact.</p><p>Finish by asking what a trusted adult could do next and what a safe friend could do next.</p>' },
      { id: 'activity-two', title: 'Activity 2: trusted adult map', html: '<p>Ask pupils to draw a simple map of school and mark where they could find trusted adults during different parts of the day: playground, lunch, corridor, classroom, club and home time.</p><p>This turns help-seeking into a real route. It is especially useful for younger pupils who know they should tell someone but are not sure who is available in the moment.</p>' },
      { id: 'activity-three', title: 'Activity 3: odd socks reflection', html: '<p>After Odd Socks Day, ask pupils to write or draw one way people can be different and still belong. Then link the conversation back to silence: why might someone stay quiet if they feel left out, and what can the class do to make telling easier?</p>' },
      { id: 'activity-four', title: 'Activity 4: sentence practice', html: '<p>Practise short help-seeking sentences out loud: I need help with something, someone is being left out, I saw something unkind, or I am worried about a message. Keep the task gentle and normal so pupils do not feel they need perfect words before asking for help.</p>' },
    ],
    faqs: [['What are good primary anti-bullying activities?', 'Good activities are concrete, short and safe. Sorting examples, trusted adult maps and sentence practice work well.'], ['Should primary pupils discuss real incidents?', 'Use fictional examples for group work and keep individual concerns private.'], ['How can schools link activities to Odd Socks Day?', 'Use odd socks as a visible way to talk about difference, belonging and speaking to a trusted adult.']],
  },
  {
    slug: '/blog/anti-bullying-week-2026-post-primary-activities/',
    title: 'Anti-Bullying Week 2026 post-primary activities | HIP Psychology',
    description: 'Anti-Bullying Week 2026 post-primary activities for bystanders, group chats, social pressure and reporting routes.',
    eyebrow: 'Post-primary activities',
    category: 'Post-primary schools',
    h1: 'Anti-Bullying Week 2026 post-primary activities',
    lead: 'Post-primary pupils need realistic anti-bullying activities that respect their social world: peer pressure, online behaviour, group dynamics, reputation and the risk of speaking up.',
    cta: 'workshop',
    links: ['aba', 'webwise', 'ea', 'govBi'],
    related: ['/blog/group-chat-bullying-how-schools-can-respond/', '/blog/bystander-activities-anti-bullying-week/', '/blog/cyberbullying-lesson-plan-schools/'],
    sections: [
      { id: 'scenario', title: 'Activity 1: scenario mapping', html: '<p>Give each group a fictional scenario involving repeated messages, exclusion, rumour spreading or pressure to share a screenshot. Ask pupils to map who is involved: target, person causing harm, active bystanders, silent bystanders and adults who could help.</p><p>The task helps pupils see that bullying is often a group behaviour, not just a conflict between two people.</p>' },
      { id: 'silence', title: 'Activity 2: why silence happens', html: '<p>Invite pupils to list reasons someone might stay silent: embarrassment, fear of escalation, loyalty to friends, worry about screenshots, or believing adults will make it worse. Then ask what adults and peers can do to make reporting safer.</p><p>This connects directly with the Break the Silence theme and avoids the simplistic message that pupils should simply speak up.</p>' },
      { id: 'chat', title: 'Activity 3: group-chat choices', html: '<p>Use a fictional group-chat example and ask pupils to identify the turning points: where someone could stop forwarding, check on the pupil privately, save evidence, leave the chat or speak to a trusted adult.</p><p>Keep the conversation practical. Pupils need to know what helps, what escalates harm and what the school expects.</p>' },
      { id: 'commitment', title: 'Activity 4: reporting route check', html: '<p>End the lesson by asking pupils to write down the school reporting route without looking it up. If many cannot, that is useful feedback for the pastoral team. Anti-Bullying Week should reveal what needs clearer communication.</p>' },
    ],
    faqs: [['What works for post-primary anti-bullying lessons?', 'Realistic fictional scenarios, bystander mapping and group-chat discussion work better than generic slogans.'], ['How should teachers handle sensitive discussion?', 'Set boundaries, avoid naming real pupils and signpost private support routes clearly.'], ['Can workshops help post-primary pupils?', 'Yes. A facilitated workshop can hold difficult topics safely and give pupils practical language.']],
  },
  {
    slug: '/blog/odd-socks-day-2026-assembly-script/',
    title: 'Odd Socks Day 2026 assembly script | HIP Psychology',
    description: 'Odd Socks Day 2026 assembly script for schools, with a simple structure linked to Anti-Bullying Week and Break the Silence.',
    eyebrow: 'Odd Socks Day',
    category: 'Anti-Bullying Week',
    h1: 'Odd Socks Day 2026 assembly script',
    lead: 'Odd Socks Day 2026 is Monday 16 November. This assembly structure helps schools connect the visible fun of odd socks with belonging, difference and safe reporting.',
    cta: 'pack',
    links: ['oddSocks', 'aba'],
    related: ['/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/parent-letter-anti-bullying-week-template/', '/blog/anti-bullying-week-2026-primary-activities/'],
    sections: [
      { id: 'opening', title: 'Opening lines', html: '<p>Today we are wearing odd socks to mark the start of Anti-Bullying Week. Odd socks are a simple way to show that people do not have to be the same to belong. This year the theme is Break the Silence, so we are also thinking about what makes it easier to ask for help.</p>' },
      { id: 'middle', title: 'Main message', html: '<p>Sometimes bullying continues because people stay quiet. They may feel worried, embarrassed or unsure what will happen next. Breaking the silence does not mean shouting about private things. It means knowing who you can speak to and trusting that adults will listen carefully.</p><p>Use two fictional examples: a repeated nickname that hurts, and a group message where someone is being left out. Ask pupils what a safe friend could do and what a trusted adult could do.</p>' },
      { id: 'close', title: 'Closing commitment', html: '<p>Close by naming the school reporting route. Repeat it slowly. Then ask pupils to remember one sentence: I need help with something that is happening to me or someone else.</p><p>For older pupils, add a reminder that saving evidence and asking for help is different from escalating a situation publicly.</p>' },
      { id: 'follow-up', title: 'Classroom follow-up', html: '<p>After the assembly, give teachers a short discussion prompt so the message moves into classrooms. Ask pupils: what makes it hard to ask for help, and what would make it easier in our school?</p>' },
    ],
    faqs: [['When is Odd Socks Day 2026?', 'Odd Socks Day 2026 is Monday 16 November.'], ['What is the point of Odd Socks Day?', 'It celebrates difference and marks the start of Anti-Bullying Week.'], ['Should the assembly be funny or serious?', 'It can be warm and positive, but it should still name the help-seeking message clearly.']],
  },
  {
    slug: '/blog/anti-bullying-lesson-plan-ks2/',
    title: 'Anti-bullying lesson plan KS2 | HIP Psychology',
    description: 'A KS2 anti-bullying lesson plan for friendship, repeated behaviour, trusted adults and bystander support.',
    eyebrow: 'Lesson plan',
    category: 'Primary schools',
    h1: 'Anti-bullying lesson plan for KS2',
    lead: 'A useful KS2 anti-bullying lesson helps pupils understand repeated harmful behaviour, practise asking for help and think about safe ways to support a peer.',
    cta: 'pack',
    links: ['aba', 'ea'],
    related: ['/blog/anti-bullying-week-2026-primary-activities/', '/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/pupil-voice-anti-bullying-survey-questions/'],
    sections: [
      { id: 'outcome', title: 'Learning outcome', html: '<p>By the end of the lesson, pupils should be able to explain that bullying is more than a one-off disagreement, name at least two trusted adults and describe one safe bystander action.</p>' },
      { id: 'starter', title: 'Starter: sort the examples', html: '<p>Give pupils short fictional examples and ask them to sort them into disagreement, unkind behaviour and bullying behaviour. Discuss repetition, intent, impact and power in simple language.</p>' },
      { id: 'main', title: 'Main task: trusted adult route', html: '<p>Ask pupils to choose one example and complete three prompts: what the pupil might feel, who they could speak to, and what a safe friend could do. Keep the answers practical and connected to the real school day.</p>' },
      { id: 'plenary', title: 'Plenary: one sentence for help', html: '<p>End by practising one sentence pupils can use with an adult. Children do not need perfect language before asking for help; they need a safe first step.</p>' },
    ],
    faqs: [['How long should a KS2 anti-bullying lesson be?', 'Forty to fifty minutes is usually enough for one focused outcome.'], ['Should the lesson include online behaviour?', 'Yes, but keep examples age-appropriate and linked to trusted adults.'], ['What should teachers avoid?', 'Avoid asking pupils to describe real incidents publicly.']],
  },
  {
    slug: '/blog/anti-bullying-lesson-plan-ks3/',
    title: 'Anti-bullying lesson plan KS3 | HIP Psychology',
    description: 'A KS3 anti-bullying lesson plan for bystander choices, group chats, peer pressure and reporting routes.',
    eyebrow: 'Lesson plan',
    category: 'Post-primary schools',
    h1: 'Anti-bullying lesson plan for KS3',
    lead: 'KS3 anti-bullying lessons need to move beyond slogans. Pupils need space to examine social pressure, group behaviour, online escalation and what safe reporting actually looks like.',
    cta: 'workshop',
    links: ['aba', 'webwise', 'ea'],
    related: ['/blog/bystander-activities-anti-bullying-week/', '/blog/group-chat-bullying-how-schools-can-respond/', '/blog/anti-bullying-week-2026-post-primary-activities/'],
    sections: [
      { id: 'outcome', title: 'Learning outcome', html: '<p>By the end of the lesson, pupils should be able to identify bystander roles in a bullying situation, explain why pupils may stay silent and name the school reporting route.</p>' },
      { id: 'starter', title: 'Starter: what keeps bullying hidden', html: '<p>Ask pupils to list reasons someone might stay silent. Put answers into categories: fear, loyalty, embarrassment, uncertainty and lack of trust in adults. This connects the lesson to the Break the Silence theme without blaming pupils.</p>' },
      { id: 'main', title: 'Main task: group-chat scenario', html: '<p>Use a fictional group-chat scenario. Ask pupils to identify what escalates harm, what protects the person targeted and when adult help is needed. Include actions such as forwarding, reacting, saving evidence, checking in privately and reporting.</p>' },
      { id: 'plenary', title: 'Plenary: reporting route test', html: '<p>Ask pupils to write the school reporting route from memory. If they cannot, the lesson has revealed an important communication gap for the pastoral team.</p>' },
    ],
    faqs: [['What should a KS3 anti-bullying lesson cover?', 'Bystander choices, social pressure, online behaviour and reporting routes are strong KS3 topics.'], ['How can teachers avoid unsafe disclosure?', 'Use fictional scenarios and signpost private support clearly.'], ['Can this lesson be adapted for KS4?', 'Yes, use more complex scenarios around reputation, screenshots and identity-based harm.']],
  },
  {
    slug: '/blog/cyberbullying-lesson-plan-schools/',
    title: 'Cyberbullying lesson plan for schools | HIP Psychology',
    description: 'Cyberbullying lesson plan for schools covering group chats, screenshots, online escalation and safe reporting.',
    eyebrow: 'Cyberbullying',
    category: 'Online safety',
    h1: 'Cyberbullying lesson plan for schools',
    lead: 'Cyberbullying lessons should help pupils understand how online behaviour moves quickly, how bystanders can reduce or increase harm and what evidence and reporting routes are useful.',
    cta: 'workshop',
    links: ['webwise', 'aba', 'govBi'],
    related: ['/blog/group-chat-bullying-how-schools-can-respond/', '/blog/anti-bullying-lesson-plan-ks3/', '/blog/anti-bullying-week-2026-post-primary-activities/'],
    sections: [
      { id: 'aim', title: 'Lesson aim', html: '<p>The aim is not to frighten pupils about technology. The aim is to help them notice online harm earlier, avoid escalating it and ask for adult help when the situation is too big for peers to manage.</p>' },
      { id: 'scenario', title: 'Core scenario', html: '<p>Use a fictional scenario where a pupil is repeatedly excluded from a group chat and screenshots are being shared. Ask pupils to identify the harmful behaviour, the bystander choices and the point where adult help is needed.</p>' },
      { id: 'evidence', title: 'Evidence and reporting', html: '<p>Teach pupils that saving evidence can be useful, but public posting or forwarding usually increases harm. Explain the school reporting route and who can help pupils decide what to keep, delete or share with an adult.</p>' },
      { id: 'follow-up', title: 'Follow-up activity', html: '<p>Ask pupils to rewrite the scenario with safer choices at three turning points. This moves the lesson from awareness into action.</p>' },
    ],
    faqs: [['What is a good cyberbullying lesson objective?', 'Pupils should identify online harm, explain safe bystander choices and know how to report concerns.'], ['Should teachers use real examples?', 'Fictional examples are safer and avoid exposing pupils.'], ['Does cyberbullying belong in Anti-Bullying Week?', 'Yes. Online behaviour is a central part of how many pupils experience peer harm.']],
  },
  {
    slug: '/blog/bystander-activities-anti-bullying-week/',
    title: 'Bystander activities for Anti-Bullying Week | HIP Psychology',
    description: 'Bystander activities for Anti-Bullying Week that help pupils support peers safely without escalating harm.',
    eyebrow: 'Bystanders',
    category: 'Classroom activities',
    h1: 'Bystander activities for Anti-Bullying Week',
    lead: 'Bystander work helps pupils see that doing nothing is not the only safe option. The goal is to offer realistic choices that reduce harm and connect pupils with adults.',
    cta: 'pack',
    links: ['aba', 'webwise'],
    related: ['/blog/anti-bullying-week-2026-post-primary-activities/', '/blog/anti-bullying-lesson-plan-ks3/', '/blog/pupil-voice-anti-bullying-survey-questions/'],
    sections: [
      { id: 'roles', title: 'Activity 1: bystander roles', html: '<p>Give pupils a fictional scenario and ask them to identify different bystander roles: joining in, laughing, forwarding, staying silent, checking in privately, distracting, reporting or getting help.</p><p>The point is not to shame pupils. It is to show that the audience can change the direction of a situation.</p>' },
      { id: 'safe', title: 'Activity 2: safe or risky support', html: '<p>Ask pupils to sort possible actions into safer, risky or depends. For example: challenging someone publicly may be risky, checking on a pupil privately may be safer, and saving a screenshot depends on what is done with it next.</p>' },
      { id: 'script', title: 'Activity 3: words pupils can actually use', html: '<p>Pupils often need exact language. Practise short options such as: that is not okay, leave them out of this, I am going to get help, or do you want me to come with you to speak to someone?</p>' },
      { id: 'adults', title: 'Activity 4: adult handover', html: '<p>End by making adult help normal. Pupils should know that getting support from staff is not a failure of friendship; it is often the safest way to stop harm.</p>' },
    ],
    faqs: [['What is a bystander in bullying?', 'A bystander is someone who sees or knows about bullying behaviour and has choices about how to respond.'], ['Should pupils confront bullying directly?', 'Sometimes direct challenge is risky. Safer options include checking in privately, not forwarding harm and getting adult help.'], ['Are bystander activities suitable for primary pupils?', 'Yes, but use simpler language and concrete classroom examples.']],
  },
  {
    slug: '/blog/anti-bullying-policy-review-questions-ni-schools/',
    title: 'Anti-bullying policy review questions for NI schools | HIP Psychology',
    description: 'Anti-bullying policy review questions for Northern Ireland schools preparing for policy review or Anti-Bullying Week.',
    eyebrow: 'NI policy',
    category: 'Northern Ireland',
    h1: 'Anti-bullying policy review questions for NI schools',
    lead: 'Northern Ireland schools need anti-bullying policy language that staff can apply, pupils can understand and parents can follow when a concern is raised.',
    cta: 'pack',
    links: ['abs', 'ea', 'eaParents'],
    related: ['/blog/anti-bullying-week-staff-briefing-template/', '/blog/pupil-voice-anti-bullying-survey-questions/', '/blog/parent-letter-anti-bullying-week-template/'],
    sections: [
      { id: 'definitions', title: 'Questions about definitions', html: '<p>Does the policy explain repeated behaviour, impact and power imbalance in language staff can use with pupils? Does it include online behaviour where it affects school life? Can pupils and parents understand the difference between conflict, unkind behaviour and bullying behaviour?</p>' },
      { id: 'reporting', title: 'Questions about reporting', html: '<p>Can pupils name who to speak to? Can parents see how to raise a concern? Do staff know where to record information and who needs to be informed after a report?</p>' },
      { id: 'follow-up', title: 'Questions about follow-up', html: '<p>Does the policy explain how the school checks whether behaviour has stopped? Is there a review point after an incident? Are pupil voice and parent communication built into the process?</p>' },
      { id: 'campaign', title: 'Questions before Anti-Bullying Week', html: '<p>Does campaign messaging match policy language? If the assembly tells pupils to speak up, does the policy make that route clear and believable?</p><p>Use the <a href="/resources/anti-bullying-policy-checklist-ni/">NI Anti-Bullying Policy Checklist</a> for a more structured review.</p>' },
    ],
    faqs: [['How often should an anti-bullying policy be reviewed?', 'Schools should follow statutory and Education Authority guidance and review after meaningful incidents or procedural changes.'], ['Who should review the policy?', 'Senior leadership, pastoral staff and relevant coordinators should be involved, with pupil and parent voice where appropriate.'], ['Can Anti-Bullying Week support policy review?', 'Yes, it can test whether pupils and staff understand the reporting route.']],
  },
  {
    slug: '/blog/bi-cinealta-policy-review-questions-irish-schools/',
    title: 'Bí Cineálta policy review questions for Irish schools | HIP Psychology',
    description: 'Bí Cineálta policy review questions for Irish primary and post-primary schools implementing the procedures.',
    eyebrow: 'ROI policy',
    category: 'Republic of Ireland',
    h1: 'Bí Cineálta policy review questions for Irish schools',
    lead: 'The Bí Cineálta procedures make anti-bullying policy a practical whole-school responsibility. These questions help school teams connect the document with everyday prevention and response.',
    cta: 'pack',
    links: ['govBi', 'govCinealtas', 'tusla'],
    related: ['/blog/pupil-voice-anti-bullying-survey-questions/', '/blog/parent-letter-anti-bullying-week-template/', '/blog/anti-bullying-week-staff-briefing-template/'],
    sections: [
      { id: 'prevention', title: 'Questions about prevention', html: '<p>How does the policy show what prevention looks like in classrooms, corridors, online spaces and parent communication? Are pupils taught the language of bullying behaviour, help-seeking and safe bystander choices?</p>' },
      { id: 'response', title: 'Questions about response', html: '<p>When a concern is raised, who listens, who records, who informs parents and who checks whether behaviour has stopped? Are those steps understood by staff beyond the senior team?</p>' },
      { id: 'voice', title: 'Questions about pupil and parent voice', html: '<p>Can pupils explain whether reporting routes feel realistic? Can parents understand what the school will do after a concern is raised? Has the school tested the policy with real users, not just leaders?</p>' },
      { id: 'implementation', title: 'Questions for implementation', html: '<p>For the 2025/2026 school year, implementation work should include staff confidence, clear procedures and practical classroom resources. Use the <a href="/resources/anti-bullying-policy-checklist-roi/">ROI Anti-Bullying Policy Checklist</a> as a planning route.</p>' },
    ],
    faqs: [['When do the Bí Cineálta procedures apply?', 'The requirements come into effect from the start of the 2025/2026 school year.'], ['What does Bí Cineálta mean?', 'Bí Cineálta means Be Kind.'], ['Does this replace official guidance?', 'No. Schools should use official Department guidance alongside practical planning tools.']],
  },
  {
    slug: '/blog/parent-letter-anti-bullying-week-template/',
    title: 'Parent letter for Anti-Bullying Week template | HIP Psychology',
    description: 'Parent letter template for Anti-Bullying Week 2026, explaining activities, reporting routes and school support.',
    eyebrow: 'Parent communication',
    category: 'Templates',
    h1: 'Parent letter for Anti-Bullying Week template',
    lead: 'A good parent letter makes Anti-Bullying Week feel practical rather than performative. It explains what pupils will learn, how families can support the message and how concerns can be raised.',
    cta: 'pack',
    links: ['aba', 'eaParents', 'govBi'],
    related: ['/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/odd-socks-day-2026-assembly-script/', '/blog/anti-bullying-policy-review-questions-ni-schools/'],
    sections: [
      { id: 'opening', title: 'Suggested opening', html: '<p>Next week our school will take part in Anti-Bullying Week 2026. The theme is Break the Silence. Pupils will be learning about kindness, respect, safe reporting, trusted adults and how bystanders can support others without escalating harm.</p>' },
      { id: 'activities', title: 'Explain the activities', html: '<p>Tell parents what will happen: an assembly, classroom lessons, Odd Socks Day, tutor activities, pupil voice work or workshops. Keep the list specific so families can ask children meaningful questions at home.</p>' },
      { id: 'reporting', title: 'Name the reporting route', html: '<p>Include a short paragraph explaining how parents should raise a concern. Avoid vague wording such as contact the school. Name the role, route or email address the school wants families to use.</p>' },
      { id: 'home', title: 'Home conversation prompt', html: '<p>Offer one home prompt: What would make it easier for someone to ask for help if they were worried about bullying? This keeps the conversation linked to Break the Silence and avoids asking children to disclose in front of the family.</p>' },
    ],
    faqs: [['What should a parent letter include?', 'It should include the theme, school activities, reporting route and a simple home conversation prompt.'], ['Should the letter mention specific incidents?', 'No. Keep it general and protect pupil privacy.'], ['Can this be used in NI and ROI schools?', 'Yes, but schools should adapt the reporting route and policy references.']],
  },
  {
    slug: '/blog/pupil-voice-anti-bullying-survey-questions/',
    title: 'Pupil voice anti-bullying survey questions | HIP Psychology',
    description: 'Pupil voice anti-bullying survey questions for schools reviewing reporting routes, safety and campaign impact.',
    eyebrow: 'Pupil voice',
    category: 'Policy review',
    h1: 'Pupil voice anti-bullying survey questions',
    lead: 'Pupil voice can show whether anti-bullying policy is visible, trusted and realistic. The best survey questions are practical, safe and easy for leaders to act on.',
    cta: 'pack',
    links: ['aba', 'ea', 'govBi'],
    related: ['/blog/anti-bullying-policy-review-questions-ni-schools/', '/blog/bi-cinealta-policy-review-questions-irish-schools/', '/blog/bystander-activities-anti-bullying-week/'],
    sections: [
      { id: 'safety', title: 'Questions about safety', html: '<p>Try questions such as: I know who I can speak to if I am worried about bullying. Adults in school listen carefully when pupils ask for help. Pupils in my year group know the difference between conflict and bullying behaviour.</p>' },
      { id: 'reporting', title: 'Questions about reporting', html: '<p>Ask whether pupils know the reporting route, whether they believe adults will follow up, and what might stop someone from asking for help. Give pupils anonymous ways to answer honestly.</p>' },
      { id: 'bystanders', title: 'Questions about bystanders', html: '<p>Ask pupils what they think a safe bystander can do. Include options such as checking in privately, not forwarding messages, telling a trusted adult or distracting safely.</p>' },
      { id: 'action', title: 'How to use the answers', html: '<p>Do not collect pupil voice unless leaders are prepared to act on it. Use the answers to update assemblies, staff briefings, parent messages and policy review priorities.</p>' },
    ],
    faqs: [['Should pupil surveys be anonymous?', 'Anonymous surveys often produce more honest feedback, especially on reporting and trust.'], ['How many questions should schools ask?', 'A short survey of six to ten focused questions is usually better than a long one.'], ['What should schools do with the answers?', 'Look for patterns, report back safely and use the findings to improve practice.']],
  },
  {
    slug: '/blog/group-chat-bullying-how-schools-can-respond/',
    title: 'Group chat bullying: how schools can respond | HIP Psychology',
    description: 'Group chat bullying guidance for schools, including screenshots, exclusion, bystander choices and reporting routes.',
    eyebrow: 'Cyberbullying',
    category: 'Online safety',
    h1: 'Group chat bullying: how schools can respond',
    lead: 'Group chat bullying can move quickly from one message into a wider audience. Schools need a calm response that handles evidence, supports pupils and avoids making the situation bigger.',
    cta: 'workshop',
    links: ['webwise', 'aba', 'tusla', 'ea'],
    related: ['/blog/cyberbullying-lesson-plan-schools/', '/blog/anti-bullying-week-2026-post-primary-activities/', '/blog/anti-bullying-lesson-plan-ks3/'],
    sections: [
      { id: 'patterns', title: 'Common patterns', html: '<p>Group chat bullying can include repeated exclusion, humiliating screenshots, pile-ons, pressure to share images, rumours, anonymous accounts or pupils being added and removed to create anxiety.</p><p>Even when behaviour starts outside school hours, it may affect attendance, learning and wellbeing in school.</p>' },
      { id: 'evidence', title: 'Evidence without escalation', html: '<p>Pupils may need guidance on saving evidence without forwarding it or posting it publicly. Staff should explain what evidence is useful, where it should go and who will handle it next.</p>' },
      { id: 'bystanders', title: 'Bystander choices', html: '<p>Many pupils in a group chat are not leading the harm, but they can still reduce or amplify it. Lessons should cover reacting, forwarding, screenshotting, leaving, checking in and getting help.</p>' },
      { id: 'response', title: 'School response', html: '<p>A good response checks immediate safety, records concerns, supports the pupil targeted, communicates with families where appropriate and follows up to see whether the behaviour has stopped.</p>' },
    ],
    faqs: [['Is group chat bullying a school issue?', 'It can be when it affects attendance, wellbeing, relationships or learning in school.'], ['Should pupils screenshot messages?', 'Sometimes evidence helps, but pupils need guidance so they do not forward or spread harm.'], ['Can this be covered in workshops?', 'Yes. Group-chat scenarios are useful for post-primary cyberbullying workshops.']],
  },
  {
    slug: '/blog/anti-bullying-week-staff-briefing-template/',
    title: 'Anti-Bullying Week staff briefing template | HIP Psychology',
    description: 'Anti-Bullying Week staff briefing template for schools covering theme, reporting routes, language and follow-up.',
    eyebrow: 'Staff briefing',
    category: 'Templates',
    h1: 'Anti-Bullying Week staff briefing template',
    lead: 'Staff briefings make Anti-Bullying Week consistent. If adults use different definitions, routes or responses, pupils get mixed messages about what will happen when they ask for help.',
    cta: 'pack',
    links: ['aba', 'ea', 'govBi'],
    related: ['/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/anti-bullying-policy-review-questions-ni-schools/', '/blog/bi-cinealta-policy-review-questions-irish-schools/'],
    sections: [
      { id: 'opening', title: 'Briefing opening', html: '<p>This week our school is marking Anti-Bullying Week 2026. The theme is Break the Silence. Our priority is that pupils know what bullying behaviour means, who they can speak to and what adults will do next.</p>' },
      { id: 'language', title: 'Shared language', html: '<p>Remind staff of the school definition and the difference between conflict, one-off unkind behaviour and bullying behaviour. Give two examples staff can use in class or tutor time.</p>' },
      { id: 'route', title: 'Reporting route', html: '<p>Name the exact reporting route. Staff should know who records concerns, who informs pastoral leads and what should happen if a pupil discloses a concern during a lesson.</p>' },
      { id: 'follow-up', title: 'Follow-up after the week', html: '<p>Ask staff to note any confusion pupils show about definitions or reporting. That feedback can guide policy review, parent communication and future workshops.</p>' },
    ],
    faqs: [['Why brief staff before Anti-Bullying Week?', 'Consistency helps pupils trust the message and understand what adults will do.'], ['How long should the briefing be?', 'Ten minutes can be enough if the route and language are clear.'], ['What should staff take away?', 'The theme, definition, reporting route and follow-up expectations.']],
  },
  {
    slug: '/blog/restorative-questions-after-bullying-incident/',
    title: 'Restorative questions after a bullying incident | HIP Psychology',
    description: 'Restorative questions after a bullying incident, with cautions for schools using repair-focused conversations safely.',
    eyebrow: 'Response',
    category: 'Pastoral care',
    h1: 'Restorative questions after a bullying incident',
    lead: 'Restorative questions can support repair, but they must be used carefully. Bullying involves harm and power, so schools should not push pupils into face-to-face repair before safety and consent are clear.',
    cta: 'workshop',
    links: ['aba', 'ea', 'govBi', 'tusla'],
    related: ['/blog/group-chat-bullying-how-schools-can-respond/', '/blog/pupil-voice-anti-bullying-survey-questions/', '/blog/anti-bullying-week-staff-briefing-template/'],
    sections: [
      { id: 'caution', title: 'Start with safety', html: '<p>Before any restorative conversation, staff should check immediate safety, listen to the pupil harmed, record concerns and decide whether safeguarding or senior pastoral routes are needed.</p><p>Repair should never be used to minimise harm or pressure a pupil to forgive.</p>' },
      { id: 'questions', title: 'Useful restorative questions', html: '<p>Questions might include: what happened, who has been affected, what do you understand now, what needs to happen next, and what support do you need to make that change?</p><p>For the pupil harmed, questions should focus on support and safety: what do you need adults to understand, what would help you feel safer, and how should we check back in?</p>' },
      { id: 'online', title: 'When the incident happened online', html: '<p>Online incidents may need evidence handling, parent communication and clearer boundaries before repair is considered. Screenshots, shared images and group-chat audiences can make the harm wider than one conversation.</p>' },
      { id: 'follow-up', title: 'Follow-up checks', html: '<p>Whatever response is used, the school should check whether behaviour has stopped. Follow-up is where many anti-bullying processes either become credible or fall apart.</p>' },
    ],
    faqs: [['Are restorative approaches always suitable for bullying?', 'No. They must be used carefully and only where safety, consent and power dynamics have been considered.'], ['What should happen before restorative questions?', 'Listen, record, assess safety and follow school procedures.'], ['What matters after the conversation?', 'Follow-up checks to see whether behaviour has stopped.']],
  },
  {
    slug: '/blog/anti-bullying-workshop-ideas-for-schools/',
    title: 'Anti-bullying workshop ideas for schools | HIP Psychology',
    description: 'Anti-bullying workshop ideas for primary, post-primary and staff teams, including bystanders, cyberbullying and policy links.',
    eyebrow: 'Workshops',
    category: 'School workshops',
    h1: 'Anti-bullying workshop ideas for schools',
    lead: 'A good anti-bullying workshop should feel practical, safe and relevant to the pupils or staff in front of the facilitator. The best sessions connect awareness with behaviour and school systems.',
    cta: 'workshop',
    links: ['aba', 'webwise', 'ea', 'govBi'],
    related: ['/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/cyberbullying-lesson-plan-schools/', '/blog/bystander-activities-anti-bullying-week/'],
    sections: [
      { id: 'primary', title: 'Primary workshop ideas', html: '<p>Primary workshops can focus on friendship, exclusion, trusted adults, safe online behaviour and kind bystander choices. Activities should be short, visual and concrete.</p>' },
      { id: 'post-primary', title: 'Post-primary workshop ideas', html: '<p>Post-primary workshops can explore group dynamics, silence, social pressure, online escalation, screenshots and reporting. Pupils need realistic scenarios and clear adult routes.</p>' },
      { id: 'staff', title: 'Staff workshop ideas', html: '<p>Staff CPD can focus on shared definitions, recording, parent communication, policy confidence and follow-up. The aim is consistency, not just awareness.</p>' },
      { id: 'campaign', title: 'Campaign week workshop route', html: '<p>For Anti-Bullying Week 2026, schools can combine an assembly, year-group workshop and staff briefing. This makes the campaign visible while keeping the message connected to school procedures.</p><p><a href="/workshops/anti-bullying/">View HIP Psychology anti-bullying workshops</a>.</p>' },
    ],
    faqs: [['What should an anti-bullying workshop include?', 'Definitions, realistic scenarios, bystander choices, reporting routes and practical next steps.'], ['Are workshops different for primary and post-primary pupils?', 'Yes. Examples, language and outcomes should change by age and context.'], ['Can staff CPD be part of the workshop offer?', 'Yes. Staff consistency is central to effective anti-bullying work.']],
  },
  {
    slug: '/blog/anti-bullying-week-display-board-ideas/',
    title: 'Anti-Bullying Week display board ideas | HIP Psychology',
    description: 'Anti-Bullying Week display board ideas that reinforce reporting routes, pupil voice and the Break the Silence theme.',
    eyebrow: 'Display ideas',
    category: 'Classroom activities',
    h1: 'Anti-Bullying Week display board ideas',
    lead: 'Display boards work best when they reinforce action, not decoration. Use the space to make reporting routes, trusted adults and pupil voice visible throughout Anti-Bullying Week.',
    cta: 'pack',
    links: ['aba', 'oddSocks'],
    related: ['/blog/anti-bullying-week-2026-primary-activities/', '/blog/odd-socks-day-2026-assembly-script/', '/blog/pupil-voice-anti-bullying-survey-questions/'],
    sections: [
      { id: 'route', title: 'Display the reporting route', html: '<p>Create a clear panel showing who pupils can speak to, where they can find help and what happens after a concern is raised. This makes Break the Silence practical.</p>' },
      { id: 'voice', title: 'Use pupil voice safely', html: '<p>Ask pupils to add anonymous sentence stems: one thing that makes asking for help easier, one way to support a peer, or one thing adults should understand. Avoid asking pupils to post personal stories.</p>' },
      { id: 'odd-socks', title: 'Odd Socks Day display', html: '<p>Use odd socks as a way to show difference and belonging. Pair the visuals with language about respect, inclusion and trusted adults so the display does more than mark the day.</p>' },
      { id: 'after', title: 'Keep it useful after the week', html: '<p>After Anti-Bullying Week, keep the reporting route section visible. Replace campaign artwork with pupil voice findings or a reminder of the school support route.</p>' },
    ],
    faqs: [['What should go on an Anti-Bullying Week display?', 'Include the theme, reporting route, trusted adults and safe pupil voice prompts.'], ['Should pupils share personal stories on the board?', 'No. Use anonymous prompts and keep disclosures private.'], ['Can a display board support safeguarding?', 'It can signpost help, but staff still need clear private reporting routes.']],
  },
  {
    slug: '/blog/anti-bullying-week-2026-planning-checklist/',
    title: 'Anti-Bullying Week 2026 planning checklist | HIP Psychology',
    description: 'Anti-Bullying Week 2026 planning checklist for assemblies, lessons, Odd Socks Day, staff briefing and follow-up.',
    eyebrow: 'Planning',
    category: 'Anti-Bullying Week',
    h1: 'Anti-Bullying Week 2026 planning checklist',
    lead: 'Anti-Bullying Week 2026 runs from 16 to 20 November. A simple checklist helps schools connect the Break the Silence theme with assemblies, lessons, parents, staff and follow-up.',
    cta: 'pack',
    links: ['aba', 'oddSocks', 'ea', 'govBi'],
    related: ['/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/anti-bullying-week-staff-briefing-template/', '/blog/parent-letter-anti-bullying-week-template/'],
    sections: [
      { id: 'six-weeks', title: 'Six weeks before', html: '<p>Confirm the lead member of staff, year-group activities, assembly slots, parent communication and any external workshop dates. Check that the reporting route you plan to promote is accurate.</p>' },
      { id: 'two-weeks', title: 'Two weeks before', html: '<p>Brief staff, prepare lesson resources, adapt parent letters and decide how pupil voice will be collected. Make sure Odd Socks Day is communicated without creating cost pressure for families.</p>' },
      { id: 'during', title: 'During the week', html: '<p>Run the assembly, classroom activities, pupil voice prompts and staff reminders. Keep messages consistent: what bullying is, why silence happens, who can help and what happens next.</p>' },
      { id: 'after', title: 'After the week', html: '<p>Review pupil feedback, check whether reporting routes were understood and decide what needs to change in policy, staff training or parent communication.</p>' },
    ],
    faqs: [['When is Anti-Bullying Week 2026?', 'It runs from Monday 16 to Friday 20 November.'], ['What is the 2026 theme?', 'The theme is Break the Silence.'], ['What should schools do after the week?', 'Review feedback, reinforce reporting routes and connect the campaign to policy and pastoral systems.']],
  },
  {
    slug: '/blog/anti-bullying-policy-review-new-school-year/',
    title: 'Anti-Bullying Policy Review for the New School Year | HIP Psychology',
    description: 'A practical anti-bullying policy review for the new school year, covering reporting routes, recording, pupil voice, staff confidence and follow-up.',
    eyebrow: 'Back-to-school planning',
    category: 'Policy planning',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    h1: 'Anti-Bullying Policy Review for the New School Year',
    lead: 'The weeks before a new school year are a useful time to check whether an anti-bullying policy matches what pupils, families and staff will actually experience when a concern is raised.',
    cta: 'pack',
    links: ['ea', 'abs', 'aba'],
    related: ['/blog/pupil-voice-survey-before-new-school-year/', '/blog/anti-bullying-staff-briefing-first-month/', '/blog/parent-communication-anti-bullying-new-school-year/'],
    sections: [
      { id: 'route', title: 'Start with the real reporting route', html: '<p>Check that the policy names the people and places pupils can use when they need help. A reporting route should be easy to explain in an assembly, a parent message and a private conversation with a member of staff.</p><p>Test the route with a simple question: if a pupil reports repeated exclusion today, would every adult know who receives the concern, how it is recorded and what happens next?</p>' },
      { id: 'recording', title: 'Review definitions, recording and follow-up', html: '<p>Make sure the policy uses clear language around bullying behaviour, impact, repetition, power imbalance, prejudice-based harm and online behaviour. Staff do not need identical wording in every conversation, but they do need a shared understanding of the process.</p><p>Check that recording includes follow-up dates. A response is not complete when the first conversation ends; the school should know how it will check whether the behaviour has stopped and whether the pupil feels safer.</p>' },
      { id: 'consultation', title: 'Use pupil, parent and staff feedback', html: '<p>Policy review is stronger when it includes the people who use the system. Ask pupils whether they know where to go, ask families whether the communication is understandable and ask staff where the process feels unclear or difficult to apply.</p><p>Keep consultation focused on improving routes and consistency. Do not ask pupils to disclose personal incidents in a group activity or public survey.</p>' },
      { id: 'termly', title: 'Turn the review into a termly habit', html: '<p>Choose a small number of review points across the year: before term starts, after the first half term and after any campaign activity. Compare anonymised patterns, staff confidence and pupil understanding rather than waiting for a serious incident to expose a gap.</p><p>Use the <a href="/resources/anti-bullying-policy-checklist-ni/">NI policy checklist</a> or the <a href="/resources/anti-bullying-policy-checklist-roi/">ROI policy checklist</a> to structure the conversation for your setting.</p>' },
    ],
    faqs: [['When should a school review its anti-bullying policy?', 'Before the new school year is a useful point, followed by shorter reviews during the year.'], ['What should a policy review check?', 'It should check definitions, reporting routes, recording, communication, pupil voice, staff confidence and follow-up.'], ['Does a checklist replace official guidance?', 'No. Use official guidance and the school policy as the source of truth; a checklist simply helps structure review.']],
  },
  {
    slug: '/blog/pupil-voice-survey-before-new-school-year/',
    title: 'Pupil Voice Survey Before the New School Year | HIP Psychology',
    description: 'Use a safe pupil voice survey before the new school year to review belonging, reporting routes, bystander confidence and school support.',
    eyebrow: 'Back-to-school planning',
    category: 'Pupil voice',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    h1: 'Pupil Voice Survey Before the New School Year',
    lead: 'A short, carefully designed pupil voice survey can show whether pupils understand help-seeking, feel connected to school and know what to do when bullying behaviour affects them or a peer.',
    cta: 'pack',
    links: ['aba', 'ea', 'ncca'],
    related: ['/blog/anti-bullying-policy-review-new-school-year/', '/blog/friendship-belonging-first-weeks-school/', '/blog/anti-bullying-staff-briefing-first-month/'],
    sections: [
      { id: 'purpose', title: 'Ask questions that lead to action', html: '<p>The best survey questions connect to a decision the school can make. Ask whether pupils know a trusted adult, understand how to report a concern, feel safe asking for help and know how to support a peer without escalating risk.</p><p>Avoid collecting information simply because it is interesting. Decide in advance who will review the responses, what themes will be shared and what will trigger a private follow-up.</p>' },
      { id: 'questions', title: 'Useful question areas', html: '<ul><li>Which adults or spaces feel easiest to approach?</li><li>How confident are pupils that a report will be taken seriously?</li><li>Do pupils know what happens after they tell an adult?</li><li>What makes it harder to speak up for themselves or someone else?</li><li>Where do friendship, exclusion or group-chat concerns most often appear?</li></ul><p>Use age-appropriate formats. Younger pupils may need simple choices and visual prompts, while older pupils can respond to short scenarios about bystanders, online pressure and reporting.</p>' },
      { id: 'act', title: 'Close the feedback loop', html: '<p>Pupils should hear what the school learned and what it will do next. The response does not need to publish sensitive details; it can say that reporting routes will be made clearer, staff will receive a reminder or a particular space will receive more support.</p><p>Closing the loop helps pupils see that voice is part of school improvement rather than a one-off campaign exercise.</p>' },
      { id: 'safe', title: 'Keep the survey safe and proportionate', html: '<p>Do not ask pupils to name people or describe personal incidents in a general survey. Include a separate private route for anyone who needs help, and make sure staff know how to respond if a survey answer raises a safeguarding concern.</p><p>Pair the survey with the <a href="/blog/anti-bullying-week-2026-planning-checklist/">Anti-Bullying Week planning checklist</a> so the findings feed into practical preparation.</p>' },
    ],
    faqs: [['What should a pupil voice survey measure?', 'It can measure belonging, help-seeking confidence, awareness of reporting routes and how safe pupils feel supporting peers.'], ['Should pupils name people in the survey?', 'No. Keep the general survey anonymous and provide a separate private route for individual concerns.'], ['What should happen after the survey?', 'Share an age-appropriate summary, set actions and explain how pupils can raise further concerns.']],
  },
  {
    slug: '/blog/anti-bullying-staff-briefing-first-month/',
    title: 'Anti-Bullying Staff Briefing for the First Month | HIP Psychology',
    description: 'A practical first-month anti-bullying staff briefing covering shared language, reporting, online behaviour, safeguarding and follow-up.',
    eyebrow: 'Back-to-school planning',
    category: 'Staff guidance',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    h1: 'Anti-Bullying Staff Briefing for the First Month',
    lead: 'A short staff briefing at the start of term can make reporting routes, response language and follow-up more consistent before patterns become harder to see.',
    cta: 'workshop',
    links: ['ea', 'abs', 'aba'],
    related: ['/blog/anti-bullying-policy-review-new-school-year/', '/blog/parent-communication-anti-bullying-new-school-year/', '/blog/group-chat-online-safety-school-year/'],
    sections: [
      { id: 'shared', title: 'Agree the shared language', html: '<p>Remind staff how the school describes bullying behaviour, repeated harm, exclusion, prejudice-based bullying and online incidents. The aim is not to turn every interaction into a label; it is to help adults notice patterns and respond without minimising impact.</p><p>Use two or three fictional examples so staff can discuss the difference between conflict, unkind behaviour and a pattern that needs a formal response.</p>' },
      { id: 'response', title: 'Make the first response clear', html: '<p>Staff should know what to do when a pupil tells them something: listen calmly, thank the pupil for speaking, avoid promising secrecy, record the concern through the agreed route and pass it to the named person.</p><p>Make the next step visible. A pupil is more likely to report again when adults can explain what will happen after the first conversation and when they will check back in.</p>' },
      { id: 'online', title: 'Include online behaviour and safeguarding', html: '<p>Group chats, screenshots, anonymous accounts and online exclusion can affect school life even when the original message was sent outside school. Staff do not need to investigate alone, but they do need to know how to preserve information, report the concern and escalate when risk is serious.</p><p>Revisit safeguarding routes so staff understand when an anti-bullying concern may also require the school safeguarding process.</p>' },
      { id: 'follow-up', title: 'Schedule a follow-up check', html: '<p>Put a short review in the calendar after the first month. Ask whether staff are using the route consistently, whether pupils understand who to approach and whether any year group or setting needs additional support.</p><p>For live support, see the <a href="/workshops/anti-bullying/">anti-bullying workshop options</a> for staff CPD and pupil sessions.</p>' },
    ],
    faqs: [['How long should a first-month briefing be?', 'A focused 20 to 30 minute briefing can cover the essential route, followed by a short review later in the term.'], ['What should staff do when a pupil reports bullying?', 'Listen calmly, thank the pupil, avoid promising secrecy, record through the agreed route and pass the concern to the named person.'], ['Should online behaviour be included?', 'Yes. Online behaviour can affect school safety, attendance and wellbeing even when it begins outside school.']],
  },
  {
    slug: '/blog/parent-communication-anti-bullying-new-school-year/',
    title: 'Parent Communication for Anti-Bullying at the Start of the School Year | HIP Psychology',
    description: 'A practical parent communication plan for anti-bullying support at the start of the school year, including reporting routes and follow-up.',
    eyebrow: 'Back-to-school planning',
    category: 'Parent communication',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    h1: 'Parent Communication for Anti-Bullying at the Start of the School Year',
    lead: 'A clear welcome message helps families understand how the school prevents bullying, how to raise a concern and what support looks like after a report.',
    cta: 'pack',
    links: ['eaParents', 'aba', 'abs'],
    related: ['/blog/anti-bullying-policy-review-new-school-year/', '/blog/pupil-voice-survey-before-new-school-year/', '/blog/group-chat-online-safety-school-year/'],
    sections: [
      { id: 'welcome', title: 'Set a calm, practical tone', html: '<p>Start with the school commitment to respectful relationships, safe reporting and consistent follow-up. Avoid language that suggests bullying can be solved by telling children to be tougher or by asking families to manage school concerns alone.</p><p>A short message can explain that the school will listen, record concerns appropriately, keep communication proportionate and work with families when support is needed.</p>' },
      { id: 'route', title: 'Make the reporting route easy to find', html: '<p>Tell families who they should contact, which route is monitored during the school day and what information is useful. Include a direct link or named role rather than asking parents to search the whole website.</p><p>Explain that urgent safeguarding concerns should follow the school safeguarding route and that social media discussion is not a substitute for private reporting.</p>' },
      { id: 'after', title: 'Explain what happens after a concern', html: '<p>Families do not need a promise of a particular outcome, but they do need a realistic explanation of the process. Describe how the school listens, checks information, speaks with pupils, records the concern and agrees follow-up.</p><p>Be careful with confidentiality. The school can explain its process without sharing private information about another child.</p>' },
      { id: 'partnership', title: 'Invite useful partnership', html: '<p>Give parents practical ways to support children: listen without leading, keep relevant messages or screenshots, encourage safe help-seeking and tell the school if a concern is affecting attendance, sleep or wellbeing.</p><p>Link the message to the <a href="/blog/parent-letter-anti-bullying-week-template/">parent letter template</a> and the <a href="/resources/free-anti-bullying-classroom-pack/">free classroom pack</a> for wider campaign planning.</p>' },
    ],
    faqs: [['What should a parent anti-bullying message include?', 'It should include the school commitment, reporting route, response process, confidentiality boundaries and practical ways families can support children.'], ['Should parents report concerns through social media?', 'No. Use the school private reporting route so the concern can be handled safely and proportionately.'], ['How can parents help after a concern is raised?', 'Listen calmly, keep relevant information, encourage safe help-seeking and share changes in wellbeing or attendance with the school.']],
  },
  {
    slug: '/blog/friendship-belonging-first-weeks-school/',
    title: 'Friendship and Belonging in the First Weeks of School | HIP Psychology',
    description: 'Practical friendship and belonging activities for the first weeks of school, helping pupils connect, include others and seek help safely.',
    eyebrow: 'Back-to-school planning',
    category: 'Belonging and prevention',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    h1: 'Friendship and Belonging in the First Weeks of School',
    lead: 'The first weeks of a new school year shape routines, friendship groups and belonging. Small, planned activities can help pupils notice exclusion early and make it easier to ask for support.',
    cta: 'pack',
    links: ['aba', 'ea', 'ncca'],
    related: ['/blog/pupil-voice-survey-before-new-school-year/', '/blog/anti-bullying-staff-briefing-first-month/', '/blog/bystander-activities-anti-bullying-week/'],
    sections: [
      { id: 'routines', title: 'Build inclusive routines', html: '<p>Use predictable starts, mixed small-group tasks and clear transitions so pupils are not left to negotiate every social moment alone. Activities should give pupils different ways to participate rather than rewarding the loudest or most confident voices.</p><p>Staff can watch for repeated isolation, sudden friendship changes and pupils who are regularly excluded from informal spaces without making assumptions about the cause.</p>' },
      { id: 'language', title: 'Teach language for joining in and speaking up', html: '<p>Practise simple sentences pupils can use: Can I join you?, That is not okay, I think we should get help, and I noticed someone is being left out. Role-play should stay fictional and give pupils more than one safe choice.</p><p>Older pupils can explore the pressure to stay silent, protect a friendship group or avoid being called a tell-tale. The goal is to make help-seeking feel possible without asking pupils to become investigators.</p>' },
      { id: 'check-ins', title: 'Use low-pressure check-ins', html: '<p>Short tutor-time or class check-ins can ask what is helping pupils feel connected, where they feel uncertain and which adults are easiest to approach. Keep the format proportionate and provide a private route for individual concerns.</p><p>Use themes from the check-ins to adjust seating, supervision, transition support or pastoral conversations before problems become entrenched.</p>' },
      { id: 'follow-through', title: 'Connect belonging to the wider plan', html: '<p>Belonging work is part of prevention, but it does not replace a clear response to bullying behaviour. Link class activities to the school reporting route, staff briefing and pupil voice process.</p><p>The <a href="/blog/anti-bullying-week-2026-primary-activities/">primary activities guide</a> and <a href="/blog/anti-bullying-week-2026-post-primary-activities/">post-primary activities guide</a> offer age-specific follow-up ideas.</p>' },
    ],
    faqs: [['Why focus on belonging at the start of the year?', 'Early routines and friendship patterns can affect whether pupils feel connected and whether they seek help when something goes wrong.'], ['What should staff watch for?', 'Watch for repeated isolation, sudden friendship changes and exclusion from informal spaces, while avoiding assumptions about the cause.'], ['Does belonging work replace anti-bullying procedures?', 'No. It supports prevention and early help alongside clear reporting, response and safeguarding procedures.']],
  },
  {
    slug: '/blog/group-chat-online-safety-school-year/',
    title: 'Group Chats and Online Safety for the New School Year | HIP Psychology',
    description: 'Help pupils and families prepare for group-chat pressure, screenshots, online reporting and safer digital communication at the start of term.',
    eyebrow: 'Back-to-school planning',
    category: 'Online safety',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    h1: 'Group Chats and Online Safety for the New School Year',
    lead: 'A new school year often brings new group chats, new devices and new social pressure. Schools can prepare pupils and families with calm guidance about screenshots, reporting and support-seeking.',
    cta: 'workshop',
    links: ['webwise', 'ea', 'abs'],
    related: ['/blog/anti-bullying-staff-briefing-first-month/', '/blog/parent-communication-anti-bullying-new-school-year/', '/blog/group-chat-bullying-how-schools-can-respond/'],
    sections: [
      { id: 'before', title: 'Prepare before problems escalate', html: '<p>Use the start of term to remind pupils that group chats can affect school relationships and wellbeing. Discuss respectful posting, exclusion, pressure to respond, image sharing and what it means to pause before forwarding or reacting.</p><p>Keep the message practical. Pupils should know which trusted adult they can approach, how the school handles concerns and when they should ask for help rather than trying to solve a conflict alone.</p>' },
      { id: 'evidence', title: 'Talk about screenshots and reporting', html: '<p>Explain that saving relevant information may help an adult understand what happened, but pupils should not circulate harmful material or build a public case against another pupil. The safest route is usually to keep the evidence private and show it to a trusted adult.</p><p>Staff should know how to receive concerns, record them appropriately and follow school safeguarding procedures where there is serious risk, threats, coercion or significant harm.</p>' },
      { id: 'families', title: 'Give families a simple support script', html: '<p>Parents can start by listening calmly, asking what support their child wants and checking whether the issue is affecting sleep, attendance, friendships or wellbeing. They can keep relevant information and contact the school through the private reporting route.</p><p>Families should avoid replying in anger, contacting other children directly or escalating the conversation through social media. Those actions can make a difficult situation harder to resolve.</p>' },
      { id: 'classroom', title: 'Use age-appropriate classroom discussion', html: '<p>Primary pupils may need simple language around kindness, trusted adults and not sharing hurtful content. Post-primary pupils can explore group-chat dynamics, bystander choices, screenshots, anonymous accounts and the pressure to stay silent.</p><p>For deeper support, see the <a href="/cyberbullying-in-schools/">cyberbullying guidance</a> and the <a href="/workshops/anti-bullying/">anti-bullying workshop options</a>.</p>' },
    ],
    faqs: [['What should pupils do if a group chat becomes harmful?', 'They should avoid forwarding or escalating the material, keep relevant information private and tell a trusted adult through the school or family reporting route.'], ['Should parents contact other pupils directly?', 'No. Parents should use the school reporting route and avoid public or direct confrontation.'], ['When might safeguarding procedures be needed?', 'Follow school safeguarding procedures where there are threats, coercion, serious harm, image-based abuse or other significant risks.']],
  },
];

const leadPages = [
  {
    slug: '/resources/free-anti-bullying-classroom-pack/', title: 'Free Anti-Bullying Week Classroom Pack | HIP Psychology', description: 'Download a free Anti-Bullying Week classroom pack with assembly scripts, lesson plans, Odd Socks Day printables and parent newsletter support.', eyebrow: 'Free resource', h1: 'Free Anti-Bullying Week classroom pack', lead: 'Download a practical Anti-Bullying Week pack for primary and post-primary classrooms: assembly scripts, lesson plans, Odd Socks Day printables and a parent newsletter template.', pack: 'Free Anti-Bullying Week classroom pack', pdf: '/downloads/free-anti-bullying-week-classroom-pack.pdf', bullets: ['2 assembly scripts for primary and post-primary settings', '4 lesson plans for KS1, KS2, KS3 and KS4', 'Odd Socks Day printable activity sheet', 'Parent newsletter template for November planning'],
    sections: [
      { id: 'use', title: 'How schools can use the classroom pack', html: '<p>The pack is designed for Anti-Bullying Week 2026 planning, but the materials can also support tutor time, SPHE, PDMU, pastoral care and whole-school wellbeing work. Schools can use the assembly script to open the week, then use the lesson plans to help pupils practise the language of help-seeking, bystander support and respectful disagreement.</p>' },
      { id: 'adapt', title: 'How to adapt it by phase', html: '<p>Primary classes can keep activities concrete: friendship, exclusion, telling a trusted adult and celebrating difference. Post-primary classes can move into group chats, screenshots, social pressure, prejudice-based bullying and what it means to break the silence safely.</p><p>For live delivery, pair the pack with an <a href="/workshops/anti-bullying/">anti-bullying workshop</a> tailored to the year groups that need the most support.</p>' },
    ],
  },
  {
    slug: '/resources/anti-bullying-policy-checklist/', title: 'Anti-Bullying Policy Checklist | HIP Psychology', description: 'Preview the anti-bullying policy checklist for NI and ROI schools, aligned to official procedures and review expectations.', eyebrow: 'Policy resource', h1: 'Anti-bullying policy checklist for school leaders', lead: 'Use this preview checklist to review anti-bullying policy structure, recording, parent communication and follow-up before the full NI and ROI versions are integrated.', pack: 'Anti-bullying policy checklist', pdf: '/downloads/anti-bullying-policy-checklist.pdf', bullets: ['NI policy review prompts for the Addressing Bullying in Schools Act', 'ROI prompts mapped to Bi Cinealta procedures', 'Recording and review schedule prompts', 'Questions for pupil and parent consultation'],
    sections: [
      { id: 'review', title: 'What the checklist helps schools review', html: '<p>The checklist is built around the areas that make anti-bullying policy usable in practice: definitions, reporting routes, recording, parent communication, pupil consultation, review dates and staff confidence. It helps school leaders spot whether the policy describes what actually happens when a pupil raises a concern.</p>' },
      { id: 'versions', title: 'NI and ROI versions', html: '<p>Use the generic preview first, then move into the local checklist for your setting: <a href="/resources/anti-bullying-policy-checklist-ni/">NI Anti-Bullying Policy Checklist</a> or <a href="/resources/anti-bullying-policy-checklist-roi/">ROI Anti-Bullying Policy Checklist</a>.</p>' },
    ],
  },
  {
    slug: '/resources/anti-bullying-policy-checklist-ni/', title: 'NI Anti-Bullying Policy Checklist | HIP Psychology', description: 'Download the NI Anti-Bullying Policy Checklist for school leaders reviewing policy against the Addressing Bullying in Schools Act.', eyebrow: 'NI policy resource', h1: 'NI Anti-Bullying Policy Checklist', lead: 'A preview gated page for the Northern Ireland policy checklist mapped to the Addressing Bullying in Schools Act and Education Authority guidance.', pack: 'NI Anti-Bullying Policy Checklist', pdf: '/downloads/ni-anti-bullying-policy-checklist.pdf', bullets: ['Definition and scope prompts', 'Recording and review schedule', 'Parent and pupil consultation prompts', 'Education Authority resource links'],
    sections: [
      { id: 'ni-use', title: 'How NI schools can use the checklist', html: '<p>Northern Ireland school leaders can use the checklist before Anti-Bullying Week, during policy review or after a significant pastoral concern. It prompts the team to check whether definitions, recording expectations, pupil consultation and parent-facing language are current and easy for staff to apply.</p>' },
      { id: 'links', title: 'Where it fits in the NI hub', html: '<p>Use it alongside the <a href="/northern-ireland-schools/addressing-bullying-act-summary/">Addressing Bullying in Schools Act summary</a>, the <a href="/northern-ireland-schools/anti-bullying-policy-template/">NI policy template guide</a> and the Education Authority resource page.</p>' },
    ],
  },
  {
    slug: '/resources/anti-bullying-policy-checklist-roi/', title: 'ROI Anti-Bullying Policy Checklist | HIP Psychology', description: 'Download the ROI Anti-Bullying Policy Checklist for schools reviewing Bi Cinealta procedures and whole-school prevention.', eyebrow: 'ROI policy resource', h1: 'ROI Anti-Bullying Policy Checklist', lead: 'A preview gated page for the Republic of Ireland policy checklist mapped to Bi Cinealta procedures, prevention, intervention and oversight.', pack: 'ROI Anti-Bullying Policy Checklist', pdf: '/downloads/roi-anti-bullying-policy-checklist.pdf', bullets: ['Prevention and intervention prompts', 'Recording and oversight schedule', 'Parent communication checks', 'Tusla and Department guidance links'],
    sections: [
      { id: 'roi-use', title: 'How Irish schools can use the checklist', html: '<p>Irish schools can use the checklist to connect Bi Cinealta procedures with everyday prevention, intervention, recording and communication. It is written for practical planning rather than replacing official Department of Education guidance.</p>' },
      { id: 'links', title: 'Where it fits in the ROI hub', html: '<p>Use it with the <a href="/republic-of-ireland-schools/cinealtas-explained/">Cinealtas explainer</a>, the primary and post-primary Bi Cinealta pages, and the Tusla signposting page where safeguarding overlap may be relevant.</p>' },
    ],
  },
];

function leadPage(page) {
  const sections = (page.sections ?? []).map((section) => `<h2 id="${section.id}">${section.title}</h2>${section.html}`).join('');
  const body = `<section class="section"><p class="eyebrow">${page.eyebrow}</p><div class="content"><h1>${page.h1}</h1><p class="lead">${page.lead}</p><div class="grid two"><article class="card"><h3>What is included</h3><ul>${page.bullets.map((item) => `<li>${item}</li>`).join('')}</ul></article><article class="card"><h3>Download preview</h3>${leadForm(page.pack, page.pdf)}</article></div>${sections}<h2>How the final flow will work</h2><p>The final build will connect this form to the confirmed email platform, deliver the PDF instantly and trigger the five-email nurture sequence across 14 days.</p><p>Until the email platform is confirmed, the preview provides a downloadable sample PDF and a register-interest form.</p></div></section>${ctaBlock('workshop')}`;
  return pageChrome(page, body, [articleSchema(page), faqSchema({ faqs: [['What does this form capture?', 'Name, school, role and email.'], ['Is the PDF final?', 'This is a preview PDF shell ready for final copy and layout.'], ['What happens after launch?', 'The user receives the PDF by email and enters the nurture sequence.'], ['Can schools book workshops from here?', 'Yes, every lead magnet page links to the workshop conversion page.']] })]);
}

const workshop = {
  slug: '/workshops/anti-bullying/', title: 'Anti-bullying workshops for schools | HIP Psychology', description: 'Anti-bullying workshops for schools in NI and Ireland. Primary, post-primary and staff CPD options for Anti-Bullying Week.', eyebrow: 'Workshops', h1: 'Anti-bullying workshops for schools', lead: 'Expert-led anti-bullying workshops for primary, post-primary and staff teams, designed to help pupils understand bullying behaviour, bystander choices, online harm and practical help-seeking.', service: true, cta: 'pack', links: ['aba', 'ea', 'govBi'],
  sections: [
    { id: 'formats', title: 'Workshop formats', html: '<p>HIP Psychology can support in-person, hybrid or virtual delivery depending on the school context. The offer can be shaped around primary pupils, post-primary pupils, staff CPD or a whole-school campaign week.</p><p>Schools can use a workshop as the centrepiece for Anti-Bullying Week 2026, as a follow-up after pupil feedback, or as targeted support where a year group needs clearer language around bullying, bystanders and online behaviour.</p>' },
    { id: 'included', title: 'What is included', html: '<p>Sessions can cover definitions, power imbalance, relational bullying, cyberbullying, bystander choices, reporting routes and follow-up activities. Staff sessions can focus on consistent language, parent communication and policy awareness.</p><p>Primary sessions keep examples concrete and safe. Post-primary sessions can explore group-chat pressure, screenshots, social exclusion, prejudice-based bullying and the reasons pupils may stay silent even when they know something is wrong.</p>' },
    { id: 'booking', title: 'Booking route', html: '<p>Pricing needs client approval. Until then, the conversion copy should use a request-quote CTA and route users into the existing HIP Psychology contact form with page-context URL parameters.</p><p><a href="https://hippsychology.com/contact?category=ni-ks3">Request a workshop quote</a>. Schools can also <a href="/resources/free-anti-bullying-classroom-pack/">download the free classroom pack</a> first if they want to review the tone and structure before asking about live delivery.</p>' },
  ],
  faqs: [['Who are workshops for?', 'Primary pupils, post-primary pupils and staff teams.'], ['Can workshops support Anti-Bullying Week?', 'Yes, workshops can form the live-delivery part of the campaign.'], ['Are sessions available in NI and ROI?', 'Yes, the hub is aimed at schools across Northern Ireland and the Republic of Ireland.'], ['Is pricing listed?', 'Pricing is pending client approval, so the preview uses a request-quote CTA.']],
};

function writeFileForSlug(slug, content) {
  const dir = slug === '/' ? '.' : `.${slug}`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), content);
}

function pdfEscape(text) {
  return String(text).replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function makePdf(file, title, lines) {
  fs.mkdirSync('./downloads', { recursive: true });
  const bodyLines = [title, '', ...lines].slice(0, 28);
  const stream = ['BT', '/F1 18 Tf', '72 760 Td', `(${pdfEscape(bodyLines[0])}) Tj`, '/F1 11 Tf'];
  bodyLines.slice(1).forEach((line) => stream.push('0 -22 Td', `(${pdfEscape(line)}) Tj`));
  stream.push('ET');
  const objects = [];
  objects.push('1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n');
  objects.push('2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n');
  objects.push('3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n');
  objects.push('4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n');
  const content = stream.join('\n');
  objects.push(`5 0 obj << /Length ${Buffer.byteLength(content)} >> stream\n${content}\nendstream endobj\n`);
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((obj) => { offsets.push(Buffer.byteLength(pdf)); pdf += obj; });
  const xrefAt = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n`; });
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF\n`;
  fs.writeFileSync(`./downloads/${file}`, pdf);
}

function writeSitemaps(allPages) {
  const urls = allPages.map((page) => `  <url><loc>${site}${page.slug}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync('sitemap.xml', xml);
  const campaignSlugs = ['/', '/anti-bullying-week/2026/', '/anti-bullying-week/odd-socks-day-2026/', '/blog/anti-bullying-week-2026-assembly-ideas/', '/blog/anti-bullying-week-2026-primary-activities/', '/blog/anti-bullying-week-2026-post-primary-activities/', '/blog/odd-socks-day-2026-assembly-script/', '/blog/anti-bullying-week-2026-planning-checklist/', '/blog/anti-bullying-policy-review-new-school-year/', '/blog/pupil-voice-survey-before-new-school-year/', '/blog/anti-bullying-staff-briefing-first-month/', '/blog/parent-communication-anti-bullying-new-school-year/', '/blog/friendship-belonging-first-weeks-school/', '/blog/group-chat-online-safety-school-year/', '/resources/free-anti-bullying-classroom-pack/'];
  const blogSlugs = allPages.filter((page) => page.slug.startsWith('/blog/')).map((page) => page.slug);
  fs.writeFileSync('sitemap-campaign.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages.filter((page) => campaignSlugs.includes(page.slug)).map((page) => `  <url><loc>${site}${page.slug}</loc></url>`).join('\n')}\n</urlset>\n`);
  fs.writeFileSync('sitemap-evergreen.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages.filter((page) => !campaignSlugs.includes(page.slug)).map((page) => `  <url><loc>${site}${page.slug}</loc></url>`).join('\n')}\n</urlset>\n`);
  fs.writeFileSync('sitemap-blog.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages.filter((page) => blogSlugs.includes(page.slug)).map((page) => `  <url><loc>${site}${page.slug}</loc></url>`).join('\n')}\n</urlset>\n`);
  fs.writeFileSync('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://antibullyingni.co.uk/sitemap.xml\nSitemap: https://antibullyingni.co.uk/sitemap-campaign.xml\nSitemap: https://antibullyingni.co.uk/sitemap-evergreen.xml\nSitemap: https://antibullyingni.co.uk/sitemap-blog.xml\n');
}

writeFileForSlug('/', homePage());
pages.forEach((page) => writeFileForSlug(page.slug, standardPage(page)));
writeFileForSlug(blogHub.slug, blogHubPage());
blogPosts.forEach((page) => writeFileForSlug(page.slug, blogPostPage(page)));
writeFileForSlug(workshop.slug, standardPage(workshop));
leadPages.forEach((page) => writeFileForSlug(page.slug, leadPage(page)));

makePdf('free-anti-bullying-week-classroom-pack.pdf', 'Free Anti-Bullying Week Classroom Pack', ['Preview PDF shell for Phase 1.', 'Includes: assembly scripts, lesson plans, Odd Socks Day printables, and parent newsletter template.', 'Final copy and design layout to follow.']);
makePdf('anti-bullying-policy-checklist.pdf', 'Anti-Bullying Policy Checklist', ['Preview PDF shell for NI and ROI policy review.', 'Includes: recording, review, parent communication, pupil consultation, and official guidance prompts.']);
makePdf('ni-anti-bullying-policy-checklist.pdf', 'NI Anti-Bullying Policy Checklist', ['Preview PDF shell mapped to the Addressing Bullying in Schools Act 2016.', 'Includes: definitions, recording, review cycle, EA resources, and consultation prompts.']);
makePdf('roi-anti-bullying-policy-checklist.pdf', 'ROI Anti-Bullying Policy Checklist', ['Preview PDF shell mapped to Bi Cinealta procedures.', 'Includes: prevention, intervention, recording, oversight, and parent communication prompts.']);

writeSitemaps([home, ...pages, blogHub, ...blogPosts, workshop, ...leadPages]);

const report = [home, ...pages, blogHub, ...blogPosts, workshop, ...leadPages].map((page) => `${page.slug} ${page.h1 || page.title || ''}`).join('\n');
fs.writeFileSync('phase-1-routes.txt', `${report}\n`);
console.log(`Generated ${[home, ...pages, blogHub, ...blogPosts, workshop, ...leadPages].length} routes plus 4 PDF previews.`);
