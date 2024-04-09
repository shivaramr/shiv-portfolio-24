import React from "react";
import SkillsItem from "./SkillsItem";
import { experienceData } from "./utils";

const ExperienceAndSkill = () => {
  return (
    <div id="experiences" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Experience & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {experienceData.map(({ title, company, jobDate, data, tech }) => (
          <SkillsItem
            key={`${title}-${jobDate}`}
            title={title}
            year={jobDate}
            company={company}
            data={data}
            tech={tech}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceAndSkill;
