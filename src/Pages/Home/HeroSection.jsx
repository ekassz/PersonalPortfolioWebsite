import ReactRoundedImage from "react-rounded-image";
import profile from '../Images/profile.jpg';
import React from "react";
import {Col, Row, Container} from 'react-bootstrap';
import Techstack from "../../Components/TechStack/Techstack";
import { useNavigate } from "react-router-dom";
import ContactBox from "../../Components/ContactBox";
import ProjectCards from "../../Components/ProjectsCards/ProjectCards";
import TechnicalBG from "../../Components/Experience/TechnicalBG";

export default function HeroSection() {
    const navigate = useNavigate();

    const handleContactMe = () =>{
        navigate("/contactme");
    };

    return(
        <section id="heroSection" className="hero--section">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} sm={12}>
                        <div className="hero--section--content--box">
                            <h1 className="hero--section--title">
                                <span className="hero--section--title-color">
                                    <span className="hello-highlight-text">Hello! Hola!</span>
                                    <br />
                                    I'm Emili,
                                </span>
                                <br />
                                and interested in: <span className="highlighted-SWE-text">UX/UI, HCI, & SWE!</span>
                            </h1>
                            <p className="hero--section--description">
                                I am currently a senior at the University of Wisconsin-Madison studying Computer Science & Data Science, with minors in Digital Studies and Leadership.
                            </p>
                            <button className="btn btn-primary" onClick={handleContactMe}>Get in Touch</button>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="text-center">
                        <div className="hero--section--img">
                            <ReactRoundedImage
                                image={profile}
                                roundedSize="17"
                                roundedColor="#F9E8C8"
                                hoverColor="#DAAF5B"
                                imageHeight="100%"
                                imageWidth="100%"
                            />
                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                <TechnicalBG/>
                <Techstack />
                <ProjectCards/>
                <div className="contact-box-container">
                    <ContactBox />
                </div>
            </Container>
        </section>
    );
}
