import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './projectCard.scss';

const ProjectCard = ({ id, title, desc, img, link, github, tags }) => {
  return (
    <Col id='projectCard' lg={4} xs={11} sm={8} md={6}>
      <Link to={link} className="card-heading">
        <Image src={img} />
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className={'card-title'}>{title}</h4>
          <div className={'card-links align-items-center'}>
            <Link to={link}>
              <FiExternalLink color={'#00c7ff'} size={"1.2em"}/>
            </Link>
            <Link to={github}>
              <FiGithub color={'#00c7ff'} size={"1.1em"}/>
            </Link>
          </div>
        </div>
        <p className="card-text">
          {desc}
        </p>
        <ul className="tag-list d-flex align-items-center">
          {tags.map((tag, i) => (
            <li className='tag' key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </Col>
  )
}

export default ProjectCard;