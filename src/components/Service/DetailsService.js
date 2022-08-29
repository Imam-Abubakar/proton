import React from 'react';
import thumb from '../../assets/images/service-thumb-1.jpg';

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Kwara State University
                                        </li>
                                        <li>
                                            <i className="fal fa-tag"></i>Product Verification
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>2 Project Developers
                                        </li>
                                        <li>
                                            <i className="fal fa-bookmark"></i>Proton
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>proton.vercel.app
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">Overview</h3>
                                    <p>
                                    The existence of fake product can directly harm a company's growth as well as consumers. Various organizations have been using many initiatives and modern technology to prevent counterfeit goods. But the company that manufactures a real product have introduced many modern technologies such as barcode and QR code. 
                                    </p>
                                    <br />
                                    <p>
                                    Fake item producers can go to the extent of even building barcodes (existing system) for their products so that when scanned, the result will show the existence of the product. Presently, there is an inefficient system for reviewing the authenticity of foods, drugs, computer technology products, electronics, petroleum products. Hence this has directly or indirectly promoted the production and sales of fake products. 
                                    </p>
                                    <br />
                                    <p>
                                        Proton is a platform that we developed to verify the authenticity of products using their barcode.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
