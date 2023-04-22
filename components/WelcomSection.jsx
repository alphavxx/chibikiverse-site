/* eslint-disable @next/next/no-img-element */
export default function Welcome() {
  return (
    <section className="py-24 px-10 text-white flex flex-col items-center" id="about">
      <div className="container flex flex-col md:flex-row justify-around items-center md:space-x-10 space-y-10 mb-20 ">
        <div className="w-full max-w-lg h-full flex flex-col justify-evenly text-center space-y-8 ">
          <div className="chibiki_text text-center space-y-8 md:space-x-8">
            <h1 className="font-bold text-5xl leading-10 md:leading-tight ">
              Welcome to the world of Chibikiverse
            </h1>
            <p className="md:text-xl md:max-w-md md:py-4">
              The Most Cutest and Strongest Anime style NFT collection on SUI
              with multiple utilities backed by the NFT and token.
            </p>
          </div>
          <div className="chibiki_btn flex flex-col md:flex-row justify-around md:justify-center md:gap-10 items-center">
            <a
              className="py-3 px-6 mb-5 w-40 bg-blue-500 rounded-full  hover:scale-110 transition-all active:scale-90 hover:-rotate-3"
              href="https://twitter.com/Chibikiverse"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="py-3 px-6  mb-5 w-40 border-2 border-blue-500 rounded-full  hover:bg-blue-500 transition-all active:scale-90"
              href="https://discord.com/invite/hBEKvqvFfs"
              target="_blank"
            >
              Discord
            </a>
          </div>
        </div>
        <div className="chibiki_right m-auto">
          <img
            src="/img/welcome-img-2.jpg"
            alt="chibiki"
            className="w-96 rounded-2xl"
          />
        </div>
      </div>

      {/* section  */}
      <div className="container flex flex-col-reverse md:flex-row-reverse items-center justify-around space-y-10 md:space-y-0 md:space-x-10">
        <div className="chibiki_left w-full md:w-[40rem]   text-center space-y-8">
          <div className="chibiki_text text-center space-y-8">
            <h2 className="text-4xl uppercase font-black -mb-3 -rotate-3 bg-shine">
              gaming
            </h2>

            <h1
              className="font-bold text-5xl leading-tight	
 "
            >
              Taking Gaming to the Next Level
            </h1>
            <ul className="space-y-5 md:flex md:space-y-0 md:gap-10 md:px-10">
              <li>
                <h2 className="font-semibold uppercase italic mb-2 bg-shine">
                  Chibiki Run
                </h2>
                <p>
                  An Infinite Runner Mini game with more enemies and obstacles.
                  Let’s see who scores the highest
                </p>
              </li>
              <li>
                <h2 className="font-semibold uppercase italic mb-2 bg-shine">
                  Chibikis - Origin
                </h2>
                <p>
                  A Platformer game (Metroidvania style) set in a dystopian
                  world thats different from Earth’s reality.
                </p>
              </li>
            </ul>
          </div>
          <div className="chibiki_btn flex justify-around">
            <a
              className="py-3 px-6 w-40 rounded-full bg-green-500 hover:scale-110 transition-all active:scale-90 hover:-rotate-3"
              href=""
            >
              Coming Soon...
            </a>
          </div>
        </div>
        <div className="chibiki_right m-auto  ">
          <img
            src="/img/welcome-img.jpg"
            alt="chibiki"
            className="w-96 md:w-[32rem] rounded-2xl mb-12"
          />
        </div>
      </div>
    </section>
  );
}
