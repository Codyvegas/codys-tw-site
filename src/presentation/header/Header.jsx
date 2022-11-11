import mainLogo from "../../assets/headerimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className="flex justify-end">
        <Link to="/proof-of-work">
          <button className=" rounded-md px-8 py-2 text-xl font-semibold text-black  hover:text-blue-600 active:bg-teal-400">
            Proof Of Work
          </button>
        </Link>
        <Link to="/about">
          <button className="rounded-md px-8 py-2 text-xl font-semibold text-black hover:text-blue-600 active:bg-teal-400">
            Contact Me
          </button>
        </Link>
        <Link to="/contact-me">
          <button className="rounded-md px-8 py-2 text-xl font-semibold text-black hover:text-blue-600 active:bg-teal-400">
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
