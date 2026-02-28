import AboutUs from '@/components/AboutUs/AboutUs';
import Events from '@/components/Events/Events';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import OurStory from '@/components/OurStory/OurStory';
import PartnerWithUs from '@/components/PartnerWithUs/PartnerWithUs';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import './homePage.css';
export default function Home() {
  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <AboutUs />
      <OurStory />
      <WhatWeDo />
      <Events />
      <PartnerWithUs />
      <WantToKnowMore />
      <Footer />
    </main>
  );
}
