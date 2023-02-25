import React from 'react';
import { Container, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import routesData from 'data/routesData';
import './navbar.scss';

const Navbar = () => {
  const { pathname } = useLocation();

  const name = "Afin Asgarli";

  return (
    <nav id='navbar'>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to={""} className="navbar-brand d-flex align-items-center">
          <Image src={"images/logos/logo_no_text.svg"} width={"60"} />
          <div className='name d-flex'>
            {name.split(" ").map((word, i) => <span className='word d-flex' key={i}>{word.split("")
              .map((letter, u) => <b className='letter' key={u}>{letter}</b>)}</span>)}
          </div>
        </Link>
        <ListGroup className='navbar-nav d-flex align-items-center justify-content-between'>
          {routesData.map(({ path, title }) => (
            <ListGroup.Item key={title}>
              <Link to={path} className={pathname === path ? "active nav-link" : "nav-link"}>{title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </nav>
  )
}

export default Navbar;