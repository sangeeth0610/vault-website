'use client'

import React, { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GoDotFill } from "react-icons/go";
import { Col, Row } from "react-bootstrap";

const lettersData = [
  {
    text: `"Their investment advice is thoughtful, disciplined, and results-driven. We appreciate the clarity and transparency in every recommendation. Our portfolio is well-aligned with long-term goals and risk tolerance. A trusted partner in navigating today's complex financial markets."`,
    ceo: {
      name: "Akito Nanada",
      title: "Co-Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    text: `"With Vault's guidance, we've been able to make sound decisions, even in turbulent markets. Their commitment to integrity and excellence sets them apart in the wealth management space."`,
    ceo: {
      name: "Akito Nanada",
      title: "Co-Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    text: `"I trust Vault as an extension of our family—thoughtful, responsive, and always putting our interests first. Highly recommended for anyone seeking long-term financial stewardship."`,
    ceo: {
      name: "Akito Nanada",
      title: "Co-Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    text: `"Their investment advice is thoughtful, disciplined, and results-driven. We appreciate the clarity and transparency in every recommendation. Our portfolio is well-aligned with long-term goals and risk tolerance. A trusted partner in navigating today's complex financial markets."`,
    ceo: {
      name: "Akito Nanada",
      title: "Co-Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

const CeoAnnualLetters = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi && emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (idx: number) => {
      if (emblaApi) emblaApi.scrollTo(idx);
    },
    [emblaApi]
  );

  return (
    <section className="py-5 mt-5">
      <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15 px-4 pb-4">
        CEO ANNUAL LETTERS
      </div>
      <Row className="align-items-center">
        <Col>
          <div ref={emblaRef} className="embla">
            <div className="embla__container">
              {lettersData.map((slide, idx) => (
                <div className="embla__slide" key={idx}>
                  <Row className=" align-items-center g-4">
                    <Col md={6}>
                      <div className=" px-4">
                        <blockquote
                          className="fs-16 mb-4 pb-3 font-libre"
                        >
                          {slide.text}
                        </blockquote>
                        <div className="d-flex align-items-center gap-2 mt-4">
                          <img
                            src={slide.ceo.image}
                            alt={slide.ceo.name}
                            className="rounded-circle"
                            style={{
                              width: 40,
                              height: 40,
                              objectFit: "cover",
                              border: "2px solid #eaeaea"
                            }}
                          />
                          <div>
                            <div className="fw-semibold fs-14">{slide.ceo.name}</div>
                            <div className="text-muted fs-13">{slide.ceo.title}</div>
                          </div>
                        </div>
                      </div>

                    </Col>
                    <Col md={6} className=" p-3 p-md-0 d-flex align-items-center justify-content-end">
                      <div
                        style={{
                          background: "#f5f5f7",
                          overflow: "hidden",
                          width: "100%",
                          maxWidth: 470,
                          height: 430,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={slide.image}
                          alt="CEO Letter"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            // borderTopLeftRadius: "8px",
                            // borderBottomLeftRadius: "8px",
                            borderRadius: "4px"
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="d-flex justify-content-start align-items-center gap-2 px-4 mt-4">
            {lettersData.map((_, i) => (
              <button
                key={i}
                type="button"
                className=" p-0 border-0 bg-transparent"
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  lineHeight: 1,
                  color: selectedIndex === i ? "var(--dark)" : "#b5bfd0",
                  transition: "color 0.15s"
                }}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                tabIndex={0}
              >
                <GoDotFill />
              </button>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CeoAnnualLetters;