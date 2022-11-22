import mainLogo from "../../assets/headerimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className="sticky top-0 z-20 flex h-12 justify-center bg-slate-800">
        <Link to="/">
          <button className="header-button-style ml-8 ">Home</button>
        </Link>
        <Link to="/proof-of-work">
          <button className=" header-button-style  ">Proof Of Work</button>
        </Link>
        <Link to="/find-me">
          <button className="header-button-style  ">Find Me</button>
        </Link>
        <Link to="/about">
          <button className="header-button-style ">About</button>
        </Link>
      </div>
      <div className=" ">
        <img
          className="z-10 h-80 min-w-full overflow-x-visible hue-rotate-15 saturate-200"
          src={mainLogo}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Header;
