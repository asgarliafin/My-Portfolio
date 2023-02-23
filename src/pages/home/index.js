import React from 'react';
import { Hero, Projects, Skills, Testimonials, CTA } from 'components';
import './home.scss';

const Home = () => {
  return (
    <div id='home'>
      <Hero/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Home;