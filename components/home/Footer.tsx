import Image from "next/image"

const Footer = () => {
  return (
    <section className="footer">
        <section>
            <article>
                <section className="line"></section>
                <h1 style={{textAlign: "end"}}>Contact Us</h1>
                <div>
                    <p>Email</p>
                    <p>needhelp@agricme.com</p>
                </div>
                <div>
                    <p>Phone</p>
                    <p>+234 123 456 789</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>NCFF House, Imo State.</p>
                </div>
            </article>
            <article>
                <div style={{alignItems: "center"}}>
                    <Image 
                    src="/logo/agricme-logo.png"
                    alt="logo"
                    width={160}
                    height={36.91}
                    />
                </div>
                <div style={{textAlign: "center", color: "#525C60", fontSize: "13px", fontWeight: "400"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem rem voluptatum magnam maiores, earum, magni culpa quas ad.</div>
                <section>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
            </article>
            <article>
                <section className="line2"></section>
                <h1>Utility Pages</h1>
                <span>Style Guides</span>
                <span>404 Not Found</span>
                <span>Password Protected</span>
                <span>Licences</span>
                <span>Changelog</span>
            </article>
        </section>
    </section>
  )
}

export default Footer