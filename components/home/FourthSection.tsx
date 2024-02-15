import Image from "next/image"
const FourthSection = () => {
  return (
    <div className="fourth-sec">
        <div>
            <Image
            src={"/component-images/fourth-sec.png"}
            alt="fourth-sec"
            className="abs-img-left"
            fill 
            />
            <Image
            src={"/component-images/fourth-sec2.png"}
            alt="fourth-sec2"
            className="abs-img-right"
            fill 
            />
        </div>
        <div className="fourth-sec-items">
            <p className="custom-txt"></p>
            <div className="top">
                <span>What Our Customer Saying</span>
                <span>What Our Customer Saying</span>
            </div>
        </div>
    </div>
  )
}

export default FourthSection