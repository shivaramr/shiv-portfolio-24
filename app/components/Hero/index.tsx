import React, { useState } from "react";
import Image from "next/image";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { hero, name } from "../../../public/components/data/index.json";

const Hero = () => {
  const { cvPath, intro, videoLink, heroImgPath, heroAvatarPath } = hero;
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className='h-[92vh] bg-[url("/images/banner.jpg")] mt-[12vh] bg-cover bg-center'>
      <Particle />
      <div
        id="home"
        className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center"
      >
        <div className="grid">
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I am <span className="mx-1 text-yellow-400">{name}!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">{intro}</p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black">
              <a href={cvPath} className="flex items-center space-x-2" download>
                Download CV
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </a>
            </button>
            {videoLink && (
              <button className="flex items-center space-x-2">
                <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                <p className="text-[20px] font-semibold text-white">Watch the Video</p>
              </button>
            )}
          </div>
        </div>
        <div className="w-[500px] mx-auto hidden bg-[#55e6a5] hover:bg-[#02050a] relative lg:flex items-center rounded-full h-[500px] transform transition-all duration-300 hover:scale-x-[-1] overflow-hidden">
          <Image
            src={isHovering ? heroImgPath : heroAvatarPath}
            alt="user"
            layout="fill"
            className="object-cover rounded-full hover:scale-x-[-1]"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
