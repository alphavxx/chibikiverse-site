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
            <h1
              className="font-bold text-5xl leading-tight	
 "
            >
              Taking Gaming to the Next Level
            </h1>
            <p>
              The Most Cutest and Strongest Anime style NFT collection on SUI
              with multiple utilities backed by the NFT and token.
            </p>
          </div>
          <div className="chibiki_btn flex justify-around">
            <a
              className="py-3 px-6 w-40 rounded-full bg-green-500 hover:scale-110 transition-all active:scale-90"
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
