import herbbanner from "../../../assets/herbbanner.jpg";
import dripgod from "../../../assets/dripgod.jpg";
import customerform from "../../../assets/customerform.jpg";
import golfswing from "../../../assets/golfswing.jpg";

function Proof() {
  return (
    <div className="bg-slate-800">
      <div className="proof-page-container flex bg-slate-800">
        <div className=" m-12  w-1/3 justify-center rounded-2xl border-2 border-solid border-purple-700 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:shadow-2xl">
          <h1 className="my-6 text-center text-2xl text-purple-400">
            <b>Abstract Herbs</b>
          </h1>{" "}
          <img
            className="mt-6 rounded-xl border-2 border-solid border-slate-700 hover:animate-pulse "
            src={herbbanner}
          ></img>
          <div className="container my-6">
            <p className="text-2xl text-white">
              This was my first time building a website using Reactjs. Its safe
              to say I love the way React works. Abstract Herbs is my favorite
              NFT project built on the Ethereum Blockchain, and the creator is
              from Berlin! We connected on Twitter and he gave me the chance to
              do the website for the project! This site is going to be in
              production very soon...
            </p>
          </div>
        </div>
        <div className=" my-12 mb-auto w-1/3 justify-center rounded-2xl border-2 border-solid border-orange-500 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:shadow-2xl  ">
          <h1 className="my-6 text-center text-2xl text-red-300">
            <b>Grip Gods</b>
          </h1>{" "}
          <img
            src={dripgod}
            className="mt-8 rounded-xl hover:animate-pulse"
          ></img>
          <div className="container my-8">
            <p className="text-2xl text-white">
              A dual purpose project! For one, its the first time working with
              another developer on a website and I learned a ton about mr's and
              branching. Secondly, it was amazing to implement a passion (golf)
              of mine into a project! Who knows, this business may actually go
              live one day.
            </p>
            <img
              src={customerform}
              className=" mt-8 rounded-xl border-2 border-solid border-black hover:animate-pulse"
            ></img>
          </div>
        </div>
        <div className="m-12 mb-auto w-1/3 justify-center rounded-2xl border-2 border-solid border-blue-600 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:shadow-2xl">
          <h1 className="my-6 text-center text-2xl text-cyan-400">
            <b>My Portfolio Website</b>
          </h1>{" "}
          <img
            src={golfswing}
            className="mt-8 rounded-xl border-2 border-solid border-blue-400 shadow-2xl hover:animate-pulse"
          ></img>
          <div className="container my-6">
            <p className="text-2xl text-white">
              My personal website incorporates a brand new framework, Tailwind
              CSS! This was a bit of a learning curve but once I spent some time
              with it, the framework speaks for itself. My personal opinion is
              that you should learn vanilla CSS first, make sure your
              foundational principles are there, and then try something like
              Tailwind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proof;
