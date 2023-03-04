import React from 'react';
import { Link } from 'react-router-dom';
import './more.scss';

const More = () => {
  return (
    <div id='more'>
      <p className='more-text'>
      Hey, hey, hey... I've got even more on <Link to={'https://github.com/asgarliafin'}>my GitHub</Link>!
      </p>
    </div>
  )
}

export default More;