import { Col, Row } from 'react-bootstrap';

const detailsData = [
  {
    heading: "Vault is a mission-driven network.",
    body: (
      <>
        Our mission is to promote growth in a responsible manner at all levels.
        In our network, capital grows responsibly towards funders; companies – towards their investors; founders – towards their companies; and industries – towards humans and environment.
      </>
    ),
  },
  {
    heading: "We address the stated mission at",
    body: (
      <>
        all levels of value creation – from wealth structuring, down to direct investment and operational management.
        Such strategy of vertical engagement, normally slow and cumbersome, was made easily possible by diverse background of Vault’s founders and its operating partners.
        Vertical engagement and the network of operating partners are key to performance of our ecosystem.
      </>
    ),
  },
  {
    heading: "To achieve our mission, we",
    body: (
      <>
        orchestrate Vault Investments, Vault PE Advisory and Vault Wealth around talented and ambitious founders and companies.
        We accelerate their growth and improve their chances to deliver on their mission in a responsible manner.
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