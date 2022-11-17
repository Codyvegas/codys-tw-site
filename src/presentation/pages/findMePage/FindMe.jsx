import linkedin from "../../../assets/Linkedin-icon.png";
import github from "../../../assets/github.png";

function FindMe() {
  return (
    <div className="bg-slate-800">
      <div className="m-auto flex w-6/12 justify-center">
        <div className="my-24 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" mt-12 mb-4 animate-pulse text-center text-3xl	text-purple-500 underline">
            Codys Code
          </h1>
          <div className="mb-12 mt-6 h-64 rounded-3xl border-4 border-solid border-y-cyan-400 border-x-purple-500 bg-slate-900 p-12 text-2xl">
            <div className=" top container flex items-center hover:animate-pulse">
              <a
                href=" https://www.linkedin.com/in/johnson-cody/"
                target="_blank"
              >
                <img src={linkedin} className="mr-2 h-14"></img>
              </a>
              <a
                className=" text-blue-400 hover:text-blue-700"
                href=" https://www.linkedin.com/in/johnson-cody/"
                target="_blank"
              >
                linkedin.com/in/johnson-cody/
              </a>{" "}
            </div>
            <br></br>
            <div className="bottom container flex items-center hover:animate-pulse">
              <a href=" https://github.com/Codyvegas/ " target="_blank">
                <img className=" mr-2 h-14 rounded" src={github}></img>
              </a>
              <a
                className=" text-blue-400 hover:text-blue-700"
                href=" https://github.com/Codyvegas/ "
                target="_blank"
              >
                github.com/Codyvegas/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMe;
