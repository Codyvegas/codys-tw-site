import herbbanner from "../../../assets/herbbanner.jpg";
import dripgod from "../../../assets/dripgod.jpg";
import customerform from "../../../assets/customerform.jpg";
import golfswing from "../../../assets/golfswing.jpg";
import patent from "../../../assets/patent.jpg";

function Proof() {
  return (
    <div className="bg-slate-800">
      <div className="proof-page-container flex bg-slate-800 ">
        <div className="m-12 mb-auto mt-24 w-1/3 justify-center rounded-2xl border-2 border-solid border-purple-700 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:shadow-2xl">
          <h1 className=" my-10 truncate text-center text-3xl text-purple-400 hover:animate-blob">
            <b>Abstract Herbs</b>
          </h1>{" "}
          <img
            className="mt-6 rounded-xl border-2 border-solid border-slate-700 brightness-150 hover:animate-pulse "
            src={herbbanner}
          ></img>
          <div className="my-6">
            <p className="text-2xl text-white">
              This was my first time building a website using Reactjs. Its safe
              to say I love the way React works. <br></br>
              <br></br>
              Abstract Herbs is my favorite NFT project built on the Ethereum
              Blockchain, and the creator is from Berlin!
              <br></br>
              <br></br>We connected on Twitter and he gave me the chance to do
              the website for the project! This site is going to be in
              production very soon...
            </p>
          </div>
        </div>
        <div className="my-12 mt-24 mb-auto w-1/3 justify-center rounded-2xl border-2 border-solid border-orange-500 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:shadow-2xl  ">
          <h1 className="my-10 truncate text-center text-3xl text-red-300 outline-white hover:animate-blob">
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
              branching. <br></br>
              <br></br>Secondly, it was amazing to implement a passion (golf) of
              mine into a project! Who knows, this business may actually go live
              one day.
            </p>
            <img
              src={customerform}
              className=" mt-8 rounded-xl border-2 border-solid border-black hover:animate-pulse"
            ></img>
          </div>
        </div>
        <div className="m-12 mt-24 w-1/3 justify-center rounded-2xl border-2 border-solid border-blue-600 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:shadow-2xl">
          <h1 className="my-10 mb-auto truncate text-center text-3xl text-cyan-400 hover:animate-blob">
            <b>My Portfolio Website</b>
          </h1>{" "}
          <img
            src={golfswing}
            className="mt-8 rounded-xl border-2 border-solid border-blue-400 shadow-2xl brightness-150 hue-rotate-15 hover:animate-pulse"
          ></img>
          <div className="container my-6">
            <p className="text-2xl text-white">
              My personal website incorporates a brand new framework, Tailwind
              CSS! This was a bit of a learning curve but once I spent some time
              with it, the framework speaks for itself.
              <br></br>
              <br></br>
              My personal opinion is that you should learn vanilla CSS first,
              make sure your foundational principles are there, and then try
              something like Tailwind.
              <br></br>
              <br></br>
              In order to get these websites drawn up, I decided to use a Figma
              design. This allows me to stay in line with the designers work and
              also my own ideas.
            </p>
            <img
              className="my-6 scale-90 rounded-xl brightness-150 hover:animate-pulse"
              src={patent}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proof;
