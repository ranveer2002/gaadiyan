import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div className="h-[77px] flex items-center shadow-lg mx-auto">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            className="w-[140px] h-[148px] ml-20 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex">
        <Link to="/">
          <p className="text-lg ml-32">Home</p>
        </Link>
        <Link to="/buycar">
          <p className="text-lg ml-20">Buy Car</p>
        </Link>
        <Link to="/sellcar">
          <p className="text-lg ml-20">Sell Car</p>
        </Link>
        <Link to="/aboutus">
          <p className="text-lg ml-20">About Us</p>
        </Link>
      </div>
      <div className="flex font-semibold ml-72">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="border px-3 py-1 text-white bg-rose-600 rounded-lg">
              Log In
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="border px-3 py-1 text-white bg-rose-600 rounded-lg ml-5">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/signup">
            <div
              className="w-12 h-12 rounded-full bg-rose-300
             text-3xl font-medium text-white px-4 py-1 ml-2"
            >
              P
            </div>
            <div>Account</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
