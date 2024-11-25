import React from "react";
import ProjectCards from "../../Components/ProjectsCards/ProjectCards";
import HardwareProjects from "../../Components/ProjectsCards/HardwareProjects";
import DigitalProjects from "../../Components/ProjectsCards/DigitalProjects";
import DataScienceProjects from "../../Components/ProjectsCards/DataScienceProjects";

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
            <DataScienceProjects/>
            <HardwareProjects/>
            <DigitalProjects/>
        </div>
     </section>
    )
}
