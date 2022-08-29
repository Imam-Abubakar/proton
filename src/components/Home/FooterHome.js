import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/proton.png';

function FooterHome({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Proton is an abtract company that offers verification for products using barcode
                                </p>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li>
                                        <a href="#">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> visualsfred@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +234 703 000 0582
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> Kwara State University, Malete, Kwara State
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="/scan">
                                                <i className="fas fa-lightbulb" /> Check a Product
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p>Copyright © 2022 Proton. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHome;
