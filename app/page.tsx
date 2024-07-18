import React from 'react'
import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'
import OldFirstSection from '@/components/home/OldFirstSection'
import AnimationWrapper from './AnimationWrapper'
import ThirdSection from '@/components/home/thirdSection'
import SecondSection from '@/components/home/secondSection'
import Products from '@/components/home/Products'
import Testimonial from '@/components/home/Testimonial'
import Footer from '@/components/home/Footer'
import FourthSection from '@/components/home/FourthSection'
import NewsLetter from '@/components/home/NewsLetter'
import BackgroundBeam from '@/components/home/BackgroundBeam'
import FirstSection from '@/components/home/FirstSection'

function Home() {
  return (
    <div>
      <Nav />
      <AnimationWrapper>
        <Hero />
      </AnimationWrapper>
      <BackgroundBeam/>
      <FirstSection/>
      {/* <OldFirstSection /> */}
      <SecondSection />
      <ThirdSection />
      <Products />
      <Testimonial />
      <FourthSection />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home