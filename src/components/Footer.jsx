import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <section className='footer text-center bg-dark text-white'>
        <Container className='py-2'>
          <Row className='row-cols-1 row-cols-lg-3'>
            <Col>
              <p className='my-2 fw-bold text-white-50'>Copyright © 2024 @MrdhKrnwn </p>
            </Col>
            <Col>
              <ul className='list-inline my-2'>
                <li className='list-inline-item me-4 bg-primary rounded-circle'>
                  <a href='https://wa.me/6285841980449' target='_blank' className='p-2 d-flex justify-content-center align-items-center'>
                    <FaWhatsapp size={'1.3em'} fill='white' />
                  </a>
                </li>
                <li className='list-inline-item me-4 bg-primary rounded-circle'>
                  <a href='https://instagram.com/mrdhkrnwn' target='_blank' className='p-2 d-flex justify-content-center align-items-center'>
                    <FaInstagram size={'1.3em'} fill='white' />
                  </a>
                </li>
                <li className='list-inline-item bg-primary rounded-circle'>
                  <a href='https://github.com/frenxyy' target='_blank' className='p-2 d-flex justify-content-center align-items-center'>
                    <FaGithub size={'1.3em'} fill='white' />
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className='list-inline my-2'>
                <li className='list-inline-item '>
                  <a href="#home" className='text-success'>Home</a>
                </li>
                <li className='list-inline-item '>
                  <a href="#service" className='text-success'>Service</a>
                </li>
                <li className='list-inline-item'>
                  <a href="#project" className='text-success'>Project</a>
                </li>
              </ul>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer