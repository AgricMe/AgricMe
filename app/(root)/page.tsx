import React from "react";
import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import AnimationWrapper from "./AnimationWrapper";
import SecondSection from "@/components/home/secondSection";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/home/Footer";
import FourthSection from "@/components/home/FourthSection";
import NewsLetter from "@/components/home/NewsLetter";
import BackgroundBeam from "@/components/subcomponents/BackgroundBeam";
import FirstSection from "@/components/home/FirstSection";
import OfferSection from "@/components/home/OfferSection";
import Products from "@/components/home/Products";

function Home() {
  return (
    <div>
      <Nav />
      <AnimationWrapper>
        <Hero />
      </AnimationWrapper>
      <BackgroundBeam />
      <FirstSection />
      <SecondSection />
      <OfferSection />
      <Products />
      <Testimonial />
      {/* <FourthSection /> */}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
