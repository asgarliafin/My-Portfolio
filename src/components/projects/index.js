import React from 'react';
import ProjectsData from 'data/projects.json';
import { ProjectCard, SectionTitle } from 'components';
import './projects.scss';
import { Container } from 'react-bootstrap';
const Projects = () => {
  return (
    <div id='projects'>
      <Container>
      <SectionTitle />
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Container>
    </div>
  )
}

export default Projects;