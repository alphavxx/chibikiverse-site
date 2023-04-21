/* eslint-disable @next/next/no-img-element */
export default function Welcome() {
  return (
    <section className="py-24 px-10 text-white ">
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-10 mb-20">
        <div className="chibiki_left w-ful md:w-1/2  text-center space-y-8">
          <div className="chibiki_text text-center space-y-8">
            <h1 className="font-bold text-5xl leading-10 ">
              Welcome to the <br /> world of Chibikiverse
            </h1>
            <p>
              The Most Cutest and Strongest Anime style NFT collection on SUI
              with multiple utilities backed by the NFT and token.
            </p>
          </div>
          <div className="chibiki_btn flex justify-around">
            <a className="py-3 px-6 w-40 bg-blue-500 rounded-full" href="#">
              Twitter
            </a>
            <a
              className="py-3 px-6 w-40 border-2 border-blue-500 rounded-full"
              href="#"
            >
              Discord
            </a>
          </div>
        </div>
        <div className="chibiki_right m-auto">
          <img
            src="/img/welcome-img-2.png"
            alt="chibiki"
            className="w-96 rounded-2xl"
          />
        </div>
      </div>

      {/* section  */}
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center md:space-x-10 space-y-10 ">
        <div className="chibiki_left w-ful md:w-1/2  text-center space-y-8">
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
            <ul className="space-y-5">
              <li>
                <h2 className="font-semibold uppercase italic mb-2 bg-shine">Chibiki Run</h2>
                <p>
                An Infinite Runner Mini game with more enemies and obstacles. Let’s see who scores the highest
                </p>
              </li>
              <li>
                <h2 className="font-semibold uppercase italic mb-2 bg-shine">Chibikis - Origin</h2>
                <p>
                A Platformer game (Metroidvania style) set in a dystopian world thats different from Earth’s reality.
                </p>
              </li>
            </ul>
          </div>
          <div className="chibiki_btn flex justify-around">
            <a
              className="py-3 px-6 w-40 rounded-full bg-green-500 hover:scale-110 transition-all active:scale-90 hover:-rotate-3"
              href=""
            >
              Play Now
            </a>
          </div>
        </div>
        <div className="chibiki_right m-auto">
          <img
            src="/img/welcome-img.png"
            alt="chibiki"
            className="w-96 rounded-2xl mb-12"
          />
        </div>
      </div>
    </section>
  );
}
