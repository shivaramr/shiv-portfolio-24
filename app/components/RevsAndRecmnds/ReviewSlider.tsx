import React from "react";
import Review from "./Review";
import Carousel from "react-multi-carousel";
import { RevType, responsive, revs } from "./utils";
import "react-multi-carousel/lib/styles.css";

const ReviewSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {revs.map(({ imgPath, name, desc, role, starRating }: RevType) => (
        <Review key={`${imgPath}-${name}`} image={imgPath} name={name} role={role} desc={desc} starRating={starRating} />
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
