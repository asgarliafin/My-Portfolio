import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SkillsData from 'data/skills.json';
import './skills.scss';

const Skills = () => {
  return (
    <div id='skills'>
      <Container>
        <Row className="justify-content-between">
          <Col lg={6} style={{background : "darkred"}}>
            <h2>I got the experience. <br /> Here is my toolbelt for success.</h2>
          </Col>
          <Col lg={6} style={{background : "blue"}}>
            <Row className='skills-row'>
            {SkillsData.map(({title, icon}) =>(
              <Col lg={2} className="skill-item" title={title}>
                <Image src={icon} className="icon" width={"40"}/>
                <span className='title'>{title}</span>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills;