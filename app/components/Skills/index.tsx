import React, { useState } from "react";
import SkillChip from "./SkillChip";
import SkillCard from "./SkillCard";
import { skills } from "./utils";

// Remove pt from Line 11
// Remove h1
// Remove pt from Line 17

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]"> 
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="grid gird-cols-1 lg:grid-cols-2 w-[80%] mx-auto pt-[4rem] lg:pt-[8rem] gap-[3rem] items-center">
        <div className="grid grid-cols-2 gap-6 order-last lg:order-first h-[100%]">
          {skills.map((item, idx) => (
            <SkillChip
              key={item.key}
              title={item.title}
              index={idx}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <div className="grid">
          <SkillCard item={skills[active]}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
