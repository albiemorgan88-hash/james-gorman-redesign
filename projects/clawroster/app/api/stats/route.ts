import { NextResponse } from 'next/server';
import { getPublicRosterStats } from '../../../lib/public-roster-stats';

export const revalidate = 300;

export async function GET() {
  const stats = await getPublicRosterStats();
  return NextResponse.json({ stats });
}
