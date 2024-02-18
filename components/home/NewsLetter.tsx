import newsLetter from "@/public/component-images/news-letter.png"

const NewsLetter = () => {
  return (
    <div className="news-letter">
        <div className="news-letter-cont" style={{backgroundImage: `url(${newsLetter.src})`}}>
            <div className="news-text-form">
                <div>
                    <h1>Subscribe to our News Letter</h1>
                </div>
                <form action="">
                    <input type="email" placeholder="Your Email Address"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter