import React from 'react'
import logo from "../assets/img/duarah.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import TrackVisibility from 'react-on-screen';
import "animate.css"
import { Col, Container, Row } from 'react-bootstrap'
export const Footer = () => {
  return (
   <footer  className='footer'>
    <Container>
    <TrackVisibility
            >
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__fadeInRight":""}>
                <Row className="align-item-center">
                    {/* <MailChimp /> */}
                    <Col  sm={6}>
                        <img src={logo} alt='logo'></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href=''><img src={navIcon1} /></a>
                            <a href=''><img src={navIcon2} /></a>
                            <a href=''><img src={navIcon3} /></a>
                        </div>
                        <p>Copy right 2024, All Right Reserved</p>
                    </Col>
        </Row>
                </div>}
    </TrackVisibility>
        
    </Container>
   </footer>
  )
}
