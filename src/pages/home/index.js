import React from 'react';
import {  Projects, Skills, Testimonials, CTA } from 'components';
import './home.scss';

const Home = () => {
  return (
    <div id='home'>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Home;