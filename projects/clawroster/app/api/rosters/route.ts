import { NextResponse } from 'next/server';
import { getPublicRegistrations } from '../../../lib/public-rosters';

export const revalidate = 300;

export async function GET() {
  const registrations = await getPublicRegistrations();
  return NextResponse.json({ registrations });
}
