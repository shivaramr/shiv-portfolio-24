import React from "react";

interface Props {
  item: {
    key: string;
    title: string;
    data: {
      skill: string;
      level: string;
    }[];
  };
}

const SkillCard = ({ item }: Props) => {
  const { data, title } = item;
  return (
    <div className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] h-[26rem]">
      <span>{title}</span>
      {data.map(({ skill, level }) => (
        <div className="my-[1rem] py-2" key={skill}>
          <div className="flex space-between">
            <h1 className="w-[100%] uppercase text-white text-[20px] font-bold">{skill}</h1>
            <p>{level}</p>
          </div>
          <div
            className={`h-[6px]  bg-[#55e6a5] transform transition-all ease-in-out duration-300 delay-150`}
            style={{ width: level, maxWidth: "100%", minWidth: "0" }}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
