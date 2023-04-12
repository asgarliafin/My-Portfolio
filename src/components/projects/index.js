import React, { useRef, useEffect } from 'react';
import ProjectsData from 'data/projects.json';
import { ProjectCard, SectionTitle } from 'components';
import './projects.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Projects = ({ propsFunc }) => {
  const scrollElement = useRef(null);
  useEffect(() => {
    propsFunc(scrollElement);
  }, [])
  return (
    <div id='projects' ref={scrollElement}>
      <Container>
        <SectionTitle >Here are a few of my favorite projects.</SectionTitle>
        <Row className={'justify-content-center projects-row'}>
          {ProjectsData.slice(0, 3).map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </Row>
        <Row className='justify-content-center'>
          <Col lg={8} sm={8} xs={10} md={8}>
            <Link to={'/projects'} className={'view-all'}>View All</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects;