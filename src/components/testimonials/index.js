import React from 'react';
import TestimonialsData from 'data/testimonials.json'
import { Container, Row, Col } from 'react-bootstrap';
import './testimonials.scss';

const Testimonials = () => {
    return (
        <div id='testimonials'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={10} sm={12} xs={12}>
                        <Row className='testimonials-row'>

                            {TestimonialsData.map(({ quote, name, job }) => (
                                <Col lg={4} xs={10} sm={5} md={5}>
                                    <div className="testimonials-card d-flex flex-column justify-content-between">
                                        <p className='quote'>"{quote}"</p>
                                        <p className='info'>
                                            <b className='name'>{name}</b> - <span className='job'>{job}</span>
                                        </p>
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