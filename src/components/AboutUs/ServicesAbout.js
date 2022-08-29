import React from 'react';

function ServicesAbout() {
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">We’re driven by our values</h3>
                                <p>Our best work is put into this platform. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-tv"></i>
                                </div>
                                <h4 className="title">Desktop View</h4>
                                <p>Easy to access and use the platform on your desktop or laptop</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-code"></i>
                                </div>
                                <h4 className="title">Clean Modern Code</h4>
                                <p>Used modern technologies and design to enhance usability.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-user-friends"></i>
                                </div>
                                <h4 className="title">User Interactive</h4>
                                <p>Easy to navigate and understand by anyone.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-mobile"></i>
                                </div>
                                <h4 className="title">Mobile Responsive</h4>
                                <p>Clean user interface for both mobile and desktop view.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-5 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-retweet"></i>
                                </div>
                                <h4 className="title">Seamless Sync</h4>
                                <p>Easy product checking process. Verify within seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
