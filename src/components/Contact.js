import React, { useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Logo from "../images/join-us.png"
import AgnirathLogo from "../images/agnirath-logo-nav.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <>
            <div id='Contact' className='row align-items-center mb-5'>
                <div className="col-3">
                    <img data-aos="fade-right" src={Logo} alt="" className='ContactLogo' />
                </div>
                <div className="col-3 offset-3">
                    <p><a className='contact-email' href="mailto:agnirathiitm@smail.iitm.ac.in">AgnirathIITM@smail.iitm.ac.in</a></p>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between FooterLogos'>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <a href="https://www.iitm.ac.in/"><img
                            src='https://cfi.iitm.ac.in/static/media/IITMadrasLogo.57ad364c.png' alt=""
                            className='IITM' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://cfi.iitm.ac.in/"><img
                            src="https://cfi.iitm.ac.in/static/media/CFI%20Logo%20-%20White.e7ba08ee.png" alt=""
                            className='CFI' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="http://localhost:3000"><img src={AgnirathLogo} alt="" className='Agnirath' /></a>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <a href="https://www.linkedin.com/company/team-4gnirath/mycompany/">
                            <FaLinkedin className='Linkedin' />
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://www.twitter.com/TeamAgniRath">
                            <FaTwitter className='Twitter' />
                        </a>
                    </div>
                    {/* <div className='mx-3'>
                <a href="/">
                    <FaFacebook />
                </a>
            </div> */}
                    <div className='mx-3'>
                        <a href="https://www.instagram.com/Agnirath.IITM">
                            <FaInstagram className='Instagram' />
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href="mailto:agnirath@smail.iitm.ac.in">
                            <FiMail className='Mail' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center pb-3">
                &#169; 2022 <br /> Designed & Developed with &hearts; by Team Agnirath
            </div>
        </>
    )
}

export default Contact