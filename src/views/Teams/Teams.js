import { fetchTeams } from '../../services/teams';
import { useEffect, useState } from 'react';
import TeamList from '../../components/Team/TeamList';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h3>...Loading</h3>;

  return (
    <div>
      {teams.map((team) => (
        <TeamList key={team.id} {...team} />
      ))}
      <Link to={'/'}>Back Home</Link>
    </div>
  );
}
