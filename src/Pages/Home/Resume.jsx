import React from "react";
import Techstack from "../../Components/TechStack/Techstack";
import Experience from "../../Components/Experience/Experience";
import TechnicalBG from "../../Components/Experience/TechnicalBG";

export default function Resume(){
     return(
     <section id="resume" className="hero--section">
        <div className="hero--section--header">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        
                    </h1>
                </div>
            </div>
        </div>
        
        <Experience/>
        <TechnicalBG/>
        <Techstack/>
     </section>
    )
}
