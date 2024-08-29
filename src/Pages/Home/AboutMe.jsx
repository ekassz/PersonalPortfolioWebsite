import React from "react";
import uwImg from "../Images/uwpic.JPG"
import {Col, Row, Container} from 'react-bootstrap';
import wiscience from "../../Assets/wiscience.png";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../../Components/ProjectsCards/Projects.css';
import LSA from "../../Assets/LSA.jpg";
import RTC from "../../Assets/RTC.png";
import Merit from "../../Assets/merit.jpg";
import MLT from "../../Assets/MLT.png";
import ATLAS from "../../Assets/ATLASFill.jpeg";

export default function AboutMe(){
    return(
     <section id="aboutme" className="hero--section">
        <Container className="title text-center">
            <Row>
                <Col md={6} xs={12} className="leftBoxContent">
                <img src={uwImg} alt="uwImage" className="img-fluid"/> 
                </Col>

                <Col md={6} xs={12} className="rightBoxContent">
                <p className="text-lg">
                    <span className="hero--section--title--color">Hello! </span>
                    My name is Emili and I'm a first-generation, low-income, Latina student.
                     <br/>
                     Because of my background, I was set to pave the path early on. I witnessed what it meant to struggle financially and essentially gained the role of a second mother to my younger sibling. I knew that whatever career path I chose- I needed to give pass down all my resources and help to my brother.
                    <br/>
                    In college now, I participate in organizations like Wiscience, where I help welcome freshmen from minority backgrounds, host events to teach them about academic and professional opportunities. I also am a student ambassador for the College of Letters & Science at my school where I have the opportunity to make a change for POC communities at my school. I aspire to not only pursue my dreams but help people like me and my brother forge that pathway too.
                </p>
                </Col>
            </Row>
            <br/>
            <h2>Currently Participating In....</h2>
            <Row>
            <MDBCard className="projects-card m-3" border="primary" style={{ width: '18rem', height: 'auto'}}>
                <MDBCardImage
                src={wiscience}
                position="top"
                alt="Wiscience"/>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                    <MDBCardTitle>STEM Immersion: Peer Leader</MDBCardTitle>
                    <MDBCardText>
                        Leads accountability groups each week to advise and help them through their STEM career.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://wiscience.wisc.edu/2024/02/05/meet-2024-peer-leader-emili-robles/" className="stretched-link">Peer Leader Intro</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="projects-card m-3" border="secondary" style={{ width: '18rem', height: 'auto'}}>
                <MDBCardImage
                src={LSA}
                position="top"
                alt="LSAmbassador"/>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                    <MDBCardTitle>L&S College: Student Ambassador</MDBCardTitle>
                    <MDBCardText>
                        Meets with the L&S Dean to talk about potential improvements surrounding L&S students and creating inclusivity.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://ls.wisc.edu/current-students/deans-ambassadors" className="stretched-link">Peer Leader Intro</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="projects-card m-3" border="warning" style={{ width: '18rem', height: 'auto'}}>
                <MDBCardImage
                src={RTC}
                position="top"
                alt="RTCLeader"/>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                    <MDBCardTitle>RTC: Summer Leader & Member</MDBCardTitle>
                    <MDBCardText>
                        Served as a summer hub leader in Seattle by hosting events for ~40 interns. And I'm also a part of their Latina community for tech opportunities.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://www.instagram.com/p/C7pKCwZsa-L/?img_index=4" className="stretched-link">Summer Leader</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="projects-card m-3" border="danger" style={{ width: '18rem', height: 'auto'}}>
                <MDBCardImage
                src={Merit}
                position="top"
                alt="MeritIT"/>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                    <MDBCardTitle>Merit Library: IT Student Lead</MDBCardTitle>
                    <MDBCardText>
                        Currently an IT student lead, helping professors with software and hardware problems, as well as training current and new team members.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://www.instagram.com/p/CuHfj4gt7FI/" className="stretched-link">IT Student Lead</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="projects-card m-3" border="primary" style={{ width: '18rem', height: 'auto'}}>
                <MDBCardImage
                src={ATLAS}
                position="top"
                alt="MeritIT"/>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                    <MDBCardTitle>ATLAS: Scholar</MDBCardTitle>
                    <MDBCardText>
                        Part of ATLAS where I get a scholarship for 4 years, internship experience the first 2 year of college, and mentorship along the way. Being the first class, I also serve as a mentor by meeting with new scholars.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://atlasfellows.org/fellow/emili-robles/" className="stretched-link">ATLAS Scholar</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="projects-card m-3" border="secondary" style={{ width: '18rem', height: 'auto'}}>
                <MDBCardImage
                src={MLT}
                position="top"
                alt="MLT"/>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                    <MDBCardTitle>MLT: Tech Track Fellow</MDBCardTitle>
                    <MDBCardText>
                        Accepted into a prestigious tech track program where I attend conferences and get to see the inside look at tech internships. I was able to get connected with Starbucks and get a SWE internship through MLT.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://info.mlt.org/career-prep-software-engineering-swe" className="stretched-link">MLT Tech Track</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            </Row>
        </Container>
            
                    
     </section>
    )
}
