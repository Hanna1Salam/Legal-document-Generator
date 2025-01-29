import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { Link as RouterLink, useLocation } from 'react-router-dom'; // For route navigation
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation(); // Get the current route path

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <div className="navbar-brand">
                <RouterLink to="/" className="navbar-brand p-0">
                    <h1 className="m-0">LegalEase</h1>
                </RouterLink>
            </div>
            <div className="navbar-nav mx-auto">
                {/* Conditional rendering based on the current route */}
                {location.pathname === "/" ? (
                    <>
                        <ScrollLink to="Home" smooth={true} duration={200} className="nav-item nav-link">
                            Home
                        </ScrollLink>
                        <ScrollLink to="About" smooth={true} duration={200} className="nav-item nav-link">
                            About
                        </ScrollLink>
                        <ScrollLink to="Working" smooth={true} duration={200} className="nav-item nav-link">
                            Working
                        </ScrollLink>
                        <ScrollLink to="Features" smooth={true} duration={200} className="nav-item nav-link">
                            Features
                        </ScrollLink>
                        <ScrollLink to="Developers" smooth={true} duration={200} className="nav-item nav-link">
                            Developers
                        </ScrollLink>
                    </>
                ) : (
                    <>
                        <RouterLink to="/" className="nav-item nav-link">
                            Home
                        </RouterLink>
                        <RouterLink to="/#About" className="nav-item nav-link">
                            About
                        </RouterLink>
                        <RouterLink to="/#Working" className="nav-item nav-link">
                            Working
                        </RouterLink>
                        <RouterLink to="/#Features" className="nav-item nav-link">
                            Features
                        </RouterLink>
                        <RouterLink to="/#Developers" className="nav-item nav-link">
                            Developers
                        </RouterLink>
                    </>
                )}
            </div>
            <div className="navbar-right">
                {/* External Link */}
                <RouterLink to="/generate">
                    <button>Generate Now</button>
                </RouterLink>
            </div>
        </nav>
    );
};

export default Navbar;
