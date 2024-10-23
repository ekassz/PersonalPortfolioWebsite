import Card from 'react-bootstrap/Card';
import {Row, Col, Container, Button} from 'react-bootstrap';
import LinkTreeEmili from '../../Assets/LinkTreeEmili.png';
import MadisonVisual from '../../Assets/MadisonVisual.png';
import TestRail from '../../Assets/TestRail.png';
import BadgerChat from '../../Assets/BadgerChat.png';
import Survey from '../../Assets/Survey.png';
import Portfolio from "../../Assets/Portfolio.png";
import Figma from "../../Assets/figma.png";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Projects.css';

function ProjectCards() {
    return (
    <section id="aboutme">
      <Container className="title">
      <h2 className='text-center'>Software Projects</h2>
            <Row className='row-equal-height g-4'>
            <Col xs={12} md={4} lg={3}>
            <MDBCard className="project-card" border="primary" style={{ width: 'auto'}}>
                <MDBCardImage
                src={LinkTreeEmili}
                position="top"
                alt="Wiscience"/>
                <MDBCardBody>
                    <MDBCardTitle>Personal Link Tree</MDBCardTitle>
                    <MDBCardText>
                      Made a personal link tree website to learn front-end development using HTML and CSS. Includes both projects and social links to side hobbies.
                      </MDBCardText>
                    <MDBBtn tag="a" href="" className="stretched-link">Link Tree</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="secondary" style={{ width: '100%'}}>
                <MDBCardImage
                src={MadisonVisual}
                position="top"
                alt="LSAmbassador"/>
                <MDBCardBody>
                    <MDBCardTitle>Madison Counties Visualization</MDBCardTitle>
                    <MDBCardText>
                        Analyzed the relationship between population density and use in Wisconsin counties using geospatial data and machine learning models.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/MadisonVisualization" className="stretched-link">Peer Leader Intro</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="warning" style={{ width: '100%'}}>
                <MDBCardImage
                src={TestRail}
                position="top"
                alt="RTCLeader"/>
                <MDBCardBody>
                    <MDBCardTitle>Android Test Case Automation Tool</MDBCardTitle>
                    <MDBCardText>
                      This was an intern project where I worked with Kotlin, Postman and the Starbucks android mobile codebase to implement an automation tool to update test cases in test rail faster.
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://drive.google.com/file/d/1YbILVpz5NGgpzPRSIDV9NTcj_6AwlbKc/view?usp=sharing" className="stretched-link">Summer Leader</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="danger" style={{ width: '100%'}}>
                <MDBCardImage
                src={BadgerChat}
                position="top"
                alt="MeritIT"/>
                <MDBCardBody>
                    <MDBCardTitle>Badger Chat Room</MDBCardTitle>
                    <MDBCardText>
                      Used an API generated from my class to get student data and created an app where you create your own personal account and can post messages for anyone else in the class with an account to see.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/BadgerBook/tree/main" className="stretched-link">IT Student Lead</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="primary" style={{ width: '100%'}}>
                <MDBCardImage
                src={Survey}
                position="top"
                alt="MeritIT"/>
                <MDBCardBody>
                    <MDBCardTitle>Hack Survey App</MDBCardTitle>
                    <MDBCardText>
                      Participated in a Hack Week within Starbucks and integrated a survey pop-up feature in the Starbucks app using React-Native. We ended up making it to the Sweet 16 rounds!
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://atlasfellows.org/fellow/emili-robles/" className="stretched-link">ATLAS Scholar</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>
            
            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="danger" style={{ width: '100%'}}>
                <MDBCardImage
                src={Portfolio}
                position="top"
                alt="MeritIT"/>
                <MDBCardBody>
                    <MDBCardTitle>Personal Portfolio</MDBCardTitle>
                    <MDBCardText>
                      Did my own portfolio website, the one you are actually seeing throught right now! I used JS, React, Bootstrap, HTML, and CSS to complete in the span of 1 month. Also did a Figma prototype to be able to play both the designer and front-end roles.
                        </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/PersonalPortfolioWebsite/tree/main" className="stretched-link">Portfolio Repo</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

             <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="primary" style={{ width: '100%'}}>
                <MDBCardImage
                src={Figma}
                position="top"
                alt="MeritIT"/>
                <MDBCardBody>
                    <MDBCardTitle>Figma Portfolio Prototype</MDBCardTitle>
                    <MDBCardText>
                      Worked with Figma to make a background for this website, as well as prototype and design a mockup for how I wanted the elements and structure to look like.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://www.figma.com/proto/hCeTSltuBDuIdWrqXPQVHD/Portfolio?node-id=0-1&t=d6f0Cf876Y8M6wp8-1" className="stretched-link">Figma Prototype</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            </Row>
        </Container>
            
                    
     </section>
    )
}

export default ProjectCards;
