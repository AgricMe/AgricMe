import Image from "next/image";

const OldThirdSection = () => {
  return (
    <section id="services" className="sec">
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
              <span className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
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
              <span className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
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
              <span className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
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
              <span className="desc2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
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
              <span className="desc2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
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
              <span className="desc2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </span>
            </article>
          </section>
        </div>
      </article>
      <button className="bottom">
        <span>Explore more</span>
        <div>
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.4769 1.12891L7.87144 4.19342L4.4769 7.25794M7.39998 4.19342H0.516602"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
    </section>
  );
};

export default OldThirdSection;

// Old first section styles
/* third section */
/* .sec{
    max-width: 100vw;
    width: 100vw;
    padding: 100px 0px 100px 0px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(216, 233, 233);
}

.art{
    width: 80%;
    max-width:1000px;
    height: 530px;
    position: relative;
    display: flex;
    gap: 400px;
}
.div{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.div:nth-child(1){
    width: 300px;
    height: 100%;
    transform: scale(0.8);
}
.div:nth-child(2){
    position: absolute;
    top: 0px;
    left: 300px;
    width: 400px;
    height: 100%;
}
.div:nth-child(2) img{
    transform: scale(1.2);
}
.div:nth-child(3){
    width: 300px;
    height: 100%;
    transform: scale(0.8);
}
.sect{
    display: flex;
    flex-direction: column;
    gap: 39px;
}
.sect article {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
}
.sect article h1{
    font-size: 25px;
    color: #274C5B;
}
.sect article span:nth-child(1){
    width: 42px;
    aspect-ratio: 1;
    position: relative;
}
.desc{
    font-size: 18px;
    color: #525C60;
    text-align: end;
}
.sect article span div{
    position: absolute;
    z-index: 0;
    opacity: 0.6;
    right: -5px;
    bottom: -5px;
    width: 24px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fff4cd;
} */
/* 2nd one */
// .sect2{
//     display: flex;
//     flex-direction: column;
//     gap: 39px;
// }
// .sect2 article {
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
// }
// .sect2 article h1{
//     font-size: 25px;
//     color: #274C5B;
// }
// .sect2 article span:nth-child(1){
//     width: 42px;
//     aspect-ratio: 1;
//     position: relative;
// }
// .desc2{
//     font-size: 18px;
//     color: #525C60;
// }
// .sect2 article span div{
//     position: absolute;
//     z-index: 0;
//     opacity: 0.6;
//     right: -5px;
//     bottom: -5px;
//     width: 24px;
//     aspect-ratio: 1;
//     border-radius: 50%;
//     background-color: #fff4cd;
// }
// /* bottom */
// .bottom{
//     width: 220px;
//     height: 70px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 2px solid #335B6B;
//     border-radius: 16px;
//     gap: 10px;
// }
// .bottom span{
//     color: #274C5B;
//     font-size: 20px;
//     font-weight: 700;
// }
// .bottom div{
//     width: 19px;
//     display: grid;
//     place-items: center;
//     aspect-ratio: 1;
//     background-color: #335B6B;
//     border-radius: 50%;
// }
// /* top */
// .top{
//     width: 482px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 6px;
// }
// .top span:nth-child(1){
//     font-size: 36px;
//     color: #7EB693;
// }
// .top span:nth-child(2){
//     font-size: 50px;
//     text-align: center;
//     font-weight: 800;
//     color: #274C5B;
// }
