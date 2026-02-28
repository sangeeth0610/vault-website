import Header from '@/components/Header/Header';
import '../homePage.css';
import Details from './AboutUsComponents/Details';
import Hero from './AboutUsComponents/Hero';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import Footer from '@/components/Footer/Footer';

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
};

export default AboutUsPage;
