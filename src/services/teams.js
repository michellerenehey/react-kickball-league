import { checkError, client } from './client';

export async function fetchTeams() {
  const response = await client.from('teams').select().order('name');
  return checkError(response);
}

export async function fetchTeamById(id) {
  const response = await client.from('teams').select('*, players(*)').match({ id }).single();
  return checkError(response);
}

// did not write this alone!
export async function fetchPlayersByTeam(id) {
  const response = await client.from('players').select('*').eq('team_id', id);
  return checkError(response);
}
