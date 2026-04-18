import { getPublicRegistrations } from './public-rosters';

export interface PublicRosterStats {
  registrations: number;
  liveTeamMembers: number;
  totalKarma: number;
  earlyAdopterSlotsLeft: number;
}

export async function getPublicRosterStats(): Promise<PublicRosterStats> {
  const registrations = await getPublicRegistrations();

  const liveTeamMembers = registrations.reduce((sum, registration) => {
    const roster = registration.roster_data || {};
    const team = Array.isArray(roster.team) ? roster.team.length : 0;
    const subAgents = Array.isArray(roster.sub_agents) ? roster.sub_agents.length : 0;
    return sum + Math.max(team, subAgents, 1);
  }, 0);

  const totalKarma = registrations.reduce((sum, registration) => {
    const roster = registration.roster_data || {};
    return sum + Number(roster.karma_score || 100);
  }, 0);

  return {
    registrations: registrations.length,
    liveTeamMembers,
    totalKarma,
    earlyAdopterSlotsLeft: Math.max(100 - registrations.length, 0),
  };
}
