function About() {
  return (
    <div className="bg-slate-800">
      <div className="m-auto flex w-6/12 flex-col justify-center ">
        <div className="m-12 mt-24 transform rounded-3xl border-2 border-solid border-purple-700 bg-black px-12 text-center drop-shadow-xl ">
          <h2 className=" animate-pulse p-12  text-3xl text-purple-400 blur-sm duration-100 ease-in-out hover:animate-none hover:blur-0">
            This is MY story!
          </h2>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-cyan-600 bg-black px-12 text-center drop-shadow-xl">
          <p className=" animate-pulse p-12  text-3xl	text-cyan-400 blur-sm duration-100 ease-in-out hover:animate-none hover:blur-0">
            I used to sell golf carts and sling rental car insurance.
          </p>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-emerald-600 bg-black px-12 text-center drop-shadow-xl">
          <p className="animate-pulse p-12 text-3xl	text-emerald-400 blur-sm duration-100 ease-in-out hover:animate-none hover:blur-0">
            Now, I create functional components, style websites, and most
            importantly... git push code!
          </p>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-yellow-600 bg-black px-12 text-center drop-shadow-xl">
          <p className=" animate-pulse p-12  text-3xl	text-yellow-400  blur-sm duration-100 ease-in-out hover:animate-none hover:blur-0">
            I love working with Reactjs! I also have experience using Tailwind
            and Bootstrap. My near term goal is to expand my understanding of
            front end development and eventually move into a full stack
            position. Ultimately, I would love to learn Solidity so I can
            understand Blockchain development at a deeper level.
          </p>
        </div>
        <div className="m-12 rounded-3xl border-2 border-solid border-orange-600 bg-black px-12 text-center drop-shadow-xl">
          <p className=" animate-pulse p-12  text-3xl	text-orange-400  blur-sm duration-100 ease-in-out hover:animate-none hover:blur-0">
            When I think about my "why", I always come back to the same thing. I
            code because I know I can impact the world, and I want to leave this
            place better than I found it. I want to help drive humanity forward.
          </p>
        </div>

        <div className="m-12 mb-24 rounded-3xl border-2 border-solid border-red-600 bg-black px-12 drop-shadow-xl">
          <p className="animate-pulse p-12 text-center text-3xl	text-red-400  blur-sm duration-100 ease-in-out hover:animate-none hover:blur-0">
            I appreciate you reading my story, if you'd like to connect, please
            add me on Linked-In or shoot me an email!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
