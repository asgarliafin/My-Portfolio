import React from 'react';
import { Container } from 'react-bootstrap';
import './sectionTitle.scss';

const SectionTitle = ({children}) => {
  return (
    <div id='sectionTitle'>
      <h2>{children}</h2>
      <span className='line' ></span>
    </div>
  )
}

export default SectionTitle;