<<<<<<< HEAD

=======
import Image from "next/image"
import image1 from "@/public/icons/secondSections/image1.jpg"
import image2 from "@/public/icons/secondSections/image2.jpg"
>>>>>>> Nathbranch
const SecondSection = () => {
  return (
    <section className="blog">
        <section>
            <div className="blogTop">
                <span>News</span>
                <div>
                    <span>Discover weekly content about organic food, & more</span>
                    <button className="bottom">
                        <span>More news</span>
                        <div><svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </button>
                </div>
            </div>
<<<<<<< HEAD
            <div className="blogMid"></div>
=======
            <div className="blogMid">
                <article style={{backgroundImage: `url(${image1.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div>
                        <span>
                            25 Nov
                        </span>
                    </div>
                    <div>
                        <span>
                        <Image 
                        src="/icons/secondSections/Vectorperson.png"
                        alt='admin'
                        width={15}
                        height={15}
                        />
                        <span>By Rachi Card</span>
                        </span>
                        <span>The Benefits of Vitamin D & How to Get It</span>
                        <span>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                        <button>
                            Read More
                        </button>
                    </div>
                </article>
                <article style={{backgroundImage: `url(${image2.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div>
                        <span>
                            25 Nov
                        </span>
                    </div>
                    <div>
                        <span>
                        <Image 
                        src="/icons/secondSections/Vectorperson.png"
                        alt='admin'
                        width={15}
                        height={15}
                        />
                        <span>By Rachi Card</span>
                        </span>
                        <span>The Benefits of Vitamin D & How to Get It</span>
                        <span>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                        <button>
                            Read More
                        </button>
                    </div>
                </article>
            </div>
>>>>>>> Nathbranch
        </section>
    </section>
  )
}

export default SecondSection