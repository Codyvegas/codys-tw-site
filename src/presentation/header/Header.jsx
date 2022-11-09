import mainLogo from "../../assets/headerimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className=" button-container mt-2 flex flex-col items-end  ">
        <Link to="/proof-of-work">
          <button className="mr-20 max-w-xs rounded-md px-8 py-2 pt-2 text-2xl font-semibold text-green-700 hover:text-green-600 active:bg-red-400">
            Proof Of Work
          </button>
        </Link>
        <Link to="/about">
          <button className=" mr-12 max-w-xs rounded-md px-8 py-2 pt-2 text-2xl font-semibold text-green-700 hover:text-green-600 active:bg-red-400">
            Contact Me
          </button>
        </Link>
        <Link to="/contact-me">
          <button className=" mr-6 max-w-xs rounded-md px-8 py-2 pt-2 text-2xl font-semibold text-green-700 hover:text-green-600 active:bg-red-400">
            About
          </button>
        </Link>
      </div>
      <div className="background-img">
        <img
          className="min-w-full rounded-xl drop-shadow-xl"
          src={mainLogo}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Header;
