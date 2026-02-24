import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { GoArrowUpRight } from 'react-icons/go';
import expand from "../../../public/assests/expand.png";
import layers from "../../../public/assests/layers.png";
import light from "../../../public/assests/light-bulb.png";
import network from "../../../public/assests/network.png";
import AnimatedFillButton from '../Buttons/AnimatedFillButton';
import './PartnerWithUs.css';



const partnerData = [
  {
    img: network,
    title: "Network Effect",
    description: "Multiply network of investors and business with Vault.",
  },
  {
    img: light,
    title: "Know How",
    description: "Exchange business or operational know-how with Vault.",
  },
  {
    img: layers,
    title: "Industry Expertise",
    description: "Exchange deep industry insights with Vault.",
  },
  {
    img: expand,
    title: "Expand Reach",
    description: "Expand your reach to deal flow.",
  },
];

const PartnerWithUs = () => {
  return (
    <div className="partner-with-us">
      <Row className="g-0 partner-wrapper">
        <Col
          md={6}
          className="partner-left"
        >
          <div className="w-100 px-4 pt-5 d-flex flex-column gap-4 py-4">
            <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15 pb-2 pt-1">
              Partner With Us
            </div>
            <div className="font-libre fs-42 pb-4 text-white">
              Become our <br /> Operating Partner
            </div>
            <AnimatedFillButton
              text="CONTACT US"
              sufixIconChildren={<GoArrowUpRight color="var(--primary-blue)" size={20} />}
            />
          </div>
        </Col>

        <Col
          md={6}
          className="partner-right"
        >
          {partnerData.map((item, i) => (
            <div
              key={i}
              className="d-flex justify-content-center gap-3 p-4 partner-with-us-content flex-column"
              style={{ minHeight: "420px" }}
            >
              <Image src={item.img} alt={item.title} />
              <div className="d-flex flex-column justify-content-center">
                <div className="font-libre fs-42 text-white">
                  {item.title}
                </div>
                <div className="text-secondary fs-15 fw-lighter"  >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default PartnerWithUs;