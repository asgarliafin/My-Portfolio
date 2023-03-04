import React from 'react';
import ProjectsData from 'data/projects.json';
import { ProjectCard, SectionTitle } from 'components';
import './projects.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div id='projects'>
      <Container>
      <SectionTitle >Here are a few of my favorite projects.</SectionTitle>
        <Row>
        {ProjectsData.slice(0,3).map((project, i) => <ProjectCard key={project.id} {...project} />)}
        </Row>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <Link to={'/projects'} className={'view-all'}>View All</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects;