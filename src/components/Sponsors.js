import React, { useEffect } from 'react'
import Logo from "../images/sponsers.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Sponsors() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div id='sponsors' className='row align-items-center mb-5'>
            <div className='col-3'>
                <img data-aos="fade-right" src={Logo} alt="" className='sponsorsLogo' />
            </div>
            <div className='col-9 d-flex parentSponser' data-aos="fade-up-left">
                <div className="sponsors"></div>
                <div className="sponsors"></div>
                <div className="sponsors"></div>
                <div className="sponsors"></div>
            </div>
        </div>
    )
}

export default Sponsors