import mainLogo from "../../assets/headerimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="font-rock-salt text-2xl font-semibold text-green-800">
      <Link to="/proof-of-work">
        <button className="">
          <span className="p-4">Proof Of Work</span>
        </button>
      </Link>
      <Link to="/about">
        <button>
          <span>About</span>
        </button>
      </Link>
      <Link to="/contact-me">
        <button>
          <span>Contact Me</span>
        </button>
      </Link>
      <img className=" scale-78 h-64 w-full" src={mainLogo} alt=""></img>
    </div>
  );
}

export default Header;
