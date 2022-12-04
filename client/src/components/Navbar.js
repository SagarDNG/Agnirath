import React from 'react'
import Logo from "../images/agnirath-logo-nav.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#Home">
                    <img src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light active" aria-current="page" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#Vision">Vision</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#Team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#Competations">Competations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#Sponsers">Sponsers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar