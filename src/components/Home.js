import React, { useEffect } from 'react'
// import Logo from "../images/agnirath-logo-home.png"
import home1 from "../images/home-1.png"
import home2 from "../images/home-2.png"
import home3 from "../images/home-3.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='home' className='row d-flex vh-100'>

            {/* <div className="col-3 align-self-center">
                <img data-aos="fade-right" src={Logo} alt="" className='homeLogo' />
            </div> */}

            <div id="AgnirathImages" className="carousel slide vh-100 col-12" data-bs-ride="carousel">
                <div className="carousel-inner vh-100 p-2">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={home1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={home2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={home3} alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#AgnirathImages" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button >
                <button className="carousel-control-next" data-bs-target="#AgnirathImages" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button >
            </div>

        </div>
    )
}

export default Home