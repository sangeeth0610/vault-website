import React from 'react'
import "./AboutUs.css";
import { Col, Row } from 'react-bootstrap';
import FlickButton from '../Buttons/FlickButton';
import { GoArrowUpRight } from 'react-icons/go';

const AboutUs = () => {
  return (
    <div className="px-4 py-4 position-relative d-flex flex-column justify-content-center gap-4 about-us " style={{ minHeight: "610px" }}>
      <div className=' primary-text text-uppercase letter-spacing fw-semibold fs-15'>About Us</div>
      <div className=' font-libre fs-42 pb-4 border-bottom text-white '>
        Vault MFO
      </div>
      <Row className='gy-4'>
        <Col md={6}>
          <div className='text-justify text-white pb-4'>
            Vault MFO comprises Vault Investments, Vault Wealth and Vault Advisory which have played key role in launch, incubation and growth of several unicorns in the emerging technology space.
          </div>
          <FlickButton text="See our portfolio" sufixIconChildren={<GoArrowUpRight size={20} />} />
        </Col>
        <Col md={6}>
          <div className='text-justify text-white pb-4'>
            Our mission is to enable responsible growth across the entire value chain – aligning capital, companies, and founders around shared outcomes, and ensuring that progress benefits people and respects the environment.
          </div>
          <div className='text-justify text-white pb-4'>
            We advance our mission through strategic funding, incubations, acquisitions, and tailored mandates.
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AboutUs