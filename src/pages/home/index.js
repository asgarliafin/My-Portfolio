import React, { useState } from 'react';
import { Projects, Skills, Testimonials, CTA, Hero } from 'components';
import './home.scss';

const Home = () => {
  const [element, setElement] = useState(null);
  function propsFunc(e) {
    setElement(e);
    console.log(e);
  }
  return (
    <div id='home'>
      <Hero element={element} />
      <Projects propsFunc={propsFunc} />
      <Skills />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home;