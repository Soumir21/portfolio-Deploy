import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from "react-icons/fa";
import { useState,useEffect } from 'react';
import logo from "../assets/img/duarah.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
export const NavBar = () => {
  const [activeLink,setActiveLink]=useState("home")
  const [scrrolled,setScrolled]=useState(false);
  const onUpdatetAcitveLink=(value)=>{
    setActiveLink(value)
  }
  useEffect(()=>{
    const onScroll=()=>{
        if(window.scrollY>50){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll",onScroll)

  },[])
  return (
    <Navbar expand="lg" className={scrrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home"?"active navbar-link":"navbar-link"} onClick={()=>onUpdatetAcitveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills"?"active navbar-link":"navbar-link"} onClick={()=>onUpdatetAcitveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects"?"active navbar-link":"navbar-link"} onClick={()=>onUpdatetAcitveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://github.com/Soumir21' target='_blank '><img src={navIcon4} alt=""/></a>
                <a href="https://www.linkedin.com/in/soumir-duarah/" target='_blank '><img src={navIcon1} alt=""/></a>

                <a href='https://www.instagram.com/soumirduarah/' target='_blank '><img src={navIcon3} alt=""/></a>
                
            </div>
            <button onClick={()=>console.log(`contact`)}><span><a href='#contact'>Lets connect</a></span></button>                               
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
