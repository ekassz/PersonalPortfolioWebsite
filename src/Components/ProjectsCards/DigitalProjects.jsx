import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import {Row, Col, Container, Button, Modal, Carousel} from 'react-bootstrap';
import Me from "../../Assets/me.mp4";
import Aesthetics from "../../Assets/Aesthetics.mp4";
import AlteredImage from "../../Assets/AlteredImage-1.jpg";
import CapyCollage from "../../Assets/RoblesEmili_TheNaturalWorld1.jpg";
import HomeCollage from "../../Assets/RoblesEmili_TheNaturalWorld2.jpg";
import './Projects.css';

function DigitalProjects() {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [showCarousel, setShowCarousel] = useState(false);

    const handleOpenModal = (image) =>{
      setModalImage(image);
      setShowModal(true);
    };

    const handleOpenCarousel= () =>{
      setShowCarousel(true);
    };

    const handleClose = () => {
      setShowModal(false);
      setShowCarousel(false);
    };

  return (
    <Container className='title'>
      <h2 className='text-center'>Digital Projects</h2>
    <Row className="row-equal-height g-4">
    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="primary" style={{ width: '100%' }}>
      
      <video width="100%" controls>
              <source src={Me} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      <Card.Body>
        <Card.Title>Adobe School Video Edit</Card.Title>
        <Card.Text>
            Made this to represent where I currently am in life academically. Wraps up with it going to my senior year journal where I was deciding where to go.
           </Card.Text>
      </Card.Body>
      <Card.Body>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="secondary" style={{ width: '100%' }}>
      
      <video width="100%" controls>
              <source src={Aesthetics} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      <Card.Body>
        <Card.Title>Aesthetics Technical Edit</Card.Title>
        <Card.Text>
          @Bey0ndMe was an Instagram account I used to post edits regarding fan edits, shows etc. I started this editing account back in 2018 and gained around 15K followers.
          </Card.Text>
      </Card.Body>
      <Card.Body>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="success" style={{ width: '100%' }}>
      <Card.Img variant="top" src={AlteredImage} onClick={()=> handleOpenModal(AlteredImage)} className='project-card'/>
      <Card.Body>
        <Card.Title>Altered Image Photoshop</Card.Title>
        <Card.Text>
          Worked with Photoshop to work with making unrealistic photos realistic. Learned masking, grain levels and lighting to make it looks historical.
          </Card.Text>
      </Card.Body>
      <Card.Body>
        </Card.Body>
    </Card>
    </Col>

    <Col xs={6} md={4} lg={3}> {/*xs - 2 cards, md - 3, lg -4*/}
  
    <Card className="project-card" border="warning" style={{ width: '100%' }}>
      <Card.Img variant="top" src={CapyCollage} onClick={handleOpenCarousel}/>
      <Card.Body>
        <Card.Title>Collages in Premiere Pro</Card.Title>
        <Card.Text>
          Worked with Photoshop to work with making unrealistic photos realistic. Learned masking, grain levels and lighting to make it looks historical.
          </Card.Text>
      </Card.Body>
      <Card.Body>
        </Card.Body>
    </Card>
    </Col>


    </Row>
    <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <img src={modalImage} alt="Enlarged View" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>

      {/* Modal for Slideshow */}
      <Modal show={showCarousel} onHide={handleClose} centered>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img src={CapyCollage} alt="CapyCollage" style={{ width: '100%' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={HomeCollage} alt="HomeCollage" style={{ width: '100%' }} />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

    </Container>
  );
}

export default DigitalProjects;
