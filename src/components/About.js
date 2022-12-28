import React, { useEffect } from 'react'
import Logo from "../images/about.png"

import Aos from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div id='about' className='row align-items-center mb-5'>
            <div data-aos="fade-right" className="col-3">
                <img src={Logo} alt="" className='aboutLogo' />
            </div>
            <div data-aos="fade-up" className="col-9 about text-center">
                We are Team Agnirath, a team of young brains, with a vision to contribute to
                the sustainable future and the will to push the engineering limits, attempting to make solar EV hybrids a reality. We are one
                of the first Indian teams participating in the prestigious World Solar Challenge, competing with teams from top universities
                across the globe!
            </div>
        </div>
    )
}

export default About