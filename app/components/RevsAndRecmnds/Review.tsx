import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

interface Props {
  image: string;
  name: string;
  role: string;
  desc: string;
  starRating: number;
}

const Review = ({ image, name, role, desc, starRating }: Props) => {
  const stars = Array.from({ length: Math.round(starRating) }, (_, index) => index + 1);
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="mx-auto mb-[2rem] rounded-full object-contain"
      />
      <div className="flex items-center mx-auto">
        {stars.map((_, idx) => (
          <StarIcon key={idx} className="w-[2rem] h-[2rem] text-yellow-500" />
        ))}
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">{role}</p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">{desc}</p>
    </div>
  );
};

export default Review;
