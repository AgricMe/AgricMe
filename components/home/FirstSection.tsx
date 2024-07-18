import Image from 'next/image'
import React from 'react'
import { RiCommunityFill } from "react-icons/ri";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GiTrade } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";

const FirstSection = () => {
    return (
        <div className='first-sec relative'>
            <div className='first-sec-cont'>
                 <section>
                    <Image
                        src="/component-images/about-us-img.jpeg"
                        alt='first section'
                        width={600}
                        height={0}
                    />
                </section>
                <section>
                    <article className="topp">
                        <span style={{ fontSize: "24px" }}>About Us</span>
                        <span style={{ fontSize: "34px" }}>Why Agric Me?</span>
                        <span>Agricme is a pioneering social platform exclusively designed to unite farmers, fostering a robust community-driven network within the agricultural landscape. Our platform serves as a digital hub, providing farmers with the tools and resources to connect, collaborate, and thrive together.</span>
                    </article>
                    <article className="middlee">
                        <div className="first">
                            <div>
                                <RiCommunityFill className='community-icon'/>
                            </div>
                            <div>
                                <span>Community-Driven</span>
                                <span>Agricme brings farmers together, creating a supportive network where members can share experiences and grow collectively.</span>
                            </div>
                        </div>
                        <div className="first">
                            <div>
                                <GiSatelliteCommunication className='community-icon'/>
                            </div>
                            <div>
                                <span>Streamlined Communication</span>
                                <span>Our user-centric interface simplifies communication, making it easier for farmers to connect and collaborate.</span>
                            </div>
                        </div>
                    </article>
                    <article className="bottomm">
                        <button>
                            <div>
                                <span>Connect Now</span>
                                <span>
                                    <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </article>
                </section>

                <section className='hidden-sec'>
                    <Image
                        src="/component-images/about-img-2.jpeg"
                        alt='first section'
                        width={600}
                        height={0}
                    />
                </section>
                <section className='hidden-sec2'>
                    <article className="topp">
                        <span style={{ fontSize: "24px" }}>About Us</span>
                        <span style={{ fontSize: "34px" }}>Why Choose Us?</span>
                        <span>Agricme revolutionizes the way farmers engage with each other and the broader agricultural ecosystem. By providing a platform for seamless interaction, we empower farmers to achieve greater success and sustainability.</span>
                    </article>
                    <article className="middlee">
                        <div className="first">
                            <div>
                            <GiTrade className='community-icon'/>
                            </div>
                            <div>
                                <span>Trade and Commerce</span>
                                <span>Agricme facilitates efficient trade, allowing farmers to buy, sell, and exchange goods and services within the community.</span>
                            </div>
                        </div>
                        <div className="first">
                            <div>
                            <GiGiftOfKnowledge className='community-icon'/>
                            </div>
                            <div>
                                <span>Knowledge sharing</span>
                                <span>Access valuable insights, tips, and best practices from fellow farmers and agricultural experts.</span>
                            </div>
                        </div>
                    </article>
                    <article className="bottomm">
                        <button>
                            <div>
                                <span>Shop now</span>
                                <span>
                                    <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default FirstSection