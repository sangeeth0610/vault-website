import { Col, Row } from 'react-bootstrap';

const detailsData = [
  {
    heading: "Our foundation is strong operational capacity.",
    body: (
      <>
        It allowed us to build trust of investors and pivot into growth oriented multi-family office. Vault was founded by four partners with diverse experience in law, finance and business. Together, they have advised on and executed several billions in transactions over 25 years, working closely with founders, families and institutions across multiple jurisdictions.
      </>
    ),
  },
  {
    heading: "Before coming together at Vault,",
    body: (
      <>
        The founders held leadership positions as COOs, NEDs, CLOs and CFOs within unicorns and investment platforms. This mix of investment and operating experience shaped a very practical way of working, focused on outcomes.
      </>
    ),
  },
  {
    heading: "Now united under Vault MFO",
    body: (
      <>
        The recipe proposed by Vault People has been helpful for many founders and investors. Just right balance between operational and investor acumen set Vault’s portfolio companies from ambitious vision to multi-billion corporations.
      </>
    ),
  },
];

const Details = () => {
  return (
    <div className="px-4 py-5 d-flex flex-column gap-4">
      {detailsData.map((item, idx) => (
        <Row
          className="g-4 pb-5 mb-5"
          style={{ borderBottom: "1px solid var(--border)" }}
          key={idx}
        >
          <Col md={6}>
            <div className="font-libre fs-26 text-dark fw-semibold">
              {item.heading}
            </div>
          </Col>
          <Col md={6} className='d-none d-lg-block' />
          <Col md={2} className='d-none d-lg-block' />
          <Col md={10}>
            <div className="d-flex justify-content-end fs-16">
              {item.body}
            </div>
          </Col>
        </Row>
      ))}
    </div>
  )
}

export default Details