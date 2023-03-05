import React, { useContext, useState } from 'react'
import { Button, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';
import routesData from 'data/routesData';
import context from 'context';
import './mobile-navbar.scss';


const MobileNavbar = () => {

  const { pathname } = useLocation();

  const name = "Afin Asgarli";

  const {menu, setMenu} = useContext(context);


  return (
    <nav id='mobile-navbar'>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to={""} className="navbar-brand d-flex align-items-center" onClick={() => setMenu(true)}>
            <Image src={"images/logos/download.png"} width={"60"} />
            <div className='name d-flex'>
              {name.split(" ").map((word, i) => <span className='word d-flex' key={i}>{word.split("")
                .map((letter, u) => <b className='letter' key={u}>{letter}</b>)}</span>)}
            </div>
          </Link>
          <div className="burger-menu">
            <Button onClick={() => setMenu(prev => !prev)} className='burger-icon'>
              <VscChromeClose className={!menu ? "active" : null} />
              <AiOutlineMenu className={menu ? "active" : null} />
            </Button>
          </div>
        </div>
      </Container>
      <Container className={`menu-container ${!menu ? "active" : null}`}>
        <ListGroup className={`navbar-nav d-flex flex-column menu`}>
          {routesData.map(({ path, title }) => (
            <ListGroup.Item key={title}>
              <Link to={path} className={pathname === path ? "active nav-link" : "nav-link"} onClick={() => setMenu(true)}>{title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>

      </Container>
    </nav>
  )
}

export default MobileNavbar;