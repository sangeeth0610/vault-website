'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useRef } from "react";
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import ReusableButton from "../Buttons/ReusableButton/ReusableButton";

const eventsData = [
  {
    date: "November 1, 2023",
    title: "Data Centre Leadership Dinner",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    category: "",
    link: "/event",
    articleLabel: "READ ARTICLE",
  },
  {
    date: "July 10, 2023",
    title: "Panel Discussion: HPC Investment Landscape",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    category: "",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "",
    title: "Emerging Market Strategies Are Forecasted",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "Market Strategy",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "June 20, 2023",
    title: "Executive Roundtable",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&w=600&q=80",
    category: "",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "May 5, 2023",
    title: "Tech Insight Conference",
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=600&q=80",
    category: "Technology",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "November 1, 2023",
    title: "Data Centre Leadership Dinner",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    category: "",
    link: "/event",
    articleLabel: "READ ARTICLE",
  },
  {
    date: "July 10, 2023",
    title: "Panel Discussion: HPC Investment Landscape",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    category: "",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "",
    title: "Emerging Market Strategies Are Forecasted",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "Market Strategy",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "June 20, 2023",
    title: "Executive Roundtable",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&w=600&q=80",
    category: "",
    link: "/event",
    articleLabel: "",
  },
  {
    date: "May 5, 2023",
    title: "Tech Insight Conference",
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=600&q=80",
    category: "Technology",
    link: "/event",
    articleLabel: "",
  },
];

const Events = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 10000, // 10 seconds
      stopOnInteraction: false, // keeps autoplay after manual scroll
      stopOnMouseEnter: true, // pause when hover
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true, // infinite loop
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
    <div className="events-wrapper pt-4 pt-lg-5 position-relative d-flex flex-column gap-4">
      <div className="px-4 d-flex flex-column gap-4 py-0 pt-lg-4">
        <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15">
          events
        </div>
        <div className="d-flex align-items-center justify-content-between pb-4 flex-wrap">
          <div className="font-libre fs-42  text-dark">
            The Right Conversations
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
            {eventsData.map((event, index) => (
              <div className="embla__slide" key={index} style={{ minWidth: 600, maxWidth: 660, flex: "0 0 340px" }}>
                <div className="carousel-card event-carousel-card position-relative d-flex flex-column overflow-hidden h-100 border-0"
                  style={{
                    transition: "transform 0.2s"
                  }}
                >
                  <a
                    href={event.link}
                    className="carousel-image-link text-decoration-none"
                    style={{ color: "inherit" }}
                    aria-label={`Read article: ${event.title}`}
                  >
                    <div
                      className="carousel-image-wrap w-100 position-relative overflow-hidden bg-secondary"
                      style={{ height: 390 }}
                    >
                      <img
                        className="carousel-image"
                        src={event.image}
                        alt={event.title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="read-article fw-light letter-spacing text-white fs-13 text-uppercase d-flex justify-content-center align-items-center gap-2 w-100 h-100">
                        {event.articleLabel || "READ ARTICLE"} <span><GoArrowUpRight size={20} /></span>
                      </div>
                    </div>
                  </a>

                  <div className="py-3">
                    {event.date && (
                      <div className="fs-13 fw-medium primary-text">
                        {event.date}
                      </div>
                    )}
                    <div className="fs-16 fw-medium text-dark">
                      {event.title}
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
};

export default Events;