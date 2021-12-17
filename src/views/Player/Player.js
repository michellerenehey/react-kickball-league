import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetails from '../../components/Player/PlayerDetail';

export default function Player(props) {
  const id = props.match.params.id;
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h3>...Loading</h3>;
  return <PlayerDetails {...player} />;
}
