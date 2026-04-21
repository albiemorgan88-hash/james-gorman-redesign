import { redirect } from 'next/navigation';

export default function LegacyAlbieRosterRedirect() {
  redirect('/roster/genesis');
}
