'use client'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
import { GoArrowUpRight } from 'react-icons/go';
import vaultIcon from "../../../public/assests/vault-icon.png";
import BorderButton from '../Buttons/BorderButton';
import './WhatWeDo.css';

const CARD_DATA = [
  {
    number: "01",
    title: "Investments",
    subtitle: "Investments Strategy",
    focus: "Growth Focused",
    description:
      "Tailored investment strategies that focus on high-yield opportunities and risk mitigation. Our team leverages global market insights to ensure your portfolio is resilient and growth-oriented across diverse asset classes.",
    details: [
      "Direct Investments",
      "Co-investment Opportunities",
      "Fund Selection",
      "Private Equity"
    ]
  },
  {
    number: "02",
    title: "Wealth Services",
    subtitle: "Wealth Services",
    focus: "Growth Focused",
    description:
      "Vault’s Wealth services support the structuring, protection and long-term oversight of private wealth through established vehicles in Switzerland and the UAE.",
    details: [
      "Capital Allocation",
      "Portfolio Rebalancing",
      "Risk Assessment",
      "Emerging Markets"
    ]
  },
  {
    number: "03",
    title: "Special Mandates",
    subtitle: "Special Mandates",
    focus: "Tailored Solutions",
    description:
      "Bespoke mandates for unique client requirements, providing specialized financial advisory, asset management, and acquisition support in emerging and strategic sectors.",
    details: [
      "Advisory Services",
      "M&A Support",
      "Sector Research",
      "Deal Origination"
    ]
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const prevIndexRef = useRef<number>(0);

  useEffect(() => {
    if (prevIndexRef.current !== activeIndex) {
      setAnimate(false); // reset animation
      const timeout = setTimeout(() => setAnimate(true), 10); // restart animation
      return () => clearTimeout(timeout);
    } else {
      setAnimate(true);
    }
    // eslint-disable-next-line
  }, [activeIndex]);

  useEffect(() => {
    // On mount, set animate to true to show default state
    setAnimate(true);
  }, []);

  return (
    <div className="pt-4 pt-lg-5 position-relative d-flex flex-column gap-4 what-we-do">
      <div className='px-4 d-flex flex-column gap-4 py-4'>
        <div className='primary-text text-uppercase letter-spacing fw-semibold fs-15'>
          what we do
        </div>
        <div className='font-libre fs-42 pb-4 text-dark'>
          A structured approach to private capital
        </div>
      </div>
      <Row className='g-0'>
        <Col lg={3}>
          <div className='what-we-do-card pt-5 d-flex flex-column gap-2'>
            {CARD_DATA.map((item, idx) => (
              <div
                key={item.title}
                className={
                  `what-we-do-card-text d-flex gap-3 align-items-center text-white font-libre fs-18 ` +
                  (activeIndex === idx ? "active " : "")
                }
                onClick={() => {
                  prevIndexRef.current = activeIndex;
                  setActiveIndex(idx);
                }}
              >
                <span>
                  {item.number}
                </span>
                <span>{item.title}</span>
                <span className='flex-grow-1 d-flex justify-content-end'>
                  <BsArrowRight size={24} />
                </span>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={9}>
          <div className='px-5 d-flex py-5 h-100 bg-secondary'>
            <div className={`d-flex flex-column gap-4 w-100 ${animate ? 'fade-slide-in' : ''}`}>
              <div className='text-dark letter-spacing fw-semibold fs-15'>
                {CARD_DATA[activeIndex].focus}
              </div>
              <div className='text-dark fs-18 fw-semibold'>
                {CARD_DATA[activeIndex].subtitle}
              </div>
              <div className='text-justify text-dark'>
                {CARD_DATA[activeIndex].description}
              </div>
              {CARD_DATA[activeIndex].details && (
                <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: 20 }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {CARD_DATA[activeIndex].details.slice(0, 2).map((text, i) => (
                      <li className="text-dark pb-2 d-flex align-items-center gap-2 fs-15" key={i}>
                        <Image src={vaultIcon} alt="vaultIcon" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {CARD_DATA[activeIndex].details.slice(2, 4).map((text, i) => (
                      <li className="text-dark pb-2 d-flex align-items-center gap-2 fs-15" key={i}>
                        <Image src={vaultIcon} alt="vaultIcon" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <BorderButton
                  text="EXPLORE"
                  style={{ color: "#000" }}
                  sufixIconChildren={<GoArrowUpRight size={20} />}
                  borderColorWhite={false}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WhatWeDo