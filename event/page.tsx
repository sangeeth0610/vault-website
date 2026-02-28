import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import WantToKnowMore from "../components/WantToKnowMore/WantToKnowMore";
import "../homePage.css";
import ArticleDetails from "./EventComponents/ArticleDetails/ArticleDetails";
import Hero from "./EventComponents/Hero";

export default function EventPage() {
  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <ArticleDetails />
      <WantToKnowMore />
      <Footer />
    </main>
  );
}


