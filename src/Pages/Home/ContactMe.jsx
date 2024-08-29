import React from "react";
import { Link } from "react-router-dom";
import ContactBox from "../../Components/ContactBox";

export default function ContactMe(){
     return(
     <section id="contactme" className="hero--section">
        <div className="hero--section--header">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                
                </div>
            </div>

            <ContactBox/>
        </div>
     </section>
    )
}