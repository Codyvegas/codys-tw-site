import raiders from "../../../assets/raiders.png";

function About() {
  return (
    <div className="bg-slate-800">
      <div className="6meboxes m-auto flex w-6/12 flex-col justify-center">
        <div className="in m-12 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" z-10 animate-pulse p-12 text-center text-3xl	text-purple-500 underline">
            This is ME!
          </h1>
          <img className="scale-50" src={raiders}></img>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" animate-pulse p-12 text-center text-3xl	text-cyan-400 underline">
            This is ME!
          </h1>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" animate-pulse p-12 text-center text-3xl	text-yellow-500 underline">
            This is ME!
          </h1>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" animate-pulse p-12 text-center text-3xl	text-emerald-400 underline">
            This is ME!
          </h1>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" animate-pulse p-12 text-center text-3xl	text-red-500 underline">
            This is ME!
          </h1>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-slate-600 bg-black px-12 drop-shadow-xl">
          <h1 className=" animate-pulse p-12 text-center text-3xl	text-pink-500 underline">
            This is ME!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
