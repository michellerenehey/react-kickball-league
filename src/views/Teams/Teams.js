import { fetchTeams } from '../../services/teams';
import { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);
  console.log(teams);

  return (
    <div>
      <p>i am the Teams component</p>
      {teams.map((team) => {
        return team.name;
      })}
    </div>
  );
}
