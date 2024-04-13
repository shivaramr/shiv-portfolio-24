import React from "react";
import Image from "next/image";
import { Project, projects } from "./utils";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#03050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projects.map(({ imgPath, code, demo, video, aosDelay }: Project) => (
          <div data-aos="fade-up" className="h-fit group" key={`${imgPath}-${code}`} data-aos-delay={`${aosDelay}`}>
            <div className="relative transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Image src={imgPath} alt="portfolio" layout="fill" className="object-contain" />
              <div className="absolute h-full w-full bg-black/70 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white gap-[2rem]">
                {code && (
                  <button className="py-[0.5rem] px-[1rem] border-[1px] border-[#55e6a5] text-[#55e6a5] hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 text-[18px] font-bold uppercase">
                    <a target="_blank" href={code}>
                      CODE
                    </a>
                  </button>
                )}
                {demo && (
                  <button className="py-[0.5rem] px-[1rem] border-[1px] border-[#55e6a5] text-[#55e6a5] hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 text-[18px] font-bold uppercase">
                    <a target="_blank" href={demo}>
                      DEMO
                    </a>
                  </button>
                )}
                {video && (
                  <button className="py-[0.5rem] px-[1rem] border-[1px] border-[#55e6a5] text-[#55e6a5] hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 text-[18px] font-bold uppercase">
                    <a target="_blank" href={video}>
                      VIDEO
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
