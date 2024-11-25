import {Row, Col, Container} from 'react-bootstrap';
import LinkTreeEmili from '../../Assets/LinkTreeEmili.png';
import TestRail from '../../Assets/TestRail.png';
import BadgerChat from '../../Assets/BadgerChat.png';
import Survey from '../../Assets/Survey.png';
import PieceItPC from '../../Assets/PieceItPC.png';
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
            <MDBCard className="project-card" border="danger" style={{ width: 'auto'}}>
                <MDBCardImage
                src={PieceItPC}
                position="top"
                alt="linktree"/>
                <MDBCardBody>
                    <MDBCardTitle>PieceItPC App</MDBCardTitle>
                    <MDBCardText>
                      Currently developing an android app to help users get knowledgable with building a PC. In a team of 4, we're utilizing Kotlin Programming, Firebase: Authentication, Realtime Database and Cloud Storage.
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/PieceItPC" className="stretched-link">PieceItPC Repo</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}>
            <MDBCard className="project-card" border="primary" style={{ width: 'auto'}}>
                <MDBCardImage
                src={LinkTreeEmili}
                position="top"
                alt="linktree"/>
                <MDBCardBody>
                    <MDBCardTitle>Personal Link Tree</MDBCardTitle>
                    <MDBCardText>
                      Made a personal link tree website to learn front-end development using HTML and CSS. Includes both projects and social links to side hobbies.
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://sage-stardust-ee1f32.netlify.app/" className="stretched-link">Link Tree</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="warning" style={{ width: '100%'}}>
                <MDBCardImage
                src={TestRail}
                position="top"
                alt="automation"/>
                <MDBCardBody>
                    <MDBCardTitle>Android Test Case Automation Tool</MDBCardTitle>
                    <MDBCardText>
                      This was an intern project where I worked with Kotlin, Postman and the Starbucks android mobile codebase to implement an automation tool to update test cases in test rail faster.
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://drive.google.com/file/d/1YbILVpz5NGgpzPRSIDV9NTcj_6AwlbKc/view?usp=sharing" className="stretched-link">Automation Tool</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="danger" style={{ width: '100%'}}>
                <MDBCardImage
                src={BadgerChat}
                position="top"
                alt="badgerchat"/>
                <MDBCardBody>
                    <MDBCardTitle>Badger Chat Room</MDBCardTitle>
                    <MDBCardText>
                      Used an API generated from my class to get student data and created an app where you create your own personal account and can post messages for anyone else in the class with an account to see.
                    </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/BadgerBook/tree/main" className="stretched-link">Badger Chat</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

            <Col xs={12} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
            <MDBCard className="project-card" border="primary" style={{ width: '100%'}}>
                <MDBCardImage
                src={Survey}
                position="top"
                alt="stbxhack"/>
                <MDBCardBody>
                    <MDBCardTitle>Hack Survey App</MDBCardTitle>
                    <MDBCardText>
                      Participated in a Hack Week within Starbucks and integrated a survey pop-up feature in the Starbucks app using React-Native. We ended up making it to the Sweet 16 rounds!
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/SurveyInApp" className="stretched-link">Starbucks Hack</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>
            
            </Row>
        </Container>
            
                    
     </section>
    )
}

export default ProjectCards;
