/* eslint-disable @next/next/no-img-element */
import { FcLike } from "react-icons/fc";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="p-8 text-lg font-light">
      <div className="flex flex-col lg:flex-row lg:justify-evenly gap-5">
        <div className="lg:w-96">
          <img
            src="/img/chibiki-logo.png"
            alt="chibiki logo"
            className="w-44 mx-auto mb-10"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Chibikiverse</h3>
          <ul className="leading-loose [&>li]:cursor-pointer ">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About</li>
            <li className="hover:underline">Roadmap</li>
            <li className="hover:underline">Team</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Market</h3>
          <ul className="leading-loose [&>li]:cursor-pointer">
            <li className="hover:underline">Mint NFTs</li>
            <li className="hover:underline">$CHIBIKI</li>
            <li className="hover:underline">Buy & Sell</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <ul className="leading-loose [&>li]:cursor-pointer ">
            <li className="hover:underline">Twitter</li>
            <li className="hover:underline">Discord</li>
            <li className="hover:underline">Email</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center items-center gap-2">
        Made With <FcLike className="inline" /> By Chibikies{" "}
        <AiOutlineCopyrightCircle className="inline" />
      </div>
    </footer>
  );
}
