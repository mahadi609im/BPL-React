import { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
const Player = ({ player, handleChoosePlayer }) => {
  const {
    id,
    player_image,
    player_name,
    player_country,
    playing_role,
    bating_style,
    bowling_style,
    rating,
    price,
  } = player;

  const [chooseClick, setChooseClick] = useState(false);

  return (
    <div className="p-6 border border-[#ffffff1a] rounded-2xl shadow-lg bg-[#1f2730]">
      <div className="w-full h-[240px] border border-[#ffffff1a]  rounded-2xl mb-6">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src={player_image}
          alt=""
        />
      </div>
      <div>
        <div className="space-y-4">
          <div className="flex gap-4 items-center ">
            <FaUser className="text-2xl" />
            <h3 className="text-xl font-semibold">{player_name}</h3>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-3 items-center">
              <FaFlag className="text-xl text-[#fffcffb3]" />
              <p className="text-base font-normal text-[#fffcffb3]">
                {player_country}
              </p>
            </div>
            <p className="py-2 px-5 text-[#fffcffb3] rounded-lg text-sm font-medium border border-[#ffffff1a]">
              {playing_role}
            </p>
          </div>
          <div className="border-b border-b-[#fffcff3b]"></div>
          <h4 className="font-bold text-base">
            {playing_role == 'Bowler' ? bowling_style : bating_style}
          </h4>
          <div className="flex justify-between items-center">
            <h5 className="text-base font-medium">Rating</h5>
            <p className="text-base font-normal text-[#fffcffb3]">{rating}</p>
          </div>
          <div className="flex justify-between items-center">
            <h5 className="text-base font-medium">
              Price: <span className="text-[#E7FE29]">{price}</span>{' '}
              <span className="text-[#E7FE29]">USD</span>
            </h5>
            <button
              disabled={chooseClick === true}
              onClick={() => {
                handleChoosePlayer(player);
                setChooseClick(true);
              }}
              className={`rounded-lg py-2 px-4 ${
                !chooseClick
                  ? 'bg-[#131313] cursor-pointer'
                  : 'text-[#fffcffb3] cursor-not-allowed bg-[#ffffff1a]'
              }`}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
