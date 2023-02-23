import React from 'react';
import ProjectsData from 'data/projects.json';
import { ProjectCard , SectionTitle} from 'components';
import './projects.scss';
const Projects = () => {
  return (
    <div id='projects'>
      <SectionTitle/>
      {ProjectsData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

export default Projects;