import React from 'react'
import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'
import FirstSection from '@/components/home/FirstSection'
import AnimationWrapper from './AnimationWrapper'
import ThirdSection from '@/components/home/thirdSection'
import SecondSection from '@/components/home/secondSection'
import Products from '@/components/home/Products'
import FourthSection from '@/components/home/FourthSection'
import Footer from '@/components/home/Footer'

function Home() {
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
      <FourthSection/>
      <Footer />
    </div>
  )
}

export default Home