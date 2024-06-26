/* eslint-disable @next/next/no-img-element */
export default function TokenSection() {
  return (
    <section className="mb-10 py-20 px-10 text-white">
      <div className="">
        <h1 className="font-bold text-center text-5xl leading-tight token_shine">
          <span> $CHIBI</span> Tokenomics
        </h1>
        <img
          src="/img/chibiki-token-bg.jpg"
          alt="chibiki token"
          className="my-10 rounded-xl m-auto"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-5 space-y-10 lg:space-y-0 ">
        <div className="text-center w-fit lg:h-56">
          <h3 className="text-4xl uppercase font-black mb-6  token_shine animitaion_rotate">
            utility
          </h3>
          <p className="p-5 py-8 lg:py-12 max-w-md h-full  bg-gold rounded-2xl flex items-center">
            The $CHIBI token will be our main utility token in the chibikiverse
            ecosystem. this token wil be used for rewards, in-game transactions
            as well as $CHIBI -$SUI swap purchases in future
          </p>
        </div>
        <div className="text-center w-fit lg:h-56">
          <h3 className="text-4xl uppercase font-black mb-6  token_shine animitaion_rotate">
            Staking and mining
          </h3>
          <div className="p-5 py-8 max-w-md  h-full bg-gold rounded-2xl  flex items-center">
            <ul className="text-left mx-10 list-decimal space-y-4">
              <li>
                $CHIBI tokens can be staked for passive reward generation.
              </li>
              <li>
                These tokens can only be bought in IDO, game or by staking.
              </li>
              <li>Missions will enable mining of $CHIBI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
