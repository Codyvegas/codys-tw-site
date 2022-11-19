import herbbanner from "../../../assets/herbbanner.jpg";

function Proof() {
  return (
    <div className="bg-slate-800">
      <div className="proof-page-container flex bg-slate-800">
        <div className=" m-12 w-1/3 justify-center rounded-2xl border-2 border-solid border-purple-600 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:bg-slate-900 hover:shadow-2xl">
          <h1 className="my-4 text-center text-2xl text-red-500">
            <b>Abstract Herbs</b>
          </h1>{" "}
          <img className="mt-6" src={herbbanner}></img>
          <div className="container my-6">
            <p className="text-2xl text-white">
              This was my very first website built with Reactjs. Abstract Herbs
              is my favorite NFT project built on the Ethereum Blockchain, and
              the creator is from Berlin! We connected on Twitter and he gave me
              the chance to do the website for the project! This site is going
              to be in production very soon...
            </p>
          </div>
        </div>
        <div className=" m-12 w-1/3 justify-center rounded-2xl border-2 border-solid border-purple-600 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:bg-slate-900 hover:shadow-2xl">
          <h1 className="my-4 text-center text-2xl text-red-500">
            <b>Grip Gods</b>
          </h1>{" "}
          <img className="mt-6" src={herbbanner}></img>
          <div className="container my-6">
            <p className="text-2xl text-white">
              This was my very first website built with Reactjs. Abstract Herbs
              is my favorite NFT project built on the Ethereum Blockchain, and
              the creator is from Berlin! We connected on Twitter and he gave me
              the chance to do the website for the project! This site is going
              to be in production very soon...
            </p>
          </div>
        </div>
        <div className=" m-12 w-1/3 justify-center rounded-2xl border-2 border-solid border-purple-600 bg-slate-900 px-12 text-xl text-white drop-shadow-xl hover:bg-slate-900 hover:shadow-2xl">
          <h1 className="my-4 text-center text-2xl text-white">
            <b>My Portfolio Website</b>
          </h1>{" "}
          <img className="mt-6"></img>
          <div className="container my-6">
            <p className="text-2xl text-white">
              My website incorporates a new framework, Tailwind CSS! This was a
              bit of a learning curve and I can definitely see advantages and
              disadvantages of using this product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proof;
