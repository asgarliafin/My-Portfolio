import { Heading, More, ProjectCard } from 'components';
import React, { useEffect } from 'react';
import ProjectsData from 'data/projects.json';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './projectsPage.scss';


const ProjectsPage = () => {

  const {path} = useLocation();

  useEffect(
    ()=>{
      window.scrollTo(0,0)
    }, [path]
  )

  return (
    <div id='projectsPage'>
      <Container>
        <Heading />
        <Row style={{rowGap : "35px"}} className={'justify-content-center'}>
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