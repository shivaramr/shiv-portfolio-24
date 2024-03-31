import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coder",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1500,
        "Frontend Developer",
        1500,
        "React Developer",
        1500,
        "Next Developer",
        1500,
        "Typescript Developer",
        1500,
        "Javascript Developer",
        1500,
      ]}
      //   wrapper="span"
      speed={50}
      className="text-[2rem md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextEffect;
