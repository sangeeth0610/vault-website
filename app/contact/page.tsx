import Contact from '@/components/Contact/Contact';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import '../homePage.css';

export default function ContactPage() {
  return (
    <main className="home-page position-relative">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}