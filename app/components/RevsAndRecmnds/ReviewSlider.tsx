import React from "react";
import Review from "./Review";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
      <Review image="/images/c1.jpg" name="Einstein" role="Web Developer" />
      <Review image="/images/c2.jpg" name="Newton" role="Manager" />
      <Review image="/images/c1.jpg" name="Gilbert" role="Lead" />
      <Review image="/images/c2.jpg" name="Thomas" role="Designer" />
    </Carousel>
  );
};

export default ReviewSlider;
