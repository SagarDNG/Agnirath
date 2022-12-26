import React, { useEffect } from 'react'
import Logo from "../images/competitions.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Competitions() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='competitions' className='d-flex align-items-center mb-5 px-5'>
            <div>
                <img data-aos="fade-right" src={Logo} alt="" className='competitionsLogo' />
            </div>
            <div data-aos="fade-down-left" className='d-flex flex-wrap align-items-center justify-content-center'>
                <div className='competitions d-flex justify-content-center align-items-center'>
                    {/* <a href="https://www.worldsolarchallenge.org/">World Solar Challenge</a> */}
                </div>
                <div className='competitions d-flex justify-content-center align-items-center'>
                    {/* <a href="https://www.solarchallenge.org.za/">Sasol Solar Challenge</a> */}
                </div>
                <div className='competitions d-flex justify-content-center align-items-center'>
                    {/* <a href="https://www.americansolarchallenge.org/">American Solar Challenge</a> */}
                </div>
                <div className='competitions d-flex justify-content-center align-items-center'>
                    {/* <a href="https://www.europeansolarchallenge.eu/blog/">iLumen Solar Challenge</a> */}
                </div>
            </div>
        </div>
    )
}

export default Competitions