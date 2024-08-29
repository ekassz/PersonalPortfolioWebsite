import Card from 'react-bootstrap/Card';
import {Row, Col, Container, Button} from 'react-bootstrap';
import LinkTreeEmili from '../../Assets/LinkTreeEmili.png';
import MadisonVisual from '../../Assets/MadisonVisual.png';
import TestRail from '../../Assets/TestRail.png';
import BadgerChat from '../../Assets/BadgerChat.png';
import Survey from '../../Assets/Survey.png';
import './Projects.css';

function ProjectCards() {
  return (
    <Container className='title'>
      <h2 className='text-center'>Software Projects</h2>
    <Row className="row-equal-height g-4">
    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="primary" style={{ width: '100%' }}>
      <Card.Img variant="top" src={LinkTreeEmili}/>
      <Card.Body>
        <Card.Title>Personal Link Tree</Card.Title>
        <Card.Text>
          Made a personal link tree website to learn front-end development using HTML and CSS. Includes both projects and social links to side hobbies.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://sage-stardust-ee1f32.netlify.app/">Link Tree</Button>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="secondary" style={{ width: '100%' }}>
      <Card.Img variant="top" src={MadisonVisual}/>
      <Card.Body>
        <Card.Title>Madison Counties Visualization</Card.Title>
        <Card.Text>
          Analyzed the relationship between population density and land use in Wisconsin counties using geospatial data and machine learning models.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://github.com/ekassz/MadisonVisualization">Data Visualization</Button>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="success" style={{ width: '100%' }}>
      <Card.Img variant="top" src={TestRail}/>
      <Card.Body>
        <Card.Title>Android Test Case Automation Tool</Card.Title>
        <Card.Text>
          This was an intern project where I worked with Kotlin, Postman and the Starbucks android mobile codebase to implement an automation tool to update test cases in test rail faster.
           </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://drive.google.com/file/d/1YbILVpz5NGgpzPRSIDV9NTcj_6AwlbKc/view?usp=sharing">Tool Demo</Button>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border='danger' style={{ width: '100%' }}>
      <Card.Img variant="top" src={BadgerChat}/>
      <Card.Body>
        <Card.Title>Badger Chat Room</Card.Title>
        <Card.Text>
        Used an API generated from my class to get student data and created an app where you create your own personal account and can post messages for anyone else in the class with an account to see.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://github.com/ekassz/BadgerBook/tree/main">ChatRoom Project</Button>
        </Card.Body>
    </Card>
    </Col> 

     <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border='warning' style={{ width: '100%' }}>
      <Card.Img variant="top" src={Survey}/>
      <Card.Body>
        <Card.Title>Hack Survey App</Card.Title>
        <Card.Text>
        Participated in a Hack Week within Starbucks and integrated a survey pop-up feature in the Starbucks app using React-Native. We ended up making it to the Sweet 16 rounds!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://github.com/ekassz/SurveyInApp/tree/main">Survey Feature Demo</Button>
        </Card.Body>
    </Card>
    </Col> 

    </Row>
     
    </Container>

    
    
  );
}

export default ProjectCards;
