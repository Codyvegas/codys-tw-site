import mainLogo from "../../assets/headerimg.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="overflow-auto">
      <div className=" button-container mt-2 flex flex-col items-end  ">
        {/* <div className="max-w-sm text-2xl font-semibold text-green-800"> */}
        {/* <div className="max-w-sm py-2 text-2xl font-semibold text-green-800"> */}
        {/* <Link to="/proof-of-work"> */}
        <button className="mr-80 max-w-xs rounded bg-green-50 py-2 text-2xl font-semibold text-green-800  active:bg-red-600">
          Proof Of Work
        </button>
        {/* </Link> */}
        {/* </div> */}
        {/* <div className="max-w-sm py-2 text-2xl font-semibold text-green-800"> */}
        {/* <Link to="/about"> */}
        <button className=" mr-60 max-w-xs rounded bg-green-50 py-2 text-2xl font-semibold text-green-800  active:bg-red-600">
          About
        </button>
        {/* </Link> */}
        {/* </div> */}
        {/* <div className="max-w-sm py-2 text-2xl font-semibold text-green-800"> */}
        {/* <Link to="/contact-me"> */}
        <button className=" mr-10 max-w-xs rounded bg-green-50 py-2 text-2xl font-semibold text-green-800  active:bg-red-600">
          Contact Me
        </button>
        {/* </Link> */}
        {/* </div> */}
      </div>
      <div className="background-img">
        <img className="scale-70 h-80  min-w-full" src={mainLogo} alt=""></img>
      </div>
    </div>
  );
}

export default Header;
