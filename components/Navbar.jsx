/* eslint-disable @next/next/no-img-element */
import { CgMenuRightAlt } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="w-screen py-4 lg:py-6 px-8  font-bold text-white z-50 fixed">
      <div className="h-12 lg:h-16  flex justify-between lg:justify-around">
        <img src="/img/chibiki-logo-2.svg" alt="Chibiki Logo" />
        <CgMenuRightAlt
          className="self-center text-white cursor-pointer  lg:hidden"
          size={30}
        />
        <div className="self-center hidden lg:flex space-x-8 uppercase">
          <a
            href="#home"
            className="hover:scale-125 hover:rotate-2 transition-transform ease-in-out duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:scale-125 hover:rotate-2 transition-transform ease-in-out duration-300"
          >
            Chibiki Run
          </a>
          <a
            href="#roundmap"
            className="hover:scale-125 hover:rotate-2 transition-transform ease-in-out duration-300"
          >
            Road Map
          </a>
          <a
            href="#about"
            className="hover:scale-125 hover:rotate-2 transition-transform ease-in-out duration-300"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
