import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';
import "animate.css"
export const Projects = () => {
    const projects = [
        {
          title: "A simple store",
          description: "Buy the unique electroinics items",
          imgUrl: projImg3,
          site:"https://e-commerce-with-backend-1.onrender.com/",
          fullStack:true
        },
        {
          title: "My Chat",
          description: "Real time chat with your loved ones",
          imgUrl: projImg1,
          site:"https://chat-deploy-t6or.onrender.com",
          fullStack:true,
        },
        {
          title: "Travel",
          description: "Find the tour package for your next generation",
          imgUrl: projImg2,
          site:"https://new-travel-1.onrender.com/",
          fullStack:false
        },
      ];
  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__slideInUp":""}>
                <h2>Projects</h2>
                    <p>Explore my diverse portfolio showcasing both full-stack and front-end projects, 
                    highlighting my expertise in creating dynamic, responsive, and user-friendly web applications. </p>
                        
                </div>}
                </TrackVisibility>
                <Tab.Container id="projects-tab" defaultActiveKey="All" >
                         <Nav variant="pills" className='nav-pills mb-5 justify-content-cente align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="All">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Full_stack">Full stack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Front" >
                                    Front End
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="All">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Full_stack">
                                <Row>
                                        {
                                            projects.map((project,index)=>{
                                                if(project.fullStack){
                                                    return(
                                                    <ProjectCard key={index} {...project} />
                                                )
                                                }
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Front">
                                <ProjectCard {...projects[2]} />
                                </Tab.Pane>
                            </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt='img'/>
    </section>
  )
}
