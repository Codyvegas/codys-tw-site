import vegas from "../../assets/vegas.png";

function Footer() {
  return (
    <div className=" h-30 bg-black">
      <div className="info-container flex h-32 items-center justify-around">
        <h1 className=" text-lg text-sky-400">Las Vegas, NV</h1>
        <img
          className=" h-32"
          src={vegas}
          alt="The Best City in the World!"
        ></img>
        <h1 className=" text-lg text-sky-400">Codyjohnson2015@yahoo.com</h1>
      </div>
    </div>
  );
}

export default Footer;
