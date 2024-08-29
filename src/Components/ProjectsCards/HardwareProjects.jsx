import Card from 'react-bootstrap/Card';
import {Row, Col, Container, Button} from 'react-bootstrap';
import PCBuild from "../../Assets/PCBuild1.jpg";
import PCBuild2 from "../../Assets/PCBuild2.jpg";
import './Projects.css';

function HardwareProjects() {
  return (
    <Container className='title'>
      <h2 className='text-center'>Hardware Projects</h2>
    <Row className="row-equal-height g-4">
    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="primary" style={{ width: '100%' }}>
      <Card.Img variant="top" src={PCBuild}/>
      <Card.Body>
        <Card.Title>PC Build For Self</Card.Title>
        <Card.Text>
            Budget ~1K. This was my first PC build that I did for personal use. Bought 2 MSI monitors seperately too to match resolution and response rate with AMD 7. Worked the first time I booted the operation system too!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://pcpartpicker.com/user/ekasz/saved/R4mTmG">PC Part Picker</Button>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="secondary" style={{ width: '100%' }}>
      <Card.Img variant="top" src={PCBuild2}/>
      <Card.Body>
        <Card.Title>PC Build For Partner</Card.Title>
        <Card.Text>
            Budget ~1K. I built this for my boyfriend who was on a budget and wanted a simple look for gaming and work. I added a more advance mobo to create better resolution response.
            </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="https://pcpartpicker.com/list/n8xKfy">PC Part Picker</Button>
        </Card.Body>
    </Card>
    </Col>

    

    </Row>
    </Container>

    
    
  );
}

export default HardwareProjects;
