import ArticleDetails from '@/components/Events/EventComponents/ArticleDetails/ArticleDetails';
import Hero from '@/components/Events/EventComponents/Hero';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import { getWantToKnowMoreList } from '@/lib/strapi';
import '../homePage.css';

export default async function EventPage() {
  const wantToKnowMoreList = await getWantToKnowMoreList();
  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <ArticleDetails />
      <WantToKnowMore entries={wantToKnowMoreList ?? null} />
      <Footer />
    </main>
  );
}
