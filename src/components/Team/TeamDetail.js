import React from 'react';

export default function TeamDetail({ name, players }) {
  return (
    <div>
      <p>i am {name}</p>
      {players.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
      {/* <p>team players: {players}</p> */}
    </div>
  );
}
