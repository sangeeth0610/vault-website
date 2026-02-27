'use client'

import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import meetingImg from "../../../../public/assests/event.jpg";
import "./ArticleDetails.css";

// Browser logo URLs
const onlineBrowserLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png",
    alt: "Google Chrome"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    alt: "Google"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.svg",
    alt: "Microsoft Edge"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Mozilla_Firefox_logo_2013.png",
    alt: "Mozilla Firefox"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/Internet_Explorer_9_icon.png",
    alt: "Internet Explorer"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple Safari"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Opera_browser_logo_2015.png",
    alt: "Opera Browser"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Brave_logo.png",
    alt: "Brave Browser"
  }
];

const ArticleDetails = () => {
  return (
    <section className="px-4 py-4">
      <div className="article-details-section pb-5 mb-5">
        <Row className="align-items-start g-4 flex-column flex-md-row">
          <Col md={8}>
            <div className=" d-flex flex-column gap-3">
              <div className='font-libre fs-26 text-dark fw-semibold'>
                On November 11, 2025,
              </div>
              <div className="fs-15">
                Data Centre Leadership Dinner, November 2025
              </div>
              <div className="fs-15">
                On the evening of 11th November in Mayfair, London, in partnership with  Spectrum, Vault Partners curated a group of board-level leaders from across the European data centre supply chain for a peer group discussion over dinner, and the opportunity to network.
              </div>
              <div className="fs-15">
                The two core topics explored on the night were:
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-md-end justify-content-center">
            <div style={{ maxWidth: 400, height: 440, width: "100%" }}>
              <Image src={meetingImg} alt="Board lunch" className="rounded shadow-sm w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="article-details-section pb-5 mb-5">
        <Row className="align-items-start g-4 flex-column flex-md-row-reverse">
          <Col md={8}>
            <div className=" d-flex flex-column gap-3">
              <div className='font-libre fs-26 text-dark fw-semibold'>
                Powering the data centre
              </div>
              <div className="fs-15">
                The energy, commercial and business infrastructure panel provided valuable clarity on near- and long-term topics:
              </div>
              <div className="fs-15">
                <ul style={{ paddingLeft: 20 }}>
                  <li>Energy-efficiency will determine the data industry's viability.</li>
                  <li>Artificial intelligence will result in new infrastructure and sector locations.</li>
                  <li>The private sector and public sector must partner for long-term enabling infrastructure and meet the needs of the HPC and digital sector.</li>
                  <li>Renewable energy remains attractive for data centres.</li>
                  <li>Opportunities are abundant for data centre investors.</li>
                  <li>Board discussions also examined the balance of reliability and cost when faced with the sector’s rapidly increasing power and scalability demands.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-md-start justify-content-center">
            <div style={{ maxWidth: 400, height: 440, width: "100%" }}>
              <Image src={meetingImg} alt="Board lunch" className="rounded shadow-sm w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
          </Col>
        </Row>
      </div>
      <div>

        <div className=' pt-4 d-flex flex-column gap-4'>
          <div className=' primary-text text-uppercase letter-spacing fw-semibold fs-15'>Partners</div>
          <div className='font-libre fs-42 pb-4 text-dark'>
            Collaborating with Leading Partners
          </div>
        </div>
        <Row className="g-3 mb-4 mt-3">
          {onlineBrowserLogos.map((logo, idx) => (
            <Col md={3} xs={12} key={idx}>
              <div className=" p-3 border d-flex justify-content-center align-items-center bg-white" style={{ height: "230px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ maxHeight: "90px", maxWidth: "100%", objectFit: "contain", width: "auto" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ArticleDetails;