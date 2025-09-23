import { use } from 'react';
import Player from './Player';

const Players = ({ playersData, handleChoosePlayer }) => {
  const players = use(playersData);

  return (
    <div className="container mx-auto px-[3%] md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
      {players.map(player => (
        <Player
          key={player.id}
          player={player}
          handleChoosePlayer={handleChoosePlayer}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
