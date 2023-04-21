/* eslint-disable @next/next/no-img-element */
export default function TokenSection() {
  return (
    <section className="mb-10 py-20 px-10 text-white">
      <div className="">
        {" "}
        <h1 className="font-bold text-center text-5xl leading-tight token_shine">
          <span> $CHIBI</span> Tokenomics
        </h1>
        <img
          src="/img/chibiki-token-bg.png"
          alt="chibiki token"
          className="my-10 rounded-xl m-auto"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center space-y-10 lg:space-y-0 gap-5 h-52">
        <div className="text-center w-fit lg:h-56">
          <h3 className="text-xl font-semibold  uppercase  m-auto w-40 p-5 py-3   rounded-2xl -mb-4 relative z-10  bg-gold">
            utility
          </h3>
          <p className="p-5 py-8 lg:py-12 max-w-md h-full  bg-gradient-to-t from-blue-500 to-blue-800 rounded-2xl flex items-center">
            The $CHIBI token will be our main utility token in the chibikiverse
            ecosystem. this token wil be used for rewards, in-game transactions
            as well as $CHIBI -$SUI swap purchases in future
          </p>
        </div>
        <div className="text-center w-fit lg:h-56">
          <h3 className="text-xl font-semibold uppercase w-fit p-5 py-3 m-auto rounded-2xl -mb-4 relative z-10 bg-gold">
            Staking and mining
          </h3>
          <p className="p-5 py-8 max-w-md  h-full bg-gradient-to-t from-blue-500 to-blue-800 rounded-2xl  flex items-center">
            <ul className="text-left mx-10 list-decimal space-y-4">
              <li>
                $CHIBI tokens can be staked for passive reward generation.
              </li>
              <li>
                These tokens can only be bought in IDO, game or by staking.
              </li>
              <li>Missions will enable mining of $CHIBI</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
