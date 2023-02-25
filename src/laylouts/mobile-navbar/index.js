import React, { useState } from 'react'
import { Button, Container, Image, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';
import routesData from 'data/routesData';
import './mobile-navbar.scss';

const MobileNavbar = () => {

  const { pathname } = useLocation();

  const name = "Afin Asgarli";

  const [menu, setMenu] = useState(true);


  return (
    <nav id='mobile-navbar'>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to={""} className="navbar-brand d-flex align-items-center">
            <Image src={"images/logos/logo_no_text.svg"} width={"60"} />
            <div className='name d-flex'>
              {name.split(" ").map((word, i) => <span className='word d-flex' key={i}>{word.split("")
                .map((letter, u) => <b className='letter' key={u}>{letter}</b>)}</span>)}
            </div>
          </Link>
          <div className="burger-menu">
            <Button onClick={() => setMenu(prev => !prev)} className='burger-icon'>
              <VscChromeClose className={menu ? "active" : null} />
              <AiOutlineMenu className={!menu ? "active" : null} />
            </Button>
          </div>
        </div>
        <ListGroup className={`navbar-nav d-flex flex-column menu ${!menu ? "active" : null}`}>
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

export default MobileNavbar;