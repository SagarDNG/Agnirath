import React, { useEffect } from 'react'
import home1 from "../images/home-1.png"
import home3 from "../images/home-3.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='home' className='row d-flex'>
            <div id="AgnirathImages" className="carousel slide col-12" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={home1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={home3} alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#AgnirathImages" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon homeArrowMarkLeft" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button >
                <button className="carousel-control-next" data-bs-target="#AgnirathImages" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon homeArrowMarkRight" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button >
            </div>

        </div>
    )
}

export default Home