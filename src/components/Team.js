import React, { useEffect } from 'react'
import Logo from "../images/team.png"
import { Core, Mech, Elec, Spons } from './teamData';

import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

function Team() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id='team' className='row mb-5 align-items-center d-flex'>
            <div className="col-3 mb-5">
                <img data-aos="fade-right" src={Logo} alt="" className='teamLogo' />
            </div>

            <div id="teamImages" className="carousel slide col-12" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="core carousel-item active">
                        <h1 className='text-center'>Core Team</h1>
                        <div className="d-flex person-cards flex-wrap teamSection justify-content-center">
                            {Core.map((person) =>
                                <div className="person">
                                    <div className="content">
                                        <h4>{person.username}</h4>
                                        {(person.subModule !== 'NA') &&
                                            <h6 className='subModule'>{person.subModule}</h6>
                                        }
                                        <div className="contact">
                                            <a href={person.linkedIn}>
                                                <FaLinkedin className='Linkedin' />
                                            </a>
                                            <a href={`mailto:${person.email}`}>
                                                <FiMail className='Mail' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mech carousel-item">
                        <h1 className='text-center'>Mechanical Team</h1>
                        <div className="d-flex person-cards flex-wrap teamSection justify-content-center">
                            {Mech.map((person) =>
                                <div className="person">
                                    <div className="content">
                                        <h4>{person.username}</h4>
                                        {(person.subModule !== 'NA') &&
                                            <h6 className='subModule'>{person.subModule}</h6>
                                        }
                                        <div className="contact">
                                            <a href={person.linkedIn}>
                                                <FaLinkedin className='Linkedin' />
                                            </a>
                                            <a href={`mailto:${person.email}`}>
                                                <FiMail className='Mail' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="elec carousel-item">
                        <h1 className='text-center'>Electrical Team</h1>
                        <div className="d-flex person-cards flex-wrap teamSection justify-content-center">
                            {Elec.map((person) =>
                                <div className="person">
                                    <div className="content">
                                        <h4>{person.username}</h4>
                                        {(person.subModule !== 'NA') &&
                                            <h6 className='subModule'>{person.subModule}</h6>
                                        }
                                        <div className="contact">
                                            <a href={person.linkedIn}>
                                                <FaLinkedin className='Linkedin' />
                                            </a>
                                            <a href={`mailto:${person.email}`}>
                                                <FiMail className='Mail' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="spons carousel-item">
                        <h1 className='text-center'>Sponsorship and PR Team</h1>
                        <div className="d-flex person-cards flex-wrap teamSection justify-content-center">
                            {Spons.map((person) =>
                                <div className="person">
                                    <div className="content">
                                        <h4>{person.username}</h4>
                                        <div className="contact">
                                            <a href={person.linkedIn}>
                                                <FaLinkedin className='Linkedin' />
                                            </a>
                                            <a href={`mailto:${person.email}`}>
                                                <FiMail className='Mail' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#teamImages" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button >
                <button className="carousel-control-next" data-bs-target="#teamImages" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button >
            </div>

        </div>
    )
}

export default Team