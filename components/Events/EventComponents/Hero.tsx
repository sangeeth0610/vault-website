/* eslint-disable @next/next/no-img-element */
'use client';

import type { EventItem } from '@/lib/strapi';
import { getStrapiMediaUrl } from '@/lib/strapi';

const Hero = ({ event }: { event?: EventItem | null }) => {
  const bgUrl = event?.bgImage?.url ? getStrapiMediaUrl(event.bgImage.url) : null;
  const heroTitle = event?.title;

  return (
    <section className="hero-wrapper position-relative" style={{ height: '100vh' }}>
      <div className="img-background">
        <img
          src={bgUrl ?? ''}
          alt={event?.bgImage?.alternativeText ?? 'Event'}
          className="object-cover"
          sizes="100vw"
        />
        <div className="img-overlay"></div>
      </div>
      <div className="vault-marquee">
        <div className="vault-track">
          {[...Array(20)].map((_, i) => (
            <span key={`first-${i}`}>#vault </span>
          ))}
          {[...Array(20)].map((_, i) => (
            <span key={`second-${i}`}>#vault </span>
          ))}
        </div>
      </div>

      <div className="hero-section h-100 d-flex justify-content-center gap-5 flex-column px-4">
        <div className=" text-white hero-text">{heroTitle}</div>
      </div>
    </section>
  );
};

export default Hero;
