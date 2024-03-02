import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


const Skills = () => {
    const menuService = [
        {
            id: '1',
            name: 'Programming Language',
            desk: 'JavaScript, PHP',
            warna: 'bg-success',
            warnaTeks: 'text-white',
            warnaTeksDesk: 'text-dark-50',
        },
        {
            id: '2',
            name: 'Front End',
            desk: 'React JS, Next JS, Tailwind, Boostrap, HTML, CSS',
            warna: 'bg-primary',
            warnaTeks: 'text-white',
            warnaTeksDesk: 'text-white-50',
        },
        {
            id: '3',
            name: 'DataBase',
            desk: 'PhpMyAdmin',
            warna: 'bg-success',
            warnaTeks: 'text-white',
            warnaTeksDesk: 'text-dark-50',
        },
    ]


  return (
    <>
    <section className='skills py-5' id='skills'>
        <Container className='py-5'>
            <p className='fw-bold text-success mb-2 text-center'>Our My Skills Now</p>
            <h3 className='fw-bold text-center text-white'>Skills That I Have In</h3>
            <div className='mx-auto pt-3' style={{ maxWidth: '900px', marginTop: '30px' }}>
                <Row className='row-cols-1 row-cols-md-2 d-flex justify-content-center'>
                    {menuService.map((card) => {
                        return (
                            <Col className='mb-4' key={card.id}>
                                <div className={`card ${card.warna}`}>
                                    <div className='card-body text-center px-4 py-5 px-md-5' style={{ height: '185px' }}>
                                        <h5 className={`fw-bold card-title mb-3 ${card.warnaTeks}`}>{card.name}</h5>
                                        <p className={`fw-bold ${card.warnaTeksDesk} card-text mb-2`}>
                                            {card.desk} 
                                        </p>
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

export default Skills