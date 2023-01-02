import React, { useEffect } from 'react'
import Logo from "../images/sponsor.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Sponsors() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div id='sponsors' className='d-flex justify-content-around align-items-center mb-5'>
            <div>
                <img data-aos="fade-right" src={Logo} alt="" className='sponsorsLogo' />
            </div>
            <div data-aos="fade-up-left">
                <div className='sponsors d-flex justify-content-center align-items-center'>
                    <a href="https://www.ril.com/OurBusinesses/New-Energy.aspx" className='text-center'>Reliance New Solar Energy limited</a>
                </div>
            </div>
        </div >
    )
}

export default Sponsors