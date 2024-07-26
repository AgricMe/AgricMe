import Image from "next/image"
const Testimonial = () => {
  return (
    <div className="testimonial bg-white">
        <div >
           <Image
           src={"/component-images/Imagebg.jpg"}
           alt="testimonial"
           fill
           style={{zIndex:-1, objectFit:"cover"}}
           />
        </div>
        <div className="testimonial-items">
          <div className="testimonial-items-text">
            <p className="custom-txt">Testimonial</p>
            <h2>What Our Customer is Saying?</h2>
          </div>
          <div>
            <div className="testimonial-img-icon">
              <Image
              src={"/component-images/testimonial-author.png"}
              alt="testimonial-author"
              width={100}
              height={100}
              className="testimonial-author"
              />
              <div className="testimonial-icon">
                <Image 
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
                />
                <Image 
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
                />
                <Image 
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
                />
                <Image 
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
                />
                <Image 
                src={"/icons/testimonial-icons/star-icon.png"}
                alt="star-icon"
                width={26}
                height={24}
                />
              </div>
            </div>
            <div className="testimonial-msg">
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              <h3>Sara Taylor</h3>
              <small>Consumer</small>
            </div>
            <div className="testimonial-chng-icons">
              <div></div>
              <div className="active"></div>
              <div></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial