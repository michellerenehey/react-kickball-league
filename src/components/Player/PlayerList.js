import { Link } from 'react-router-dom';

export default function PlayerList({ id, name }) {
  return (
    <div>
      <Link to={`/players/${id}`}>{name}</Link>
    </div>
  );
}
