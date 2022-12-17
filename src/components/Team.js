import React, { useEffect } from 'react'
import Logo from "../images/team.png"
import core from "../images/core.png"
import mech from "../images/mech.png"
import elec from "../images/elec.png"
import spons from "../images/spons.png"


import Aos from "aos";
import "aos/dist/aos.css";

function Team() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='team' className='row mb-5 align-items-center d-fflex'>
            <div className="col-3 mb-5">
                <img data-aos="fade-right" src={Logo} alt="" className='teamLogo' />
            </div>

            <div id="teamImages" className="carousel slide col-12" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={core} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={mech} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={elec} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={spons} alt="Fourth slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#teamImages" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button >
                <button className="carousel-control-next" data-bs-target="#teamImages" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button >
            </div>

        </div>
    )
}

export default Team