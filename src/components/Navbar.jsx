import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {


    return (
        <div className="nav-div">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <i className="fas fa-leaf"></i> Senčajovna
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-home"></i> O nás
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#gallery">
                                    <i className="fas fa-camera"></i> Galerie
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">
                                    <i className="fas fa-scroll"></i> Nabídka
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <i className="fas fa-phone"></i> Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
