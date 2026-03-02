
'use client';


import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { GoArrowUpRight } from 'react-icons/go';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
} as const;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const validate = (values: FormValues) => {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};

const inputStyle = {
  border: 0,
  borderBottom: '1px solid #D9DBE9',
  borderRadius: 0,
  background: 'transparent',
  fontSize: 16,
};

const Contact = () => {
  return (
    <div className="px-4 py-5 d-flex  align-items-center " style={{ minHeight: "100vh" }}>
      <Row className='flex-grow-1 align-items-center flex-column-reverse flex-md-row'>
        <Col
          md={5}
          lg={4}
          className="mb-5 mb-md-0 d-flex flex-column justify-content-center gap-4"
        >
          <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15 ">
            CONTACT
          </div>
          <div className=''>
            <a
              href="mailto:info@thesultpartners.com"
              className=' text-decoration-none text-dark fs-14'
              style={{
                wordBreak: 'break-all',
              }}
            >
              info@thesultpartners.com
            </a>
          </div>
          <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15 ">
            ADDRESS
          </div>
          <div className=' fs-14 text-dark '
          >
            IFZA Properties, DSO-IFZA
            <br />
            IFZA Business Park,
            <br />
            Dubai Silicon Oasis
          </div>
          <div className=' fs-14 text-dark '>
            Level 7, Gate Avenue
            <br />
            Dubai International Financial Centre
          </div>
        </Col>
        <Col md={7} lg={8}>
          <div className="mb-5 pb-3 mt-5 mt-md-0 pt-5 pt-md-0">
            <div className="font-libre fs-42  text-dark">
              Have a question?
            </div>
            <div className="font-libre fs-42  text-dark">
              Want to work with us?
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
                alert('Message sent!');
              }, 500);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group
                      controlId="firstName"
                      className="mb-3 mb-md-0"
                    >
                      <Form.Label
                        className=' text-dark fs-13 fw-medium'
                      >
                        First name<span className=' ms-2 primary-text'>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        style={inputStyle}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.firstName && !!errors.firstName}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label
                        className=' text-dark fs-13 fw-medium'
                      >
                        Last name<span className=' ms-2 primary-text'>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Surname"
                        style={inputStyle}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.lastName && !!errors.lastName}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label
                    className=' text-dark fs-13 fw-medium'
                  >
                    Email<span className=' ms-2 primary-text'>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="youare@email.com"
                    style={inputStyle}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="company">
                  <Form.Label
                    className=' text-dark fs-13 fw-medium'
                  >
                    Company<span className=' ms-2 primary-text'>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    style={inputStyle}
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group className="" controlId="message">
                  <Form.Label
                    className=' text-dark fs-13 fw-medium'
                  >
                    Message<span className=' ms-2 primary-text'>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={2}
                    placeholder="My message is..."
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      paddingLeft: 0,
                    }}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.message && !!errors.message}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-end mt-5">
                  <Button
                    variant="dark"
                    type="submit"
                    style={{
                      width: 'max-content',
                      minWidth: 144,
                      padding: '9px 16px',
                      textAlign: 'center',
                      borderRadius: 4,
                      letterSpacing: 'var(--letter-spacing)',
                      fontWeight: 500,
                      fontSize: 14,
                      textTransform: 'uppercase',
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : <>SEND MESSAGE <span><GoArrowUpRight size={20} /></span></>}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;