import React from 'react'
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap'
import Portfolio1 from '../assets/portfolio-4.jpg';
import Portfolio2 from '../assets/Portfolio-1.jpg';

const Works = () => {
    const menuproject = [
        {
            id: '1',
            name: 'CoffeShop Website',
            desk: 'Made with pure HTML and CSS. Already responsive on Desktop, Tablet, Mobile.',
            desk1: 'Made with pure HTML and CSS. Already responsive on Desktop, Tablet, Mobile. If you want to create this website, click the button below.',
            href: 'https://frenxyy.github.io/coffestore/',
            img: Portfolio1
        },
        {
            id: '2',
            name: 'Landing Page E-Commerce',
            desk: 'Made with React JS and Bootstrap, Already Responsive on Desktop, Tablet, Mobile.',
            desk1: 'Made with React JS and Bootstrap, Already Responsive on Desktop, Tablet, Mobile. If you want to create this website, click the button below.',
            href: 'https://landing-ecommerce-react.netlify.app/',
            img: Portfolio2
        },
    ]

    const CenterModal = (props) => {
        return (
            <Modal {...props} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.judul}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.img} height={150} width={250} alt='Project' className='rounded-2 mb-2' />
                    <p className='fw-medium w-75'>
                        {props.desk1}
                    </p>
                    <div className='d-flex justify-content-start align-items-center gap-4'>
                        <Button href='https://instagram.com/mrdhkrnwn' variant='secondary' target='_blank'>Contact Us</Button>
                        <Button href={props.view} variant='secondary' target='_blank'>View Website</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
    
    const [modalShow, setModalShow] = React.useState(null);

  return (
    <>
        <section className='project rounded-1' id='project'>
            <Container className='py-5 text-center text-white'>
                <h4 className='text-info'>Our projects</h4>
                <h2>Works that we already finish it</h2>
                <div className='mx-auto pt-3' style={{ maxWidth: '1080px', marginTop: '30px' }}> 
                    <Row className='row-cols-1 row-cols-md-2 text-start'>
                        {menuproject.map((card) => {
                            return (
                                <Col className='mb-4 text-white' key={card.id}>
                                    <div className='card rounded-3 bg-dark'>
                                        <div className='card-body px-4 py-5 px-md-5'>
                                            <h5 className='fw-bold text-white card-title mb-3'>{card.name}</h5>
                                            <p className='fw-bold card-text text-white-50 mb-3'>
                                                {card.desk}
                                            </p>
                                            <Button variant="primary" className='a' onClick={() => setModalShow(card.id)}>View</Button>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </section>
        {menuproject.map((modal) => {
                return (
                    <CenterModal 
                        key={modal.id}
                        show={modalShow === modal.id} 
                        onHide={() => setModalShow(null)} 
                        judul={modal.name} 
                        img={modal.img} 
                        desk1={modal.desk1}
                        view={modal.href}
                    />
                )
            })}
    </>
  )
}

export default Works;
