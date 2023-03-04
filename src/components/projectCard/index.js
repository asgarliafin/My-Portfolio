import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './projectCard.scss';

const ProjectCard = ({ id, title, desc, img, link, github, tags }) => {
  return (
    <Col id='projectCard' lg={4} xs={10} sm={8} md={6}>
      <Link to={link} className="card-heading">
        <Image src={img} />
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className={'card-title'}>{title}</h4>
          <div className={'card-links'}>
            <Link to={link}>
              <Image src={'https://braydentw.io/_next/image?url=%2Fstatic%2Ficons%2Fexternal-link.svg&w=16&q=75'} />
            </Link>
            <Link to={github}>
              <Image src={'https://braydentw.io/_next/image?url=%2Fstatic%2Ficons%2Fgithub.svg&w=16&q=75'} />
            </Link>
          </div>
        </div>
        <p className="card-text">
            {desc}
          </p>
         <ul className="tag-list d-flex align-items-center">
          {tags.map(tag =>(
            <li className='tag'>{tag}</li>
          ))}
         </ul>
      </div>
    </Col>
  )
}

export default ProjectCard;