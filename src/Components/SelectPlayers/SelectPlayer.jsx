import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaFlag, FaUser } from 'react-icons/fa';

const SelectPlayer = ({ choosePl, handlePlayerRemove }) => {
  const {
    id,
    player_name,
    playing_role,
    player_image,
    price,
    player_country,
    rating,
    bating_style,
    bowling_style,
  } = choosePl;
  return (
    <div className="p-4 md:p-6 border border-[#ffffff1a] bg-[#1f2730] w-full rounded-2xl flex justify-between items-center">
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="w-[56px] h-[56px] md:w-[80px] md:h-[80px] bg-slate-400 rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={player_image}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold">
            {player_name} | {price}
          </h3>
          <p className="text-sm md:text-base font-normal text-[#fffcffb3]">
            {playing_role}
          </p>
        </div>
      </div>
      <div
        onClick={() => document.getElementById('my_modal_3').showModal()}
        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-2 border-[#ffffff1a] rounded-lg hover:bg-[#ffffff1a] "
      >
        <RiDeleteBin2Fill className="text-[#F14749] text-3xl" />
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center border-2 border-[#ffffff1a] rounded-lg hover:bg-[#ffffff1a] absolute right-0 top-0">
              ✕
            </button>
          </form>
          <div className="p-6 border border-[#ffffff1a] rounded-2xl shadow-lg bg-[#1f2730]">
            <div className="w-1/2 h-auto border border-[#ffffff1a]  rounded-2xl mb-6 mx-auto">
              <img
                className="object-cover w-full h-full rounded-2xl"
                src={player_image}
                alt=""
              />
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <FaUser className="text-2xl" />
                    <h3 className="text-xl font-semibold">{player_name}</h3>
                  </div>
                  <p className="text-base font-normal text-[#fffcffb3]">
                    {rating}
                  </p>
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <FaFlag className="text-xl text-[#fffcffb3]" />
                    <p className="text-base font-normal text-[#fffcffb3]">
                      {player_country}
                    </p>
                  </div>
                  <p className="py-2 px-5 text-[#fffcffb3] rounded-lg text-sm font-medium border border-[#ffffff1a]">
                    {playing_role} |{' '}
                    {playing_role == 'Bowler' ? bowling_style : bating_style}
                  </p>
                </div>
                <div className="border-b border-b-[#fffcff3b]"></div>
                <div className="flex justify-between items-center">
                  <h5 className="text-base font-medium">
                    Price: <span className="text-[#E7FE29]">{price}</span>{' '}
                    <span className="text-[#E7FE29]">USD</span>
                  </h5>
                  <button
                    onClick={() => handlePlayerRemove(id)}
                    className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-2 border-[#ffffff1a] rounded-lg hover:bg-[#ffffff1a] "
                  >
                    <RiDeleteBin2Fill className="text-[#F14749] text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SelectPlayer;
