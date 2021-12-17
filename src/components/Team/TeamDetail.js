import { Link } from 'react-router-dom';

export default function TeamDetail({ name, players }) {
  return (
    <div>
      <h2>{name}</h2>
      {players.map((player) => (
        <p key={player.id}>
          <Link to={`/players/${player.id}`}>{player.name}</Link>
        </p>
      ))}
      <Link to="/teams">Back to TEAMS</Link>
    </div>
  );
}
