import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import homeBg from "../../../public/assests/home-img.jpg";
import window from "../../../public/assests/window.png";
import world from "../../../public/assests/World.png";
import './OurStory.css';




const OurStory = () => {
  return (
    <div className=" pt-4  pt-lg-5 position-relative d-flex flex-column gap-4 our-story ">
      <div className=' px-4 py-4 d-flex flex-column gap-4'>
        <div className=' primary-text text-uppercase letter-spacing fw-semibold fs-15'>Our Story</div>
        <div className='font-libre fs-42 pb-4 text-dark'>
          Operational Excellence is our Edge
        </div>
      </div>
      <div>
        <Row className="g-0">
          <Col md={4}>
            <div className='p-3 our-story-card d-flex flex-column justify-content-between gap-4 position-relative'>
              <div className="img-background-our-story">
                <Image src={world} alt="world" />
              </div>
              <div className='font-libre fs-24 pb-4 text-white our-story-section '>
                Global Presence
              </div>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="text-secondary fs-15 border-bottom pb-2">
                  London, UK
                </div>
                <div className="text-secondary fs-15 border-bottom pb-2">
                  Geneva, CH
                </div>
                <div className="text-secondary fs-15 border-bottom pb-2">
                  Dubai, UAE
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='p-3 our-story-card d-flex flex-column justify-content-between gap-4 position-relative'>
              <div className="img-background-our-story">
                <Image src={homeBg} alt="homeBg" />
                <div className="img-overlay-our-story"></div>
              </div>
              <div className='font-libre fs-24 pb-4 text-white our-story-section'>
                Institutional Grade
              </div>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="text-secondary fs-15 border-bottom pb-2">
                  <span className=' text-white fw-medium'>25 years</span> of institutional execution.
                </div>
                <div className="text-secondary fs-15 border-bottom pb-2">
                  Applied to ambitious founders.
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='p-3 our-story-card d-flex flex-column justify-content-between gap-4 position-relative'>
              <div className="img-background-our-story">
                <Image src={window} alt="window" />
              </div>
              <div className='font-libre fs-24 pb-4 text-white our-story-section'>
                Operational Strength
              </div>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="text-secondary fs-15 pb-2">
                  We target strong fundamentals, controls and execution.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default OurStory