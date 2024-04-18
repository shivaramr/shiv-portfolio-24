import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useProfileContext } from "@/app/contexts/context";

const MobileNav = () => {
  const { state, dispatch } = useProfileContext();
  const { nav } = state;
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const closeNav = () => dispatch({ type: "CLOSE_NAV" });

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <a href="#home" onClick={closeNav} className="nav-link-mobile">
          HOME
        </a>
        <a href="#about" onClick={closeNav} className="nav-link-mobile">
          ABOUT
        </a>
        <a href="#services" onClick={closeNav} className="nav-link-mobile">
          SERVICES
        </a>
        <a href="#experiences" onClick={closeNav} className="nav-link">
          EXPERIENCE
        </a>
        <a href="#projects" onClick={closeNav} className="nav-link-mobile">
          PROJECT
        </a>
        <a href="#contact" onClick={closeNav} className="nav-link-mobile">
          CONTACT
        </a>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
