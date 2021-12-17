import { checkError, client } from './client';

export async function fetchTeams() {
  const response = await client.from('teams').select().order('name');
  return checkError(response);
}

export async function fetchTeamById(id) {
  const response = await client.from('teams').select('*, players(*)').match({ id });
  return checkError(response);
}
