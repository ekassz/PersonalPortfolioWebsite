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
                    <br/>
                    My journey into tech has been full of exploration and discovery. I started at UW-Madison as a Finance major, drawn to math and STEM, but a Machine Learning internship before my first year changed everything. It introduced me to tech, and I quickly found my passion in front-end development, where I could blend coding, creativity, and design.
                     <br/>
                     <br/>
                     By my junior year, I wanted to take things further and explore research through Human-Computer Interaction (HCI). Now, as an undergrad researcher in a lab at the Information School, I’m building audit reports and visualizations, merging design with data analysis to solve real-world problems.
                     <br/>
                     <br/>
                    To tie it all together, I’m also pursuing a Digital Studies minor, which helps me bring creative storytelling into tech.
                    Whether it’s through design, research, or coding, I’m passionate about creating user-centered, impactful solutions.
                     </p>
                </Col>
            </Row>
        </Container>
    )

}