import { useEffect, useState } from 'react';
import { fetchTeamById, fetchPlayersByTeam } from '../../services/teams';
// import { Link } from 'react-router-dom';

import TeamDetail from '../../components/Team/TeamDetail';

export default function Team(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState([]);
  const [players, setPlayers] = useState([]);
  // add loading state!

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      const playerData = await fetchPlayersByTeam(id);
      setTeam(data);
      setPlayers(playerData);
    };
    fetchData();
  }, [id]);

  return <TeamDetail name={team.name} players={players} />;
}
