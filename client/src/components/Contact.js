import React, { useState, useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Logo from "../images/join-us.png"
import AgnirathLogo from "../images/agnirath-logo-nav.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const postURL = "http://localhost:3001/"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                email: email,
                mobile: mobile,
                subject: subject,
                message: message
            })
        }).then(() => {
            // Once posted, the user will be notified 
            alert('Data Submitted!');
        })
        setName('');
        setEmail('');
        setMobile('');
        setSubject('');
        setMessage('');
    }



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
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control col-3" id="name" value={name} onChange={e => setName(e.target.value)} name='name' required
                                placeholder='Plese enter your Name' />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Name is Required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} name='email' required
                                placeholder='Plese enter your Email address' />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Email address is Required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="mobile" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} name='mobile' required
                                placeholder='Plese enter phone number with country code' />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Phone Number is Required.
                            </div>
                        </div>

                        {/*
                https://www.geeksforgeeks.org/how-to-write-a-cell-phone-number-in-an-international-way-using-javascript/
                */}

                        <div className="mb-3">
                            <label for="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" value={subject} onChange={e => setSubject(e.target.value)} name='subject' required
                                placeholder='Plese enter the Subject' />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Subject is Required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Message</label> <br />
                            <textarea name="message" id="message" value={message} onChange={e => setMessage(e.target.value)} cols="40" rows="5"
                                placeholder='Plese enter your message'></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5">Submit</button>
                    </form>
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