import React from 'react';

function HeroAbout() {
    return (
        <>
            <div className="appie-about-top-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="appie-about-top-title">
                                <h2 className="title">The Product Verification Plaform with Large data</h2>
                                <p>We offer you barcode scanning to ease your checking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="appie-about-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="appie-about-page-content">
                                <h3 className="title">
                                    Porviding a required digital Solution.
                                </h3>
                                <p>
                                We leverage the power of our gigantic database of barcodes and product data, sourced from big retailers and e-commerce sites all over the world, to bring you clear, useful information on any product you're looking to verify.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroAbout;
