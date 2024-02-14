import Image from "next/image"
import "../css/thirdSection.css"

const ThirdSection = () => {
  return (
    <section className="sec">
        <article className="top">
            <span>What we Offer</span>
            <span>Better Agriculture for Better Future</span>
        </article>
        <article className="art">
            <div className="div">
                <section className="sect">
                    <article>
                        <span>
                            <Image
                            src="/icons/thirdSectionIcons/dairy-icon.png"
                            alt="groundnut"
                            fill
                            />
                            <div></div>
                        </span>
                        <h1>lorem</h1>
                        <span className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</span>
                    </article>
                    <article>
                        <span>
                            <Image
                            src="/icons/thirdSectionIcons/store-service-icon.png"
                            alt="groundnut"
                            fill
                            />
                            <div></div>
                        </span>
                        <h1>lorem</h1>
                        <span className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</span>
                    </article>
                    <article>
                        <span>
                            <Image
                            src="/icons/thirdSectionIcons/delivery-icon.png"
                            alt="groundnut"
                            fill
                            />
                            <div></div>
                        </span>
                        <h1>lorem</h1>
                        <span className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</span>
                    </article>
                </section>
            </div>
            <div className="div">
                <Image
                src="/icons/thirdSectionIcons/groundnut-img.png"
                alt="groundnut"
                fill
                 />
            </div>
            <div className="div">
                <section className="sect2">
                <article>
                        <span>
                            <Image
                            src="/icons/thirdSectionIcons/agricultural-service-icon.png"
                            alt="groundnut"
                            fill
                            />
                            <div></div>
                        </span>
                        <h1>lorem</h1>
                        <span className="desc2">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</span>
                    </article>
                    <article>
                        <span>
                            <Image
                            src="/icons/thirdSectionIcons/organic-product-icon.png"
                            alt="groundnut"
                            fill
                            />
                            <div></div>
                        </span>
                        <h1>lorem</h1>
                        <span className="desc2">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</span>
                    </article>
                    <article>
                        <span>
                            <Image
                            src="/icons/thirdSectionIcons/fresh-vegetable-icon.png"
                            alt="groundnut"
                            fill
                            />
                            <div></div>
                        </span>
                        <h1>lorem</h1>
                        <span className="desc2">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</span>
                    </article>
                </section>
            </div>
        </article>
        <button className="bottom">
            <span>Explore more</span>
            <div><svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </button>
    </section>
  )
}

export default ThirdSection