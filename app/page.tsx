import React from 'react'
import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'
import FirstSection from '@/components/home/FirstSection'
import AnimationWrapper from './AnimationWrapper'
import ThirdSection from '@/components/home/thirdSection'
import SecondSection from '@/components/home/secondSection'

function Home() {
  return (
    <div>
      <Nav />
      <AnimationWrapper>
        <Hero />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </AnimationWrapper>
    </div>
  )
}

export default Home