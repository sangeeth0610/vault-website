import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { ImArrowDownRight2 } from "react-icons/im";
import homeBg from "../../../public/assests/home-img.jpg";
import vaultPin from "../../../public/assests/home-vector.png";
import AnimatedFillButton from "../Buttons/AnimatedFillButton";
import BorderButton from "../Buttons/BorderButton";


const Hero = () => {
  return (
    <section className="hero-wrapper position-relative" style={{ height: "100vh" }}>
      <div className="img-background">
        <Image src={homeBg} alt="homeBg" />
        <div className="img-overlay"></div>
      </div>
      <div className="hero-section h-100 d-flex justify-content-center gap-5 flex-column px-4">
        <div className=" text-white hero-text">
          Multi-family office <br />
          for responsible growth.
        </div>
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <AnimatedFillButton text="DISCOVER OUR SERVICES" sufixIconChildren={<ImArrowDownRight2 color="#5065FF" size={18} />} />

          <BorderButton
            text="CONTACT US TODAY"
            sufixIconChildren={<GoArrowUpRight size={18} color="white" />}
          />
          {/* <FlickButton text="CONTACT US TODAY" sufixIconChildren={<GoArrowUpRight size={18} />} /> */}
        </div>
      </div>
      <div className="vault-pin">
        <Image src={vaultPin} alt="vaultPin" />
      </div>
    </section>
  )
}

export default Hero