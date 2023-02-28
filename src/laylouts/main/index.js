import context from 'context';
import React, { Children, useContext } from 'react';
import { Container } from 'react-bootstrap';
import './main.scss';

const Main = ({children}) => {
  const {menu} = useContext(context);
  return (
    <main id='main' className={!menu ? "active" : null}>{children}</main>
  )
}

export default Main;
