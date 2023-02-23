import { Heading, More, ProjectCard } from 'components';
import React from 'react';
import ProjectsData from 'data/projects.json';
import './projectsPage.scss';

const ProjectsPage = () => {
  return (
    <div id='projectsPage'>
      <Heading/>
      {ProjectsData.map((project)=>(
        <ProjectCard key={project.id} {...project}/>
      ))}
      <More/>
    </div>
  )
}

export default ProjectsPage;