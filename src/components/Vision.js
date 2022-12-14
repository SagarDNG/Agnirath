import React, { useEffect } from 'react'
import Logo from "../images/vision.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Vision() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='Vision' className='row align-items-center mb-5'>
            <div className="col-3">
                <img data-aos="fade-right" src={Logo} alt="" className='VisionLogo' />
            </div>
            <div className='Vision col-8 text-center'>
                {/* https://stackoverflow.com/questions/17629286/css-vertical-line-between-bullets-in-an-unordered-list/17629815#17629815 */}
                Vision of the team here
            </div>
        </div>
    )
}

export default Vision