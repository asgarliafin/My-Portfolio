import React from 'react';
import TestimonialsData from 'data/testimonials.json'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './testimonials.scss';

const Testimonials = () => {
    return (
        <div id='testimonials'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={10} sm={12} xs={12}>
                        <Row className='testimonials-row'>

                            {TestimonialsData.map(({ quote, name, job }, i) => (
                                <Col lg={4} xs={10} sm={5} md={4}>
                                    <div className="testimonials-card d-flex flex-column justify-content-between">
                                        {i === 0 && <Image src={"/images/stikers/testimonials/yay.svg"} className='yay' />}
                                        <p className='quote'>"{quote}"</p>
                                        <p className='info'>
                                            <b className='name'>{name}</b> - <span className='job'>{job}</span>
                                        </p>
                                        {i == 2 && <Image src="/images/stikers/testimonials/squiggle2.svg" className='squiggle2'/>}
                                    </div>
                                </Col>
                            ))}

                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials;