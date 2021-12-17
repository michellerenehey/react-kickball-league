import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetails from '../../components/Player/PlayerDetail';

export default function Player(props) {
  const id = props.match.params.id;
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
    };
    fetchData();
  }, [id]);
  console.log(player);

  return <PlayerDetails {...player} />;
}
