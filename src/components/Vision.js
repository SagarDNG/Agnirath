import React, { useEffect } from 'react'
import Logo from "../images/vision.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Vision() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='vision' className='row align-items-center mb-5 px-5'>
            <div className="col-3">
                <img data-aos="fade-right" src={Logo} alt="" className='visionLogo' />
            </div>
            <div className='vision col-8 d-flex justify-content-around'>
                {/* https://stackoverflow.com/questions/17629286/css-vertical-line-between-bullets-in-an-unordered-list/17629815#17629815
                Vision of the team here */}
                <ul>
                    <li>Commercial Solar car</li>
                    <li>Solar EV race team</li>
                    <li>Commercialization and affordability</li>
                    <li>Reliability</li>
                    <li>Sustainability</li>
                    <li>Endurance</li>
                </ul>
                <ul>
                    <li>Sustainability</li>
                    <li>Inclusivity</li>
                    <li>Fostering talent</li>
                    <li>Renewables R&D</li>
                    <li>Peak Efficiencies</li>
                </ul>
            </div>
        </div>
    )
}

export default Vision