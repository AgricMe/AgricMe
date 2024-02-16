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
                <div>
                    <p className="custom-text">Eco Friendly</p>
                    <h3>AgricMe is a Dummie Text</h3>
                </div>
                <div className="fourth-sec-content">
                    <div className="fourth-sec-content-text">
                        <h4>Start with Our Company First</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium     doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                    <div className="fourth-sec-content-text">
                        <h4>Start with Our Company First</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium     doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                    <div className="fourth-sec-content-text">
                        <h4>Start with Our Company First</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium     doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthSection