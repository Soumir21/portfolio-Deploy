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
        },
        {
          title: "My Chat",
          description: "Real time chat with your loved ones",
          imgUrl: projImg1,
        },
        {
          title: "Travel",
          description: "Find the tour package for your next generation",
          imgUrl: projImg2,
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
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, </p>
                        
                </div>}
                </TrackVisibility>
                <Tab.Container id="projects-tab" defaultActiveKey="first" >
                         <Nav variant="pills" className='nav-pills mb-5 justify-content-cente align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                    Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
                                <Tab.Pane eventKey="second">
                                        Lorem Impsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                Lorem Impsum
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
