import cricket from '../../assets/cricket.png';

const Banner = () => {
  return (
    <div className="container mx-auto px-[3%] md:px-0 bg-[url('/banner.png')] bg-no-repeat bg-cover py-[64px] rounded-xl md:rounded-2xl lg:rounded-3xl">
      <div className="max-w-4/5 mx-auto w-full flex flex-col justify-center items-center space-y-6">
        <img className="w-[248px] object-cover" src={cricket} alt="" />
        <div className="space-y-3">
          <h1 className="text-[20px] md:text-[32px] lg:text-[40px] font-bold text-white text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-medium text-base md:text-xl lg:text-2xl text-[#fffcffb3] text-center">
            Beyond Boundaries Beyond Limits
          </p>
        </div>
        <div className="p-2 border border-[#E7FE29] rounded-2xl">
          <button className="bg-[#E7FE29] shadow py-[14px] px-5 text-[#131313] font-bold text-base rounded-xl">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
