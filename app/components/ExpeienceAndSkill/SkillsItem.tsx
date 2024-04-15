import React from "react";

interface Props {
  title: string;
  year: string;
  data: string;
  company: string;
  tech: string;
}

const SkillsItem = ({ title, year, company, data, tech }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold text-[20px] sm:text-[25px] md:text-[340x] text-white">
        {title}
      </h1>
      <p className="text-white font-normal mb-[1rem] w-[100%] text-[17px] opacity-78">{company}</p>
      <p className="text-[#aaaaaa] font-normal mb-[1rem] w-[100%] text-[17px] opacity-80">{data}</p>
      <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80">
        <span className="font-bold me-1">Technologies Used:</span>
        {tech}
      </p>
    </div>
  );
};

export default SkillsItem;
