
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./homePage.css";

export default function Home() {
  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <AboutUs />
      <Footer />
    </main>
  );
}
