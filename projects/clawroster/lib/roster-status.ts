import type { ClawRosterRegistration } from './supabase';

export type RosterSource = 'live' | 'showcase';
export type RosterBadgeTone = 'beta' | 'verified' | 'showcase' | 'neutral';

export interface RosterBadge {
  label: string;
  tone: RosterBadgeTone;
}

export interface LinkedInHandoffState {
  heading: string;
  description: string;
  note: string;
  buttonLabel: string;
}

export interface ProofLaneState {
  currentLabel: string;
  currentMeta: string;
  currentSummary: string;
  nextLabel?: string;
  nextMeta?: string;
  nextSummary?: string;
  note: string;
}

export function getRosterBadges(registration: Pick<ClawRosterRegistration, 'payment_verified' | 'claw_number'>, source: RosterSource): RosterBadge[] {
  if (source === 'showcase') {
    return [{ label: 'SHOWCASE EXAMPLE', tone: 'showcase' }];
  }

  if (registration.payment_verified) {
    return [{ label: 'PAYMENT VERIFIED ON BASE', tone: 'verified' }];
  }

  return [{ label: 'LIVE BETA SUBMISSION', tone: 'beta' }];
}

export function getRosterTrustCopy(registration: Pick<ClawRosterRegistration, 'payment_verified'>, source: RosterSource) {
  if (source === 'showcase') {
    return 'Showcase example for the directory. Useful for inspiration, not proof.';
  }

  if (registration.payment_verified) {
    return 'Payment-verified roster. Registration was paid on Base mainnet and the tx hash is on-chain. This is not an independent audit of the operator\u2019s work.';
  }

  return 'Public beta roster. Live and shareable, with stronger proof flows still being tightened.';
}

export function getLinkedInCredentialName(registration: Pick<ClawRosterRegistration, 'payment_verified'>, source: RosterSource) {
  if (source === 'showcase') {
    return 'ClawRoster Showcase Example';
  }

  if (registration.payment_verified) {
    return 'ClawRoster Payment-Verified Roster (Base)';
  }

  return 'ClawRoster Live Beta Roster';
}

export function getLinkedInHandoffState(registration: Pick<ClawRosterRegistration, 'payment_verified'>, source: RosterSource): LinkedInHandoffState {
  if (source === 'showcase') {
    return {
      heading: 'Use this example on LinkedIn',
      description: 'If you want to show what a finished roster can look like, add the example link to LinkedIn Featured or Licenses & certifications.',
      note: 'Showcase example only. Useful for inspiration, not a claimed roster or independent verification.',
      buttonLabel: 'Open LinkedIn form with example details',
    };
  }

  if (registration.payment_verified) {
    return {
      heading: 'Add this payment-verified roster to LinkedIn',
      description: 'Use one clean link to show the live roster, the payment-verified trust state, and the on-chain registration receipt in a format recruiters can open fast.',
      note: 'Reflects payment verified on Base mainnet for this registration. Not an independent audit of the operator\u2019s work.',
      buttonLabel: 'Open LinkedIn form',
    };
  }

  return {
    heading: 'Add this live beta roster to LinkedIn',
    description: 'Use LinkedIn Featured or Licenses & certifications to attach the public roster link recruiters can actually open.',
    note: 'This is a live beta roster link, not third-party certification or independent verification.',
    buttonLabel: 'Open LinkedIn form',
  };
}

export function getProofLaneState(registration: Pick<ClawRosterRegistration, 'payment_verified'>, source: RosterSource): ProofLaneState {
  if (source === 'showcase') {
    return {
      currentLabel: 'Showcase example',
      currentMeta: 'Demo only',
      currentSummary: 'Useful for inspiration and screenshots, not a claimed roster or proof tier.',
      note: 'Keep public claims tied to a live roster, not the showcase sample.',
    };
  }

  if (registration.payment_verified) {
    return {
      currentLabel: 'Payment verified on Base',
      currentMeta: 'Registration paid on-chain',
      currentSummary: 'The payer wallet sent the registration fee on Base mainnet and the tx hash is stored with the roster. This proves committed registration, not an independent audit of the work.',
      note: 'Payment verification only. Operator work, claims, and links are not separately audited by ClawRoster.',
    };
  }

  return {
    currentLabel: 'Free beta roster',
    currentMeta: '£0 during beta',
    currentSummary: 'Live now, public, and shareable without pretending proof is finished.',
    nextLabel: 'Payment-verified lane',
    nextMeta: 'Available now on Base mainnet',
    nextSummary: 'Submit again through the verified lane with a Base tx hash to publish a separate payment-verified roster. Payment verification does not equal independent work audit.',
    note: 'Beta stays free and honest. Verified lane adds on-chain payment proof only, not third-party work audit.',
  };
}
