import Image from 'next/image'
import React from 'react'

const OldFirstSection = () => {
  return (
    <div className='first-sec relative'>
        <section>
            <Image 
            src="/icons/firstscetionicons/image.svg"
            alt='first section'
            fill
            />
        </section>
        <section>
            <article className="topp">
                <span style={{fontSize: "24px"}}>About Us</span>
                <span style={{fontSize: "34px"}}>Why Agric Me?</span>
                <span>Agricme is a pioneering social platform exclusively designed to unite farmers, fostering a robust community-driven network within the agricultural landscape. Our platform serves as a digital hub, providing farmers with the tools and resources to connect, collaborate, and thrive together..</span>
            </article>
            <article className="middlee">
                <div className="first">
                    <div>
                    <Image 
                        src="/icons/firstscetionicons/first-icon.png"
                        alt='first section'
                        width={46}
                        height={38}
                        />
                    </div>
                    <div>
                        <span>Organic Foods Only</span>
                        <span>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                    </div>
                </div>
                <div className="first">
                    <div>
                    <Image 
                        src="/icons/firstscetionicons/second-icon.png"
                        alt='first section'
                        width={46}
                        height={38}
                        />
                    </div>
                    <div>
                        <span>Organic Foods Only</span>
                        <span>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                    </div>
                </div>
            </article>
            <article className="bottomm">
                <button>
                    <div>
                        <span>Shop now</span>
                        <span>
                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                        </span>
                    </div>
                </button>
            </article>
        </section>
    </div>
  );
}

export default OldFirstSection

// Old First Section styles
/* .first-sec{
    background-color: rgb(216, 233, 233);
    padding: 0px 10px 0px 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 700px;
    padding-left: 50px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    color: #274C5B;
}
.first-sec section{
    height: 100%;
    position: relative;
}
.first-sec section:nth-child(1){
    transform: scale(0.8);
}
.first-sec section:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 46px;
    margin-right: 150px;
}
.topp{
    display: flex;
    flex-direction: column;
    gap: 14px;
}
.topp span:nth-child(1){
    font-size: 36px;
    color: #7EB693;
}
.topp span:nth-child(2){
    font-size: 50px;
    font-weight: 800;
    color: #274C5B;
}
.middlee{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.first{
    display: flex;
    gap: 19px;
    height: 70px;
}
.first div:nth-child(1){
    height: 100%;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
}
.first div:nth-child(2){
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: center;
}
.first div span:nth-child(1){
   font-size: 18px;
   font-weight: 800;
   color: #274C5B; 
}
.first div span:nth-child(2){
   font-size: 13px;
   font-weight: 400;
   color: #525C60; 
}
.bottomm button{
    width: 180px;
    display: grid;
    place-items: center;
    height: 60px;
    border-radius: 16px;
    background-color: #274C5B;
}
.bottomm button div{
    display: flex;
    gap: 10px;
    align-items: center;
}
.bottomm button div span:nth-child(1){
   font-size: 18px;
   font-weight: 700;
   color: #ffffff; 
}
.buttomm button div span:nth-child(2){
    padding: 10px;
    background-color: #ffffff;
    backdrop-filter: opacity(0.2);
    border-radius: 50%;
} */