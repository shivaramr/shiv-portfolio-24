import React from "react";
import { FooterDataType, footerData } from "./utils";

const Footer = () => {
  return (
    <div className="relative z-[30] pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        {footerData.map(({ Icon, heading, value }: FooterDataType) => (
          <div key={heading} className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <Icon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">{heading}</h1>
              <p className="text-[16px] w-[100%] text-white opacity-60">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          Shivaram`s portfolio as on 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
