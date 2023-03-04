import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './heading.scss';

const Heading = () => {
  return (
    <div id={'heading'}>
      <Container>
        <Row className={'justify-content-center'}>
          <Col lg={8}>
            <h1>Projects</h1>
            <p>I've built cool apps and websites using anything from HTML to React (and even PHP!). Here are some of my favorite projects over the course of my journey.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Heading;