import { fetchTeams } from '../../services/teams';
import { useEffect, useState } from 'react';
import TeamList from '../../components/Team/TeamList';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {teams.map((team) => (
        <TeamList key={team.id} {...team} />
      ))}
      <Link to={'/'}>Back Home</Link>
    </div>
  );
}
