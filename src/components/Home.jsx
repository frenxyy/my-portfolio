import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ImageHome from '../assets/Home-1.jpg'

const Home = () => {
  return (
    <div className='home text-white overflow-x-hidden' id='home'>
        <Container className='justify-content-center'>
            <Col className='d-flex justify-content-around align-items-center flex-wrap gap-md-5'>
                <Row className='gap-3'>
                    <h1>Website Developer & Designer Website</h1>
                    <p>Moch Ridho Kurniawan 🤖, a student 👨‍💻 of SMKN 1 Cibinong,
                      As a Web Developer (FrontEnd) and Web Designer (UI/UX). Has the following skills: React JS, Next JS, PHP Native, JavaScript, HTML, Tailwind, Bootstrap. </p>
                </Row>
                <Image src={ImageHome} height={550} width={550} className='rounded-2' />
            </Col>
        </Container>
    </div>
  )
}

export default Home