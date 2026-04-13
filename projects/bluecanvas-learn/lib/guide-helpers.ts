import { guides, type Guide } from '@/lib/guides';

export const guideCount = guides.length;
export const latestGuides = guides.slice(0, 6);

export const starterGuideSlugs = [
  'what-is-an-ai-agent',
  'ai-training-for-teams',
  'ai-customer-service-guide',
  'ai-email-marketing-guide',
] as const;

export const featuredGuideSlugs = [
  'ai-automation-save-money',
  'ai-implementation-cost-uk',
  'what-is-an-ai-agent',
  'ai-training-for-teams',
] as const;

export const categoryDescriptions: Record<string, string> = {
  'Getting Started': 'First-step reads for business owners figuring out where AI fits.',
  'AI Strategy': 'Board-level thinking, planning, and when to get expert help.',
  'Tools & Tutorials': 'Hands-on explainers for using common AI tools properly.',
  'ROI & Business Case': 'Costs, savings, ROI, and commercial case-making.',
  'Industry Guides': 'Use cases tailored to specific UK sectors and service businesses.',
};

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function pickGuides(slugs: readonly string[]) {
  return slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is Guide => Boolean(guide));
}

export function getCategoryAnchor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCategoryGroups() {
  const seen = new Set<string>();

  return guides.reduce<Array<{ category: string; guides: Guide[] }>>((groups, guide) => {
    if (!seen.has(guide.category)) {
      seen.add(guide.category);
      groups.push({ category: guide.category, guides: [] });
    }

    const group = groups.find((entry) => entry.category === guide.category);
    group?.guides.push(guide);
    return groups;
  }, []);
}

export function getReadingTime(content: string) {
  const plainText = stripHtml(content);
  const words = plainText.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 180));
}

export function stripHtml(content: string) {
  return decodeHtml(content.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

export function getGuideHeadings(content: string) {
  const matches = [...content.matchAll(/<h2>(.*?)<\/h2>/g)];

  return matches.map((match) => {
    const title = decodeHtml(match[1].replace(/<[^>]+>/g, '').trim());
    return {
      title,
      id: slugify(title),
    };
  });
}

export function addHeadingIds(content: string) {
  return content.replace(/<h2>(.*?)<\/h2>/g, (_match, inner) => {
    const title = decodeHtml(inner.replace(/<[^>]+>/g, '').trim());
    return `<h2 id="${slugify(title)}">${inner}</h2>`;
  });
}

export function getRelatedGuides(currentGuide: Guide, count = 3) {
  const sameCategory = guides.filter(
    (guide) => guide.slug !== currentGuide.slug && guide.category === currentGuide.category,
  );
  const otherGuides = guides.filter(
    (guide) => guide.slug !== currentGuide.slug && guide.category !== currentGuide.category,
  );

  return [...sameCategory, ...otherGuides].slice(0, count);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ');
}
