import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css"
import TrackVisibility from 'react-on-screen';
import { ProgressBar } from './ProgressBar';
import { MdComputer } from "react-icons/md";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id="skills">
        <Container className='animate__animated animate__slideInUp'>
            <Row>
                <Col>
               
                    <div className='skill-bx'>        
                    <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__slideInUp":""}>
                        <h2>
                            Skills
                        </h2>
                       
                        <p>Versatile developer with a robust understanding of both frontend and backend technologies, ensuring seamless full-stack integration.
                        Leveraging a cybersecurity background to build secure, efficient web applications that prioritize user safety and data integrity.</p>
                        
                </div>}
                </TrackVisibility>
                <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__bounceIn":""}>
                <Carousel responsive={responsive} infinite={true} className='skill-slider' autoPlay={true} >
                            <div className='item'>
                                <ProgressBar percentage={"90"} Icon={"computer"} className="progress"/>
                                <h5>Front End</h5>
                            </div>
                            <div className='item'>
                            <ProgressBar percentage={"80"} Icon={"backEnd"} className="progress"/>
                                <h5>Back End</h5>
                            </div>
                            <div className='item'>
                            <ProgressBar percentage={"95"}  Icon={"js"} className="progress"/>
                                <h5>Javascript</h5>
                            </div>
                            <div className='item'>
                            <ProgressBar percentage={"80"}  Icon={"mongodb"} className="progress"/>
                                <h5>MongoDb</h5>
                            </div>
                            <div className='item'>
                            <ProgressBar percentage={"60"}  Icon={"azure"} className="progress"/>
                                <h5>Azure</h5>
                            </div>
                            <div className='item'>
                            <ProgressBar percentage={"90"}  Icon={"css"} className="progress"/>
                                <h5>CSS</h5>
                            </div>
                            <div className='item'>
                            <ProgressBar percentage={"90"}  Icon={"html"} className="progress"/>
                                <h5>HTML</h5>
                            </div>
                          </Carousel>
                </div>}
                </TrackVisibility>
                          
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} />
    </section>
  )
}
