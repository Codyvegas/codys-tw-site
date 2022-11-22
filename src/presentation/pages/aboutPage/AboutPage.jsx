function About() {
  return (
    <div className="bg-slate-800">
      <div className="m-auto flex w-6/12 flex-col justify-center ">
        <div className=" m-12 my-24 rounded-3xl border-2 border-solid border-purple-700 bg-black px-12 drop-shadow-xl ">
          <h2 className=" about-card text-3xl text-purple-400 ">
            This is MY story!
          </h2>
        </div>
        <div className="about-div-style  border-cyan-600">
          <p className=" about-card	text-cyan-400 ">
            I used to sell golf carts and sling rental car insurance.
          </p>
        </div>
        <div className="about-div-style  border-emerald-600">
          <p className="about-card text-emerald-400 ">
            Now, I create functional components, style websites, and most
            importantly... git push code!
          </p>
        </div>
        <div className="about-div-style border-yellow-600">
          <p className="about-card text-yellow-400  ">
            I love working with Reactjs! I also have experience using Tailwind
            and Bootstrap. My near term goal is to expand my understanding of
            front end development and eventually move into a full stack
            position. Ultimately, I would love to learn Solidity so I can
            understand Blockchain development at a deeper level.
          </p>
        </div>
        <div className="about-div-style border-orange-600">
          <p className="about-card 	text-orange-400 ">
            When I think about my "why", I always come back to the same thing. I
            code because I know I can impact the world, and I want to leave this
            place better than I found it. I want to help drive humanity forward.
          </p>
        </div>

        <div className=" about-div-style border-red-600">
          <p className="about-card 	text-red-400  ">
            I appreciate you reading my story, if you'd like to connect, please
            add me on Linked-In or shoot me an email!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
