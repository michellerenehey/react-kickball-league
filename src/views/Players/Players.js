import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);
  console.log(players);

  return <div>i am the Players component</div>;
}
