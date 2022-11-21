function About() {
  return (
    <div className="bg-slate-800">
      <div className="m-auto flex w-6/12 flex-col justify-center ">
        <div className="m-12 mt-24 transform rounded-3xl border-2 border-solid border-purple-700 bg-black px-12 drop-shadow-xl ">
          <h2 className=" animate-pulse p-12 text-center text-3xl text-purple-500 underline blur-sm duration-500 ease-in-out hover:animate-none hover:blur-0">
            This is MY story!
          </h2>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-cyan-600 bg-black px-12 drop-shadow-xl">
          <p className=" animate-pulse p-12 text-center text-3xl	text-cyan-400 blur-sm duration-500 ease-in-out hover:animate-none hover:blur-0">
            I used to sell golf carts and sling rental car insurance.
          </p>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-emerald-600 bg-black px-12 text-center drop-shadow-xl">
          <p className="animate-pulse p-12 text-3xl	text-emerald-400 blur-sm duration-500 ease-in-out hover:animate-none hover:blur-0">
            Now, I create functional components, style websites, and most
            importantly... git push code!
          </p>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-yellow-600 bg-black px-12 drop-shadow-xl">
          <p className=" animate-pulse p-12 text-center text-3xl	text-yellow-400  blur-sm duration-500 ease-in-out hover:animate-none hover:blur-0">
            I never thought I would be a developer, which makes this entire
            journey even more exciting and fulfilling for me.
          </p>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-orange-600 bg-black px-12 drop-shadow-xl">
          <p className=" animate-pulse p-12 text-center text-3xl	text-orange-500  blur-sm duration-500 ease-in-out hover:animate-none hover:blur-0">
            I started learning code because I realized I could impact the world.
            I took a leap of faith, worked hard, and stayed in it. <br></br>And
            now you're on my website, reading my story.
          </p>
        </div>

        <div className="m-12 mb-24 rounded-3xl border-2 border-solid border-red-600 bg-black px-12 drop-shadow-xl">
          <p className="animate-pulse p-12 text-center text-3xl	text-red-500  blur-sm duration-500 ease-in-out hover:animate-none hover:blur-0">
            Funny enough, when I was growing up, some people would call me
            Codycode... <br></br>Life really comes full circle doesnt it?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
