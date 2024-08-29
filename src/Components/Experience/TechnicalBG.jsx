import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import SBPhoto from "../../Assets/StarbucksPhoto.jpg";

export default function TechnicalBG(){
    return(
        <Container className='title text-center'>
            
            <Row>
                <Col md={6} xs={12} className='leftBoxContent'>
                <img src={SBPhoto} class="rounded float-left img-fluid" alt="Portrait"/>
                </Col>

                <Col md={6} xs={12} className='rightBoxContent'>
                <p className='text-lg'>
                    <span className="hero--section--title--color">Hola! </span>
                    My journey into the tech world has been quite an adventure, marked by a few shifts along the way. I initially enrolled at UW-Madison as a Finance major, driven by a long-standing passion for math and a desire to pursue a STEM career. As a first-generation student with limited guidance, business seemed like a practical and secure choice.
                    <br/>
                    I was fortunate enough to receive a scholarship that included an internship opportunity as a Machine Learning intern before my first year of university. That experience was eye-opening and made me realize that my true interests were in tech.
                    <br/>
                    But even then, something felt missing. As you can see throughout this website, I have a deep passion for design, and I knew I wanted to have front-end experience. This drove me to work even harder to double major with Computer Science. I found that I love combining design, coding, and analysis, particularly in front-end development. Previously, I explored these passions separately, it was only when I discovered coding that I realized how all these interests could be merged, especially in front-end development.
                     </p>
                </Col>
            </Row>
        </Container>
    )

}