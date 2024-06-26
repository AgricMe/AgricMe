import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='first-sec'>
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
                <span style={{fontSize: "34px"}}>We Believe in Dummie Text</span>
                <span>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
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
  )
}

export default FirstSection