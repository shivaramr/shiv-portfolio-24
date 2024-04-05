"use client";

import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ExperienceAndSkill from "./components/ExpeienceAndSkill";
import RevsAndRecmnds from "./components/RevsAndRecmnds";
import MobileNav from "./components/Navbar/MobileNav";
import ContactUs from "./components/ContactUs";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="font-primary">
      <MobileNav nav={nav} closeNav={closeNav} />
      <NavBar openNav={openNav} />
      <Hero />
      <div className="relative z-[30]">
        <AboutMe />
        <MyServices />
        <ExperienceAndSkill />
        <Skills />
        <Projects />
        <RevsAndRecmnds />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
