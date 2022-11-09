import headshot from "../../../assets/headshot.png";

function LandingPage() {
  return (
    <div className="landing-page vh- bg-green-900">
      <div className="codys-blur">
        <h1 className="">Hi, Im Cody!</h1>
        <p>An avid golfer, fitness enthusiast, and hazy IPA conneseiur</p>
        <img
          className="my-headshot"
          src={headshot}
          alt="A picture of me!"
        ></img>
      </div>
    </div>
  );
}

export default LandingPage;
