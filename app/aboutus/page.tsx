import Hero from '@/components/AboutUs/AboutUsComponents/Hero';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import { AboutDetailItem, getAboutPage, getStrapiMediaUrl } from '@/lib/strapi';
import Details from '../../components/AboutUs/AboutUsComponents/Details';
import '../homePage.css';

const AboutUsPage = async () => {
  const aboutData = await getAboutPage();
  const heroImageUrl = aboutData?.heroImage?.url ? getStrapiMediaUrl(aboutData.heroImage.url) : '';
  const detailsData: AboutDetailItem[] = (aboutData?.details ?? []) as AboutDetailItem[];

  return (
    <main className="home-page position-relative">
      <Header />
      <Hero heroImageUrl={heroImageUrl} title={aboutData?.title ?? ''} />
      <Details detailsData={detailsData} />
      <WantToKnowMore />
      <Footer />
    </main>
  );
};

export default AboutUsPage;
