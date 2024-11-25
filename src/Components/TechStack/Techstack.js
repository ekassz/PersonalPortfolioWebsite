import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import javaIcon from '@iconify/icons-logos/java';
import pythonIcon from '@iconify/icons-logos/python';
import figmaIcon from '@iconify/icons-logos/figma';
import "./Techstack.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const icons = [
    { icon:javaIcon,width:"120" ,height:"120"},
    {icon:pythonIcon, width:"120" ,height:"120"},
    {icon:reactIcon,width:"120" ,height:"120"},
    {icon:figmaIcon, width:"120" ,height:"120"},
    { icon: "devicon:rstudio", width: 120, height: 120 },
    { icon: "logos:git", width: 150, height: 100 },
    {icon:"skill-icons:javascript" ,width:"120", height:"120"},
    {icon:"devicon:postman", width:"120", height:"120"},
    {icon:"devicon:linux", width:"120", height:"120"},
    {icon:"vscode-icons:file-type-css", width:"120" ,height:"120"},
    {icon:"vscode-icons:file-type-html", width:"120", height:"120"},
    {icon:"logos:jenkins", width:"120", height:"120"},
    {icon:"simple-icons:testrail", width:"120" ,height:"120"},
    {icon:"devicon:npm-wordmark", width:"120" ,height:"120"},
    {icon:"devicon:kotlin", width:"120" ,height:"120"},
    {icon:"devicon:vscode" ,width:"120", height:"120"},
    {icon:"devicon:androidstudio", width:"120", height:"120"},
    {icon:"logos:xcode" ,width:"120" ,height:"120"}
];

export default function Techstack() {
    return (
        <Container className="tech-stack">
            <h2 className='text-center'>Tech Stack</h2>
            <Row className="row-equal-height g-4 icons responsive-icon">
                {icons.map((item, index) => (
                    <Col xs={3} md={3} lg={2} xl={1} key={index}>
                        <Icon icon={item.icon} width={item.width} height={item.height} />
                        </Col>
                ))}
            
            </Row>
        </Container>
    );
}

