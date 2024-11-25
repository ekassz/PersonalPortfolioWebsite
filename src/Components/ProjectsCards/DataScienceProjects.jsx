import {Row, Col, Container} from 'react-bootstrap';
import MadisonVisual from "../../Assets/MadisonVisual.png";
import DiversityTech from "../../Assets/DiversityTechVisual.png";
import ESG from "../../Assets/ESG.png";
import iceCover from "../../Assets/iceCover.png";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Projects.css';

function DataScienceProjects() {
  return (
    <section id="aboutme">
      <Container className="title">
      <h2 className='text-center'>Data Science Projects</h2>
            <Row className='row-equal-height g-4'>
            <Col xs={12} md={4} lg={3}>
            <MDBCard className="project-card" border="danger" style={{ width: 'auto'}}>
                <MDBCardImage
                src={iceCover}
                position="top"
                alt="linktree"/>
                <MDBCardBody>
                    <MDBCardTitle>Ice Coverage Visual</MDBCardTitle>
                    <MDBCardText>
                      I made a redesign of the current 
                      <a href="https://www.glerl.noaa.gov/data/ice/#historical" target="_blank" rel="noopener noreferrer"> NOOA Ice Coverage Design</a>. I aimed to create less chart junk, making an interactive drop-down input to switch from different lakes,
                      having an on/off option to view the red dashed average line and a slider to select the range of year/s. 
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://ekass.shinyapps.io/IceCoverage/">Ice Cover Shiny App</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

             <Col xs={12} md={4} lg={3}>
            <MDBCard className="project-card" border="warning" style={{ width: 'auto'}}>
                <MDBCardImage
                src={ESG}
                position="top"
                alt="linktree"/>
                <MDBCardBody>
                    <MDBCardTitle>ESG Performance Visual</MDBCardTitle>
                    <MDBCardText>
                      This tool demonstrates ESG metrics by providing a clear, user-friendly way to understand how a company’s score compares to general trends. 
                      The tool’s histogram visualizes selected ESG sectors, with customizable bin widths to reveal more detailed or broader trends. 
                      A red dashed line represents the average score, giving users a quick benchmark for comparison. 
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://ekass.shinyapps.io/ESG-Visual/" className="stretched-link">ESG Shiny App</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

                 <Col xs={12} md={4} lg={3}>
            <MDBCard className="project-card" border="primary" style={{ width: 'auto'}}>
                <MDBCardImage
                src={DiversityTech}
                position="top"
                alt="linktree"/>
                <MDBCardBody>
                    <MDBCardTitle>Diversity in Tech Visual</MDBCardTitle>
                    <MDBCardText>
                      This Shiny application provides an interactive analysis of diversity within major tech companies from 2014 to 2018.
                      I created customizations that allows users to filter data by year and visualizes the percentage of each ethnic group within selected companies.
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://ekass.shinyapps.io/PortfolioProject/" className='stretched-link'>Tech Diversity Shiny App</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>

              <Col xs={12} md={4} lg={3}>
            <MDBCard className="project-card" border="danger" style={{ width: 'auto'}}>
                <MDBCardImage
                src={MadisonVisual}
                position="top"
                alt="linktree"/>
                <MDBCardBody>
                    <MDBCardTitle>Madison Visual</MDBCardTitle>
                    <MDBCardText>
                      I utilized GeoPandas to read and merge spatial data, and Matplotlib for visualizing population densities across the state. 
                      To predict population, I built and compared a linear regression model and a polynomial regression model.
                      </MDBCardText>
                    <MDBBtn tag="a" href="https://github.com/ekassz/MadisonVisualization" className="stretched-link">Madison Visualization</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Col>
            
            </Row>
        </Container>
            
                    
     </section>
    )
}

export default DataScienceProjects;

