'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useRef } from "react";
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import ReusableButton from "../Buttons/ReusableButton/ReusableButton";

// Example insights data tailored to Food for Thought, mirroring the Events carousel
const insightsData = [
  {
    category: "Wealth Structuring",
    title: "How Swiss Family Office Money Flows",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    link: "/insight/1",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Financial Infrastructure",
    title: "Turning Social Reach into Real Financial Access",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "/insight/2",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Regulation and Market",
    title: "Courts and Legislative Market",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    link: "/insight/3",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Sustainable Investing",
    title: "Green Bonds: Trends and Opportunities",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "/insight/4",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Market Trends",
    title: "Navigating Uncertain Markets in 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    link: "/insight/5",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Wealth Preservation",
    title: "Estate Planning for Modern Families",
    image: "https://images.unsplash.com/photo-1465101178521-c1a60871a80b?auto=format&fit=crop&w=600&q=80",
    link: "/insight/6",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Tech and Investment",
    title: "AI Disruption in Asset Management",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80",
    link: "/insight/7",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Entrepreneurship",
    title: "How Founders Approach Liquidity",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=600&q=80",
    link: "/insight/8",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Tax Optimization",
    title: "Global Tax Regimes and Family Wealth",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    link: "/insight/9",
    articleLabel: "READ ARTICLE",
  },
  {
    category: "Alternative Investments",
    title: "The Rise of Digital Art Funds",
    image: "https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&w=600&q=80",
    link: "/insight/10",
    articleLabel: "READ ARTICLE",
  },
];

const FoodForThought = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="foodforthought-wrapper pt-4 pt-lg-5 position-relative d-flex flex-column gap-4">
      <div className="px-4 d-flex flex-column gap-4 py-0 pt-lg-4">
        <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15">
          FOOD FOR THOUGHT
        </div>
        <div className="d-flex align-items-center justify-content-between pb-4 flex-wrap">
          <div className="font-libre fs-42  text-dark">
            Insights
          </div>
          <div className=" d-flex align-items-center gap-3">
            <button onClick={scrollPrev} className="arrow-btn carousel-arrow-left d-none d-lg-block" aria-label="Previous"
              style={{
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <GoArrowLeft size={20} />
            </button>
            <button onClick={scrollNext} className="arrow-btn carousel-arrow-right d-none d-lg-block" aria-label="Next"
              style={{
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <GoArrowRight size={20} />
            </button>
            <div>
              <ReusableButton
                text="VIEW ALL"
                sufixIconChildren={<GoArrowUpRight size={20} />}
                className="border-0 bg-transparent text-dark p-0"
                variant="outline"
                style={{ maxWidth: "max-content" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-container d-flex flex-row px-4 pb-5 gap-4 align-items-center me-4">
        <div className="embla w-100" ref={emblaRef}>
          <div className="embla__container d-flex flex-row gap-4">
            {insightsData.map((insight, index) => (
              <div className="embla__slide" key={index} style={{ minWidth: 340, maxWidth: 400, flex: "0 0 340px" }}>
                <div className="card event-carousel-card position-relative d-flex flex-column overflow-hidden h-100 border-0"
                  style={{
                    transition: "transform 0.2s"
                  }}
                >
                  <a
                    href={insight.link}
                    className="carousel-image-link text-decoration-none"
                    style={{ color: "inherit" }}
                    aria-label={`Read article: ${insight.title}`}
                  >
                    <a
                      href={insight.link}
                      className="carousel-image-link text-decoration-none"
                      style={{ color: "inherit" }}
                      aria-label={`Read article: ${insight.title}`}
                    >
                      <div
                        className="carousel-image-wrap w-100 position-relative overflow-hidden bg-secondary"
                        style={{ height: 220 }}
                      >
                        <img
                          className="carousel-image"
                          src={insight.image}
                          alt={insight.title}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <div className="read-article fw-light letter-spacing text-white fs-13 text-uppercase d-flex justify-content-center align-items-center gap-2 w-100 h-100">
                          {insight.articleLabel || "READ ARTICLE"} <span><GoArrowUpRight size={20} /></span>
                        </div>
                      </div>
                    </a>
                  </a>
                  <div className="pt-3">
                    <div className="fs-13 fw-medium primary-text mb-1">
                      {insight.category}
                    </div>
                    <div className="fs-16 fw-medium text-dark">
                      {insight.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodForThought