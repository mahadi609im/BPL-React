import SelectPlayer from './SelectPlayer';

const SelectPlayers = ({ choosePlayer, handlePlayerRemove }) => {
  return (
    <>
      {choosePlayer.length ? (
        <div className="container mx-auto px-[3%] md:px-0 space-y-6">
          {choosePlayer.map(choosePl => (
            <SelectPlayer
              key={choosePl.id}
              choosePl={choosePl}
              handlePlayerRemove={handlePlayerRemove}
            ></SelectPlayer>
          ))}
        </div>
      ) : (
        <div className="w-full rounded-md  flex justify-center items-center mt-20">
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <h3 className="mx-5 text-[#ffffff36] text-shadow-lg font-normal">
            No Player Choosen
          </h3>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px] mt-10"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
          <div className="border border-[#ffffff1a] bg-[#1f2730] w-[50px] h-[20px]"></div>
        </div>
      )}
    </>
  );
};

export default SelectPlayers;
