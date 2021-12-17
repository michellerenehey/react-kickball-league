import { Link } from 'react-router-dom';

export default function TeamList({ id, name }) {
  return (
    <div>
      <Link to={`/teams/${id}`}>{name}</Link>
    </div>
  );
}
