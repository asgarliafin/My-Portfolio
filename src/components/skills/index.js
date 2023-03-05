import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SkillsData from 'data/skills.json';
import './skills.scss';

const Skills = () => {
  return (
    <div id='skills'>
      <Container>
        <Row className="justify-content-between wr">
          <Col lg={6} md={12} className={'left'}>
            <div className='left-wr'>
              <h2>I got the experience. <br /> Here is my toolbelt for success.    </h2>
              <Image src={'images/stickers/skills/laptop.svg'} className='laptop' />
              <Image src={'images/stickers/skills/coding.svg'} className='coding' />
              <Image src={'images/stickers/skills/fillStar.svg'} className='fillStart' />
              <Image src={'images/stickers/skills/youtube.svg'} className='youtube'/>
            </div>
          </Col>
          <Col lg={6} className={'right'}>
            <Row className='skills-row'>
              {SkillsData.map(({ title, icon },i) => (
                <Col lg={2} xs={4} sm={3} md={2} className="skill-item" title={title} key={i}>
                  <Image src={icon} className="icon" />
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