import ArticleDetails from '@/components/Events/EventComponents/ArticleDetails/ArticleDetails';
import Hero from '@/components/Events/EventComponents/Hero';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import '../homePage.css';
import EventsCard from '@/components/Events/EventComponents/EventsCard';

export default function EventsPage() {
  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <EventsCard />
      <WantToKnowMore />
      <Footer />
    </main>
  );
}
