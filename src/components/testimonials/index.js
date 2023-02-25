import React from 'react'
import { SectionTitle } from 'components';
import testimonialsData from 'data/testimonials.json'
import { Container } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <div>
      <Container>
        <SectionTitle />
        {testimonialsData.map((elm, i) => (
          <div className='testimonialsCard' key={i}>
            Testimonials Card
          </div>
        ))}

      </Container>
    </div>
  )
}

export default Testimonials;