import headshot from "../../../assets/headshot.png";

function LandingPage() {
  return (
    <div className="landing-page bg-slate-700">
      <div className="m-auto flex w-6/12 flex-col	">
        <div className="my-24	 rounded-3xl border-2 border-solid border-cyan-600 bg-black/50 ">
          <h1 className="mt-12 mb-4 text-center text-3xl	text-purple-500">
            Hi, Im Cody!
          </h1>
          <p className="text-center text-2xl text-cyan-400">
            An avid golfer, fitness enthusiast, and Hazy IPA connoisseur!{" "}
            <br></br>I'm excited to show you what ive been working on!
          </p>
          <img
            className="ml-20 mb-12 mt-6  rounded-3xl border-2	border-solid border-y-cyan-400 border-x-purple-500 bg-gradient-to-r from-cyan-400 to-blue-800"
            src={headshot}
            alt="A picture of me!"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
