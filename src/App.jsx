import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { Suspense, useState } from 'react';
import Players from './Components/Players/Players';
import SelectPlayers from './Components/SelectPlayers/SelectPlayers';

let playersData = fetch('data.json').then(res => res.json());

const App = () => {
  const [toggleClick, setToggleClick] = useState(true);
  const [choosePlayer, setChoosePlayer] = useState([]);
  const [coins, setCoins] = useState(99999);

  const handleChoosePlayer = player => {
    let newChoose = [...choosePlayer, player];
    if (newChoose.length < 7) {
      setChoosePlayer(newChoose);
    } else {
      alert('You can only 6 players buy');
      return;
    }
    const newCoins = coins - player.price;
    setCoins(newCoins);
  };

  const handlePlayerRemove = removePlayer => {
    const newChoosePlayers = choosePlayer.filter(pl => pl.id !== removePlayer);
    const removePlayerObj = choosePlayer.find(pl => pl.id == removePlayer);
    const newCoins = removePlayerObj.price + coins;
    setCoins(newCoins);
    setChoosePlayer(newChoosePlayers);
  };

  return (
    <div>
      <Navbar coins={coins}></Navbar>
      <Banner></Banner>
      <div className="mt-[32px] md:mt-[56px] lg:mt-[88px] mb-[56px] md:mb-[100px] lg:mb-[200px]">
        <div className="container mx-auto px-[3%] md:px-0 mb-8 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
          {toggleClick ? (
            <h3 className="text-[28px] font-bold">Available Players </h3>
          ) : (
            <h3 className="text-[28px] font-bold">
              Selected Player (
              <span className={choosePlayer.length === 6 && 'text-red-500'}>
                {choosePlayer.length}/6
              </span>
              ){' '}
            </h3>
          )}
          <div className="border border-[#ffffff1a] ">
            <button
              onClick={() => setToggleClick(true)}
              className={`btn text-sm md:text-base font-medium ${
                toggleClick
                  ? 'bg-[#E7FE29] text-[#131313] font-semibold'
                  : 'bg-[#ffffff1a] text-[#fffcffb3] hover:text-[#E7FE29]'
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setToggleClick(false)}
              className={`btn text-sm md:text-base font-medium ${
                !toggleClick
                  ? 'bg-[#E7FE29] text-[#131313] font-semibold'
                  : 'bg-[#ffffff1a] text-[#fffcffb3] hover:text-[#E7FE29]'
              }`}
            >
              Selected (
              <span className={choosePlayer.length === 6 && 'text-red-500'}>
                {choosePlayer.length}
              </span>
              )
            </button>
          </div>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          {toggleClick ? (
            <Players
              handleChoosePlayer={handleChoosePlayer}
              playersData={playersData}
            ></Players>
          ) : (
            <SelectPlayers
              choosePlayer={choosePlayer}
              handlePlayerRemove={handlePlayerRemove}
            ></SelectPlayers>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
