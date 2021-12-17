import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players';
import { Link } from 'react-router-dom';
import PlayerList from '../../components/Player/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
      <Link to={'/'}>Back Home</Link>
    </div>
  );
}
