import { Link } from 'react-router-dom';

export default function PlayerDetail({ name, team_id, teams }) {
  return (
    <div>
      <p>i am {name}</p>
      <p>
        I play on the <Link to={`/teams/${team_id}`}>{teams.name}</Link>
      </p>
    </div>
  );
}
