import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import WantToKnowMore from "../components/WantToKnowMore/WantToKnowMore";
import "../homePage.css";
import Details from "./AboutUsComponents/Details";
import Hero from "./AboutUsComponents/Hero";

const AboutUsPage = () => {
  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <Details />
      <WantToKnowMore />
      <Footer />
    </main>
  );
}

export default AboutUsPage;