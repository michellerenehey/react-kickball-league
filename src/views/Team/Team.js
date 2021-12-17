import { useEffect, useState } from 'react';
import { fetchTeamById } from '../../services/teams';

export default function Team(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);
  console.log(team);
  return <div>{team.name}</div>;
}
