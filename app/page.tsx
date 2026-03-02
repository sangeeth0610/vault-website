import AboutUs from '@/components/AboutUs/AboutUs';
import Events from '@/components/Events/Events';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import OurStory from '@/components/OurStory/OurStory';
import PartnerWithUs from '@/components/PartnerWithUs/PartnerWithUs';
import WantToKnowMore from '@/components/WantToKnowMore/WantToKnowMore';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import { EventItem, getEvents, getStrapiMediaUrl } from '@/lib/strapi';
import './homePage.css';

const DEFAULT_EVENTS_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80';

type EventCarouselItem = {
  date: string;
  title: string;
  image: string;
  slug: string;
  id: string;
};

function formatEvent(event: EventItem): EventCarouselItem {
  const bgImageUrl = event?.bgImage?.url;
  const date =
    event?.date && !isNaN(new Date(event.date).getTime())
      ? new Date(event.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : '';

  return {
    date,
    title: event.title ?? '',
    image: bgImageUrl ? getStrapiMediaUrl(bgImageUrl) : DEFAULT_EVENTS_IMAGE,
    slug: event.slug ?? '',
    id: event.documentId ?? '',
  };
}

export default async function Home() {
  const events = await getEvents();
  const items: EventItem[] = Array.isArray(events) ? events : [];
  const eventsForCarousel: EventCarouselItem[] = items.map(formatEvent);

  return (
    <main className="home-page position-relative">
      <Header />
      <Hero />
      <AboutUs />
      <OurStory />
      <WhatWeDo />
      <Events events={eventsForCarousel} />
      <PartnerWithUs />
      <WantToKnowMore />
      <Footer />
    </main>
  );
}
