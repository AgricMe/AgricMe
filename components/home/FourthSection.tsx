import Image from 'next/image'
const FourthSection = () => {
  return (
    <div className='fourth-sec'>
        <div>
            <Image
            src={"/component-images/butcher-image.jpg"}
            alt='butcher-image'
            width={700}
            height={476}
            style={{objectFit:"cover"}}
             />
        </div>
        <div className='fourth-sec-abs-cont'>
            <div>
                <p className="custom-text">Eco Friendly</p>
                <h4>AgricMe is a Dummie Text</h4>
            </div>
        </div>
    </div>
  )
}

export default FourthSection