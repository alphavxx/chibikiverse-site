/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <header className="w-screen h-screen">
      <div className="bg-hero-pattern bg-center bg-cover blur-sm h-full w-full absolute "></div>
      <div className="z-10 relative w-full">
        <div className="flex justify-between h-screen w-screen absolut items-center">
          <img src="/img/hero-left.png" alt="chibiki" className="hidden lg:block w-72 h-fit ml-24 p-4 floating" />
          <div className="h-full flex flex-col justify-between items-center m-auto">
            <div className="grow flex">
            <img
              src="/img/chibiki-logo.png"
              alt="chibiki logo"
              className="w-[25rem] m-auto justify-self-center"

            />
            </div>
            <img
              src="/img/hero-img.png"
              alt="chibikies"
              className="w-[45rem] -mb-8  py-3"
            />
        </div> 
          <img
            src="/img/hero-right.png"
            alt="chibiki"
            className="hidden lg:block md:w-96 h-fit mr-20 p-4 floating"
          />
        </div>
      </div>
    </header>
  );
}
