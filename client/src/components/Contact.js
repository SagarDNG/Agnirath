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
            <div id='Contact' className='row align-items-center'>
                <div className="col-3">
                    <img data-aos="fade-right" src={Logo} alt="" className='ContactLogo' />
                </div>
                <div className="col-3 offset-3">
                    <form action="/" method="post">
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control col-3" id="name" name='name' required placeholder='Plese enter your Name' disabled />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Name is Required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' required placeholder='Plese enter your Email address' disabled />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Email address is Required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="mobile" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="mobile" name='mobile' required placeholder='Plese enter your Phone Number with country code' disabled />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Phone Number is Required.
                            </div>
                        </div>

                        {/* https://www.geeksforgeeks.org/how-to-write-a-cell-phone-number-in-an-international-way-using-javascript/ */}

                        <div className="mb-3">
                            <label for="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" name='subject' required placeholder='Plese enter the Subject' disabled />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Subject is Required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Message</label> <br />
                            <textarea name="message" id="message" cols="40" rows="5" placeholder='Plese enter your message' disabled></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5">Submit</button>
                    </form>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between FooterLogos'>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <a href="https://www.iitm.ac.in/"><img src='https://cfi.iitm.ac.in/static/media/IITMadrasLogo.57ad364c.png' alt="" className='IITM' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://cfi.iitm.ac.in/"><img src="https://cfi.iitm.ac.in/static/media/CFI%20Logo%20-%20White.e7ba08ee.png" alt="" className='CFI' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="http://localhost:3000"><img src={AgnirathLogo} alt="" className='Agnirath' /></a>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <a href="https://www.linkedin.com/company/team-4gnirath/mycompany/"><FaLinkedin className='Linkedin' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://www.twitter.com/TeamAgniRath"><FaTwitter className='Twitter' /></a>
                    </div>
                    {/* <div className='mx-3'>
                        <a href="/"><FaFacebook /></a>
                    </div> */}
                    <div className='mx-3'>
                        <a href="https://www.instagram.com/Agnirath.IITM"><FaInstagram className='Instagram' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="mailto:agnirath@smail.iitm.ac.in"><FiMail className='Mail' /></a>
                    </div>
                </div>
            </div>

            <div className="text-center pb-3">
                &#169;	2022 <br /> Designed & Developed with &hearts; by Team Agnirath
            </div>
        </>
    )
}

export default Contact