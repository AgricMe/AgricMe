import React from "react";
import Nav from "./Nav";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import Hero from "./Hero";
import FirstSection from "./FirstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import Products from "./Products";
import Testimonial from "./Testimonial";
import FourthSection from "./FourthSection";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <AnimationWrapper>
        <Hero />
      </AnimationWrapper>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Products />
      <Testimonial />
      <FourthSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
