import Image from "next/image"
const FourthSection = () => {
  return (
    <div className="fourth-sec">
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
  )
}

export default FourthSection