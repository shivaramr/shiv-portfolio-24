import { TypeAnimation } from "react-type-animation";
import { roles } from "./utils";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={roles}
      speed={50}
      className="text-[2rem md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextEffect;
