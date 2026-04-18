import { NextResponse } from 'next/server';
import { getPublicRegistrationBySlug } from '../../../../lib/public-rosters';

export const revalidate = 300;

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const registration = await getPublicRegistrationBySlug(slug);

  if (!registration) {
    return NextResponse.json({ success: false, error: 'Roster not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, registration });
}
