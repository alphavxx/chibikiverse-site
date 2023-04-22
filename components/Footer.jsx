/* eslint-disable @next/next/no-img-element */
import { FcLike } from "react-icons/fc";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="p-8 text-lg font-light">
      <div className="flex flex-col lg:flex-row lg:justify-evenly gap-5">
        <div className="lg:w-96">
          <img
            src="/img/chibiki-logo-2.svg"
            alt="chibiki logo"
            className="w-44 mx-auto mb-10"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Chibikiverse</h3>
          <ul className="leading-loose [&>a]:cursor-pointer [&>a]:block ">
            <a className="hover:underline" href="#home">Home</a>
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#roadmap">Roadmap</a>
            <a className="hover:underline" href="#team">Team</a>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Market</h3>
          <ul className="leading-loose [&>a]:cursor-pointer [&>a]:block">
            <a className="hover:underline">Mint NFTs</a>
            <a className="hover:underline">$CHIBIKI</a>
            <a className="hover:underline">Buy & Sell</a>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <ul className="leading-loose [&>a]:cursor-pointer [&>a]:block ">
            <a className="hover:underline" href="https://twitter.com/Chibikiverse" target="_blank">Twitter</a>
            <a className="hover:underline" href="https://discord.com/invite/hBEKvqvFfs"  target="_blank">Discord</a>
            <a className="hover:underline"  target="_blank" href="">Email</a>
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
