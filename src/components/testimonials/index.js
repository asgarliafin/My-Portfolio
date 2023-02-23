import React from 'react'
import {SectionTitle} from 'components';
import testimonialsData from 'data/testimonials.json'

const Testimonials = () => {
  return (
    <div>
      <SectionTitle/>
      {testimonialsData.map(elm =>{
        return <div className='testimonialsCard'>
          Testimonials Card
        </div>
      })}
    </div>
  )
}

export default Testimonials;