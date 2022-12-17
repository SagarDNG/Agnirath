import React, { useEffect } from 'react'
import Logo from "../images/testing-grounds.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Competitions() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='competitions' className='row align-items-center mb-5'>
            <div className="col-3">
                <img data-aos="fade-right" src={Logo} alt="" className='competitionsLogo' />
            </div>
            <div data-aos="fade-down-left" className='col-9 d-flex'>
                <div className='competitions'>
                    <p >Some text here</p>
                </div>
                <div className='competitions'></div>
                <div className='competitions'></div>
            </div>
        </div>
    )
}

export default Competitions