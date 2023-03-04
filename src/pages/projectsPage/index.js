import { Heading, More, ProjectCard } from 'components';
import React from 'react';
import ProjectsData from 'data/projects.json';
import { Container, Row } from 'react-bootstrap';
import './projectsPage.scss';


const ProjectsPage = () => {
  return (
    <div id='projectsPage'>
      <Container>
        <Heading />
        <Row style={{rowGap : "35px"}}>
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Row>
        <More />
      </Container>
    </div>
  )
}

export default ProjectsPage;