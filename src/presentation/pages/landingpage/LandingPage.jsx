import headshot from "../../../assets/headshot.png";

function LandingPage() {
  return (
    <div className="landing-page vh- bg-green-900">
      <div className="codys-blur">
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
