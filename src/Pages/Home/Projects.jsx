import React from "react";
import { Link } from "react-router-dom";
import ProjectCards from "../../Components/ProjectsCards/ProjectCards";
import HardwareProjects from "../../Components/ProjectsCards/HardwareProjects";
import DigitalProjects from "../../Components/ProjectsCards/DigitalProjects";

export default function Projects(){
     return(
     <section id="projects" className="hero--section">
        <div className="hero--section--header">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        
                    </h1>
                </div>
            </div>
            <ProjectCards/>
            <HardwareProjects/>
            <DigitalProjects/>
        </div>
     </section>
    )
}