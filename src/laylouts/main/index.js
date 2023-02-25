import React, { Children } from 'react';
import { Container } from 'react-bootstrap';
import './main.scss';

const Main = ({children}) => {
  return (
    <main id='main'>{children}</main>
  )
}

export default Main;
