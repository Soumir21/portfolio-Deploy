import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/MY-Pic.svg"
import TrackVisibility from 'react-on-screen';
import "animate.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Contact = () => {
    const formInitialDetails={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    }

    const [formDetails,setFormDetails]=useState(formInitialDetails);
    const [buttonText,setButtonTextt]=useState("send")
    const [status,setStatus]=useState({});
    const onFormUpdate=(category,value)=>{
        setFormDetails(prev=>({
            ...prev,
            [category]:value
    }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("Hi")
        if(!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone ){
            console.log(formDetails)
            toast.error("Fill all the fields !");
        }
        else{
            setButtonTextt("Sending...");
            let response=await fetch("https://portfolio-deploy-9zuz.onrender.com/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify(formDetails)
            });
    
           
            let result=await response.json();
            setButtonTextt("Send");
            setFormDetails(formInitialDetails);
            if(result.code===200){
                setStatus({success: true,message:"Message sent successfully"})
            }
            else{
                setStatus({success: false,message:"Something went wrong, try again later"})
            }

        }
      

    }
  return (
    <section className='contact' id='contact'>
        <Container>
            
            <TrackVisibility
            >
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__zoomIn":""}>
                <Row  className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Use' />
                </Col>
                <Col>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type='text' value={formDetails.firstName}
                                 placeholder='First Name'
                                 onChange={(e)=>onFormUpdate('firstName',e.target.value)} />
                            </Col>

                            <Col sm={6} className="px-1">
                            <input type='text' value={formDetails.lastName}
                                 placeholder='Last Name'
                                 onChange={(e)=>onFormUpdate('lastName',e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type='email' value={formDetails.email}
                                 placeholder='Email'
                                 onChange={(e)=>onFormUpdate('email',e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type='tel' value={formDetails.phone}
                                 placeholder='phone'
                                 onChange={(e)=>onFormUpdate('phone',e.target.value)} />
                            </Col>
                            <Col>
                                <textarea rows="6" value={formDetails.message}
                                placeholder='Message' onChange={(e)=>onFormUpdate('message',e.target.value)} />
                                <button type='submit'><span>{buttonText}</span></button>
                               
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger":"success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
                </Row>

                </div>}
            </TrackVisibility>
        </Container>
    </section>
  )
}