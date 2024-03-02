import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const service = () => {
    const menuService = [
        {
            id: '1',
            name: 'Web Development',
            desk: 'I can create websites using technologies such as React JS, Next JS, PHP Native, HTML. (Responsive Website)',
            href: 'https://instagram.com/mrdhkrnwn'
        },
        {
            id: '2',
            name: 'Web Designer',
            desk: 'I can design websites using Figma or Photoshop, Desktop, Tablet, and Mobile-based UI/UX Web.',
            href: 'https://instagram.com/mrdhkrnwn'
        },
    ]

  return (
    <>
        <section className='service rounded-1' id='service'>
            <Container className='py-5 text-center text-white'>
                <h4 className='text-info'>Our Service</h4>
                <h2>What Can I Do ?</h2>
                <div className='mx-auto pt-3' style={{ maxWidth: '1080px', marginTop: '30px' }}> 
                    <Row className='row-cols-1 row-cols-md-2 text-start'>
                        {menuService.map((card) => {
                            return (
                                <Col className='mb-4 text-white' key={card.id}>
                                    <div className='card rounded-3 bg-dark'>
                                        <div className='card-body px-4 py-5 px-md-5'>
                                            <h5 className='fw-bold text-white card-title mb-3'>{card.name}</h5>
                                            <p className='fw-bold card-text text-white-50 mb-3'>
                                                {card.desk}
                                            </p>
                                            <Button variant="primary" className='a' href={card.href}>Contact Us</Button>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}

export default service