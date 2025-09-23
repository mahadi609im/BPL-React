import logo from '../../assets/logo.png';
import currency from '../../assets/currency.png';

const Navbar = ({ coins }) => {
  return (
    <div className="shadow-sm my-5 shadow-slate-700">
      <div className="navbar container mx-auto px-[3%] md:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div className="max-w-[72px] max-h-[72px] w-full h-full  ">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-neutral ml-12">
          <span>{coins}</span> Coin{' '}
          <img className="w-5 h-5" src={currency} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
