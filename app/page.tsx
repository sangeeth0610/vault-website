import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { HiArrowDownRight } from "react-icons/hi2";
import homeBg from "../public/assests/home-img.jpg";
import vaultPin from "../public/assests/home-vector.png";
import Header from "./components/Header";
import ReusableButton from "./components/ReusableButton/ReusableButton";
import "./homePage.css";


export default function Home() {
  return (
    <div className=" position-realtive" style={{ height: "100vh" }}>
      <Header />
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
          <ReusableButton
            text="DISCOVER OUR SERVICES"
            variant="white"
            className="bg-white text-black"
            sufixIconChildren={
              <HiArrowDownRight size={18} color="#5065FF" />
            }
          />
          <ReusableButton
            text="CONTACT US TODAY"
            variant="outline"
            className="bg-transparent text-white"
            sufixIconChildren={
              <GoArrowUpRight size={18} color="#fff" />
            }
          />
        </div>
      </div>
      <div className="vault-pin">
        <Image src={vaultPin} alt="vaultPin" width={450} />
      </div>
    </div>
  );
}
