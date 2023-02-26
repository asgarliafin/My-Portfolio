import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerData from 'data/footer.json';
import './footer.scss';


const Footer = () => {
  console.log(footerData);
  return (
    <footer id='footer'>
      <Container className="footer-top">
        <Row className='justify-content-center'>
          <Col lg={9} style={{ backgroundColor: "aqua" }}>
            <Row>
              {footerData.map(({ title, links }) => (
                <Col lg={4} xs={6} md={6}  key={title}>
                  <h4>{title}</h4>
                  <ListGroup>
                    {
                      links.map(({name, link, icon}) =>(
                        <ListGroup.Item key={name} >
                          <Link to={link}>{name}</Link>
                        </ListGroup.Item>
                      ))
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