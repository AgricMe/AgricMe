"use client"
import React from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { HoverEffect } from '../aceternity-sections/CardHoverEffect'
const Testing = () => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({target:ref, offset:["0, 1", "1.33, 1"]})
    const scaleProgress  = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress  = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const offers = [
        {
            title: "Social Networking and Collaboration",
            description: "Empowering farmers by offering a social space to network.",
            link: "#"
        },
        {
            title: "Market Access and Authenticity",
            description: "Enabling market access for local farmers.",
            link: "#"
        },
        {
            title: "Supportive Community",
            description: "Building a supportive community where knowledge-sharing, ethical practices, and economic growth thrive.",
            link: "#"
        },
        {
            title: "Offer one",
            description: "Description",
            link: "#"
        },
        {
            title: "Offer one",
            description: "Description",
            link: "#"
        },
        {
            title: "Offer one",
            description: "Description",
            link: "#"
        },
    ]

  return (
    <div className='third-sec'>
        <motion.div className="third-sec-cont" ref={ref} style={{scale:scaleProgress, opacity:opacityProgress}}>
            <div className='offers'>
                <div>
                    <h1 className='text-[50px] font-bold'>What we Offer</h1>
                    <p>Better Agriculture for Better Future</p>
                </div>
            </div>
            <div className='offers-content'>
                <div className='offers-content-cont'>
                    <HoverEffect items={offers}/>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Testing

