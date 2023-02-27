import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerData, { logos } from 'data/footerData.js';
import { FiGithub } from 'react-icons/fi';
import './footer.scss';


const Footer = () => {

  const repoLink = "https://github.com/asgarliafin/My-Portfolio";

  return (
    <footer id='footer'>
      <Container>
        <Row className='justify-content-center footer-top'>
          <Col lg={9}>
            <Row className='footer-links justify-content-between'>
              {footerData.map(({ title, links }) => (
                <Col lg={3} xs={6} md={6} key={title} className="d-flex flex-column">
                  <h4>{title}</h4>
                  <ListGroup className='d-flex flex-column'>
                    {
                      links.map(({ name, link, icon }) => {
                        const Icon = icon && icon;
                        return (<ListGroup.Item key={name}>
                          <Link className='d-flex align-items-center' to={link}>
                            {icon && <Icon color={"#808cac"} size={"1.25rem"} />}{name}
                          </Link>
                        </ListGroup.Item>)
                      }
                      )
                    }
                  </ListGroup>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center footer-bottom'>
          <Col lg={9} className='d-flex flex-column'>
            <div className="made-with d-flex justify-content-center align-items-center">Made With
              <div className="logos d-flex align-items-center">
                {logos.map(({ link }) => (
                  <span><Image src={link} width={"26"} /></span>
                ))}
              </div>
            </div>
            <div className="copyright">
              Made by <a href="mailto:afinasgarli0@gmail.com"> Afin Asgarli</a>. All rights reserved.
            </div>
          </Col>
        </Row>
        <Link to={repoLink} className='source-code d-flex justify-content-between align-items-center'>
          <FiGithub size={"1.25rem"} />  View Source Code
        </Link>
      </Container>
    </footer>
  )
}
export default Footer;