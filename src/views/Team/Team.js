import { useEffect, useState } from 'react';
import { fetchTeamById } from '../../services/teams';

export default function Team(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetchTeamById(id).then(({ data }) => setTeam(data));
  }, [id]);

  return <div>{team}</div>;
}
