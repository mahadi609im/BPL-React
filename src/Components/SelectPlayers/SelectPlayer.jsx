import { RiDeleteBin2Fill } from 'react-icons/ri';
const SelectPlayer = ({ choosePl, handlePlayerRemove }) => {
  const { id, player_name, playing_role, player_image } = choosePl;
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
            {player_name}
          </h3>
          <p className="text-sm md:text-base font-normal text-[#fffcffb3]">
            {playing_role}
          </p>
        </div>
      </div>
      <div
        onClick={() => handlePlayerRemove(id)}
        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-2 border-[#ffffff1a] rounded-lg hover:bg-[#ffffff1a] "
      >
        <RiDeleteBin2Fill className="text-[#F14749] text-3xl" />
      </div>
    </div>
  );
};

export default SelectPlayer;
