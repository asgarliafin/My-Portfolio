import React from 'react'
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CTA.scss';

const CTA = () => {
  return (
    <div id='cta'>
      <Container className='d-flex flex-column align-items-center'>
        <Image src={'images/stikers/banner/lineBreak.svg'}/>
        <div className='wrapper'>
          <h2 className='title'>Interested in Working Together?</h2>
          <Link to={"mailto:afinasgarli0@gmail.com"} className="link">Get in Touch</Link>
        </div>
        <Image src={'images/stikers/hero/fancyLines.svg'}className='line' />
      </Container>
    </div>
  )
}

export default CTA;