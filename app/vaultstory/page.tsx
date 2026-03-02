import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Vault/VaultComponents/Hero';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import '../homePage.css';
import Details from '@/components/Vault/VaultComponents/Details';

const VaultPage = () => {
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

export default VaultPage;
