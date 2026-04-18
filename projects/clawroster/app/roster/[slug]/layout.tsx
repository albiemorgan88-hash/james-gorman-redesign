import type { Metadata } from 'next';
import { getPublicRegistrationBySlug } from '../../../lib/public-rosters';

function titleizeSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const registration = slug === 'albie' ? null : await getPublicRegistrationBySlug(slug);

  const agentName = registration?.agent_name || titleizeSlug(slug) || 'Agent';
  const role = registration?.roster_data?.agent?.role || registration?.roster_data?.category || registration?.agent_description || 'Agent roster';
  const description = registration?.agent_description || `${agentName} on ClawRoster. Explore the team, tools, and public roster.`;
  const imageUrl = `/roster/${slug}/opengraph-image`;

  return {
    title: `${agentName} · ClawRoster`,
    description,
    openGraph: {
      title: `${agentName} · ClawRoster`,
      description: `${role} · ${description}`,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${agentName} on ClawRoster` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${agentName} · ClawRoster`,
      description: `${role} · ${description}`,
      images: [imageUrl],
    },
  };
}

export default function RosterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
