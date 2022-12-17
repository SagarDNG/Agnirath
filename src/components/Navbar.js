import React from 'react'
import Logo from "../images/agnirath-logo-nav.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    <img src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#vision">Vision</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#competitions">Competitions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#sponsers">Sponsers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar