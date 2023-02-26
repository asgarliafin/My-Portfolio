import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerData from 'data/footerData.js';
import './footer.scss';


const Footer = () => {
  return (
    <footer id='footer'>
      <Container>
        <Row className='justify-content-center footer-top'>
          <Col lg={9}>
            <Row className='ftr-gap justify-content-between'>
              {footerData.map(({ title, links }) => (
                <Col lg={3} xs={6} md={6} key={title}  className="d-flex flex-column">
                  <h4>{title}</h4>
                  <ListGroup className='d-flex flex-column'>
                    {
                      links.map(({ name, link, icon }) => {
                        const Icon = icon && icon;
                        return (<ListGroup.Item key={name}>
                          <Link className='d-flex align-items-center' to={link}>{icon && <Icon color={"#808cac"} size={"1.25rem"} />}{name}</Link>
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


      </Container>
    </footer>
  )
}
export default Footer;