'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Genelogo from "./svg/genelogo.jsx";

export default function Header() {
    useEffect(() => {
        // Load scripts after component mounts
        const loadScript = (src: string) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        // Only load if not already loaded
        if (!document.querySelector('script[src="/js/jquery-3.7.1.min.js"]')) {
            loadScript('/js/jquery-3.7.1.min.js');
        }
    }, []);

    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <Genelogo className="navbar-brand-logo" />
                        </Link>

                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
                                    {/* <li className="nav-item submenu">
                                        <Link className="nav-link" href="#">Pages</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" href="/service-single">Service Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/blog-single">Blog Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/project-single">Project Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/team">Team</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/team-single">Team Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/pricing">Pricing Plan</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/testimonial">Testimonials</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/image-gallery">Image Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/video-gallery">Video Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/faqs">FAQs</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="header-social-box d-inline-flex">
                                <div className="header-social-links">
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="header-btn">
                                    <button className="btn btn-popup" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <img src="/images/header-btn-dot.svg" alt="" />
                                    </button>

                                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                                        <div className="offcanvas-body">
                                            <div className="header-contact-box">
                                                <div className="icon-box">
                                                    <img src="/images/icon-phone.svg" alt="" />
                                                </div>
                                                <div className="header-contact-box-content">
                                                    <h3>phone</h3>
                                                    <p>+1 (847) 208-7685</p>
                                                </div>
                                            </div>

                                            <div className="header-contact-box">
                                                <div className="icon-box">
                                                    <img src="/images/icon-mail.svg" alt="" />
                                                </div>
                                                <div className="header-contact-box-content">
                                                    <h3>email</h3>
                                                    <p>info@genesysgloballlc.com</p>
                                                </div>
                                            </div>

                                            <div className="header-contact-box">
                                                <div className="icon-box">
                                                    <img src="/images/icon-location.svg" alt="" />
                                                </div>
                                                <div className="header-contact-box-content">
                                                    <h3>address</h3>
                                                    <p>734 S CHARLOTTE ST LOMBARD, IL 60148</p>
                                                </div>
                                            </div>

                                            <div className="header-social-links sidebar-social-links">
                                                <h3>stay connected</h3>
                                                <ul>
                                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
}
