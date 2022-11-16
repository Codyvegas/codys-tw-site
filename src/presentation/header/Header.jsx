import mainLogo from "../../assets/headerimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className="sticky top-0 z-20 flex h-12 justify-center bg-slate-800">
        <Link to="/">
          <button className="ml-8 rounded-md px-8 py-2 text-xl font-semibold text-cyan-400 underline  hover:text-purple-500">
            Home
          </button>
        </Link>
        <Link to="/proof-of-work">
          <button className=" rounded-md px-8 py-2 text-xl font-semibold text-cyan-400 underline  hover:text-purple-500 ">
            Proof Of Work
          </button>
        </Link>
        <Link to="/find-me">
          <button className="rounded-md px-8 py-2 text-xl font-semibold text-cyan-400 underline hover:text-purple-500 ">
            Find Me
          </button>
        </Link>
        <Link to="/about">
          <button className="rounded-md px-8 py-2 text-xl font-semibold text-cyan-400 underline hover:text-purple-500">
            About
          </button>
        </Link>
      </div>
      <div className=" ">
        <img
          className="z-10 h-80 min-w-full overflow-x-visible saturate-200"
          src={mainLogo}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Header;
