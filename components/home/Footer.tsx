import Image from "next/image";
import { CgCopyright } from "react-icons/cg";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact"
      className="footer mt-[50px] w-full flex flex-col px-[1.5rem] md:px-[3rem] lg:px-[4rem]"
    >
      <section className="w-full grid grid-cols-1 lg:grid-cols-[auto,700px,auto]">
        <article className="w-full relative lg:p-[30px] col-span-1">
          <h1>Contact Us</h1>
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
        <div className="hidden lg:flex relative w-full h-full">
          <div className="line2 hidden lg:flex"></div>
          <article className="p-[30px] col-span-1">
            <div style={{ alignItems: "center" }}>
              <Image
                src="/logo/agricme-logo.png"
                alt="logo"
                width={160}
                height={36.91}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#525C60",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              jgffvk
            </div>
            <h3 className="agri">
              <span className="agri1">
                <FaInstagramSquare className="iconfoot" />
              </span>
              <span className="agri1">
                <FaFacebook className="iconfoot" />
              </span>
              <span className="agri1">
                <FaTwitter className="iconfoot" />
              </span>
              <span className="agri1">
                <FaPinterest className="iconfoot" />
              </span>
            </h3>
          </article>
        </div>
        <div className="w-full relative">
          <div className="line2 hidden lg:flex"></div>
          <article className="py-[30px] col-span-1 lg:ml-[6rem]">
            <h1>Utility Pages</h1>
            <span>Style Guides</span>
            <span>404 Not Found</span>
            <span>Password Protected</span>
            <span>Licenses</span>
            <span>Changelog</span>
          </article>
        </div>
        <div className="lg:hidden relative w-full h-full">
          <div className="line2 hidden lg:flex"></div>
          <article className="lg:p-[30px] col-span-1">
            <div style={{ alignItems: "center" }}>
              <Image
                src="/logo/agricme-logo.png"
                alt="logo"
                width={160}
                height={36.91}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#525C60",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              dolorem rem voluptatum magnam maiores, earum, magni culpa quas ad.
            </div>
            <h3 className="agri">
              <span className="agri1">
                <FaInstagramSquare className="iconfoot" />
              </span>
              <span className="agri1">
                <FaFacebook className="iconfoot" />
              </span>
              <span className="agri1">
                <FaTwitter className="iconfoot" />
              </span>
              <span className="agri1">
                <FaPinterest className="iconfoot" />
              </span>
            </h3>
          </article>
        </div>
      </section>
      <div className="mt-0 lg:mt-[50px] w-full h-[60px] flex justify-center items-center border-t border-[#525c60]">
        <span className="text-center text-[#274c5b] flex items-center text-[15px] font-normal">
          Copyright <CgCopyright />
          <span className="text-[18px] font-bold">AgricMe</span>
        </span>
      </div>
    </section>
  );
};

export default Footer;
