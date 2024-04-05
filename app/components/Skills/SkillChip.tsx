import React from "react";

interface Props {
  title: string;
  index: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const SkillChip = ({ title, index, active, setActive }: Props) => {
  const style =
    index === active
      ? "text-black bg-[#55e6a5] "
      : "text-[#55e6a5] hover:bg-[#55e6a5] hover:text-black";
  return (
    <button
      className={`px-[2rem] h-[6rem] font-bold text-[18px] border-[2px] border-[#55e6a5] lg:h-auto transition-all duration-200 ${style}`}
      onClick={() => setActive(index)}
    >
      {title}
    </button>
  );
};

export default SkillChip;
