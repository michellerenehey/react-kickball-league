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
      {/* when this loops, have each link create a p tag that links to /teams/:id... and loads a
      TeamDetail component. not sure how to implement Teams list (i dont think we will need that
      particular component...?) or maybe the above map actually happens on the teamslist page?*/}
    </div>
  );
}
