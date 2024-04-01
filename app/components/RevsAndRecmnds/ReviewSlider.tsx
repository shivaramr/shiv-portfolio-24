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
      <Review
        image="/images/v1.jpg"
        name="Venkatesh Jalendiran"
        role="Development Manager"
        desc="For the past nine months, Shivaram has been an invaluable asset to our team, serving as a highly skilled front-end developer. His intelligence and talent extend beyond technical proficiency, as he consistently demonstrates a thorough analysis of project requirements. Shivaram goes above and beyond by providing detailed technical feasibility studies and thoughtful recommendations. As a collaborative team player, he contributes significantly to our overall success through his unwavering dedication and hard work. I wholeheartedly endorse Shivaram as an integral member of any team and recommend him without reservation."
      />
      <Review
        image="/images/l1.jpg"
        name="Lachlan Aldred"
        role="Former CTO"
        desc="R Shivaram, served as a React Developer under my supervision for nearly 11 months. During that time he delivered some exceptional, innovative user interfaces for the new product being developed. Shivaram was productive and efficient, had a positive mindset and worked well with other team members. His commitment to the collaborative process makes him an asset to any team. In our fast-paced environment, Shivaram consistently delivered projects on time without compromising on quality. I wholeheartedly recommend R Shivaram for any React Developer position. Please feel free to reach out if you have any questions or need further information."
      />
      <Review
        image="/images/m2.jpg"
        name="Mathew Falia"
        role="CSPO Business Analyst"
        desc="I am delighted to recommend R Shivaram as an exceptional front-end developer. Working closely with him for several months, I've admired his dedication, expertise, and professionalism. R Shivaram excels in HTML, CSS, JavaScript, and various front-end frameworks. His profound understanding of responsive design and user experience principles is reflected in the superior websites and web applications he delivers. Notably, his adept problem-solving skills, attention to detail, and collaborative nature set him apart. R Shivaram consistently meets deadlines and exceeds expectations, showcasing his commitment to excellence. I confidently endorse him for any front-end development role or project. (Concised original)"
      />
      <Review
        image="/images/m1.jpg"
        name="Marshall Cheneval"
        role="Manager - Customer Success"
        desc="Shivaram has been instrumental within our current development team. He always produces high quality work within a quick timescale and drives solution based conversations on the best way to achieve outcomes. He is an asset to any team."
      />
    </Carousel>
  );
};

export default ReviewSlider;
