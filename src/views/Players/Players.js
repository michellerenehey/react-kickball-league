import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../components/Player/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
      console.log(data);
    };
    fetchData();
  }, []);
  console.log(players);

  return (
    <div>
      {players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </div>
  );
}
