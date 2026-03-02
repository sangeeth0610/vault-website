import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { GoArrowUpRight } from 'react-icons/go'

const EventsCard = () => {

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
  ];
  return (
    <div className=' px-4 py-5 my-4'>
      <Row>
        {eventsData.map((event, index) => (
          <Col md={6} key={index} >
            <div className="mb-5 carousel-card event-carousel-card position-relative d-flex flex-column overflow-hidden h-100 border-0"
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
                  style={{ height: 450 }}
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
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default EventsCard