import React, { useEffect } from 'react'
import Logo from "../images/sponsers.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Sponsers() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div id='sponsers' className='row align-items-center mb-5'>
            <div className='col-3'>
                <img data-aos="fade-right" src={Logo} alt="" className='sponsersLogo' />
            </div>
            <div className='col-9 d-flex parentSponser' data-aos="fade-up-left">
                <div className="sponsers"></div>
                <div className="sponsers"></div>
                <div className="sponsers"></div>
                <div className="sponsers"></div>
            </div>
        </div>
    )
}

export default Sponsers