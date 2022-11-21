import vegas from "../../assets/vegas.png";

function Footer() {
  return (
    <div className=" h-30 bottom-0 bg-black">
      <div className="info-container flex h-32 items-center justify-around">
        <img
          className="ml-12 flex h-32 animate-pulse "
          src={vegas}
          alt="The Best City in the World!"
        ></img>
        <p className=" text-2xl text-sky-400">Codyjohnson2015@yahoo.com</p>
      </div>
    </div>
  );
}

export default Footer;
