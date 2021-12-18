import { Link } from 'react-router-dom';

export default function PlayerDetail({ name, position, team_id, teams }) {
  return (
    <div>
      <p>I am {name}</p>
      <p>I am the {position} on the team.</p>
      <p>
        I play on the <Link to={`/teams/${team_id}`}>{teams.name}</Link>
      </p>
      <Link to="/players">Back to PLAYERS</Link>
    </div>
  );
}
