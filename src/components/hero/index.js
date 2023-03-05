import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./hero.scss";

const Hero = () => {
  return (
    <div id='hero'>
      <Container>
        <Row className={'justify-content-center'}>
          <Col lg={8}>
            <p>Hey, I'm Afin.</p>
            <h1>
              I enjoy  <span>building</span>  for the web.
              <Image src={'images/stickers/hero/pop1.svg'} className={'pop1'}/>
              <Image src={'images/stickers/hero/html.svg'} className={'html'}/>
              <Image src={'images/stickers/hero/coder.svg'} className={'coder'} />
              <Image src={'images/stickers/hero/js.svg'} className={'hero'}/>
              <Image src={'images/stickers/hero/code.svg'} className={'code'}/>
              <Image src={'images/stickers/hero/dino.svg'} className={'dino'} />
              <Image src={'images/stickers/hero/paintbrush.svg'} className={'paintbrush'} />
              <Image src={'images/stickers/skills/laptop.svg'} className={'laptop'} />
            </h1>
            <Link to={'/'}>Tell me more</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero;