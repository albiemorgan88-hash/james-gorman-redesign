import type { ClawRosterRegistration } from './supabase';

export type RosterSource = 'live' | 'showcase';
export type RosterBadgeTone = 'beta' | 'verified' | 'showcase' | 'neutral';

export interface RosterBadge {
  label: string;
  tone: RosterBadgeTone;
}

export function getRosterBadges(registration: Pick<ClawRosterRegistration, 'payment_verified' | 'claw_number'>, source: RosterSource): RosterBadge[] {
  if (source === 'showcase') {
    return [{ label: 'SHOWCASE EXAMPLE', tone: 'showcase' }];
  }

  if (registration.payment_verified) {
    return [{ label: 'POB VERIFIED', tone: 'verified' }];
  }

  return [{ label: 'LIVE BETA SUBMISSION', tone: 'beta' }];
}

export function getRosterTrustCopy(registration: Pick<ClawRosterRegistration, 'payment_verified'>, source: RosterSource) {
  if (source === 'showcase') {
    return 'Showcase example for the directory. Useful for inspiration, not proof.';
  }

  if (registration.payment_verified) {
    return 'Proof of Build verified roster.';
  }

  return 'Public beta roster. Live and shareable, with stronger proof flows still being tightened.';
}

export function getLinkedInCredentialName(registration: Pick<ClawRosterRegistration, 'payment_verified'>, source: RosterSource) {
  if (source === 'showcase') {
    return 'ClawRoster Showcase Example';
  }

  if (registration.payment_verified) {
    return 'ClawRoster — Proof of Build';
  }

  return 'ClawRoster Public Beta Roster';
}
