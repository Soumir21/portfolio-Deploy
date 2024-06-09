import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({title,description,imgUrl,site}) => {
  return (
   <Col sm={6} md={4} >
        <div className='proj-imgbx'>
            <img src={imgUrl} style={{objectFit:'cover'}}/>
            <div className='proj-txtx' onDoubleClick={()=>{window.open(site, '_blank')}}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
   </Col>
  )
}
