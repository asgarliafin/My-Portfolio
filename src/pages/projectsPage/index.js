import { Heading, More, ProjectCard } from 'components';
import React from 'react';
import ProjectsData from 'data/projects.json';
import { Container } from 'react-bootstrap';
import './projectsPage.scss';


const ProjectsPage = () => {
  return (
    <div id='projectsPage'>
      <Container>
        <Heading />
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        <More />
      </Container>
    </div>
  )
}

export default ProjectsPage;