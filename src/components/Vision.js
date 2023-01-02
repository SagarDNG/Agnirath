import React, { useEffect } from 'react'
import Logo from "../images/vision.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Vision() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='vision' className='row align-items-center mb-5'>
            <div className="col-3">
                <img data-aos="fade-right" src={Logo} alt="" className='visionLogo' />
            </div>
            <div className='vision col-9 d-flex justify-content-around'>
                <p data-aos="fade-down" className='text-center'>
                    <i>"Pushing the engineering limits to create competent Engineers for a sustainable future"</i>
                </p>
            </div>
        </div>
    )
}

export default Vision