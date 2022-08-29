import React from 'react';

function ProjectHome() {
    return (
        <>
            <section className="appie-project-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            <h3 className="title">
                                                Verify your product with Proton
                                            </h3>
                                            <p>Make sure you are not using a counterfeit.</p>
                                            <form action="">
                                                <div className="input-box mt-30">
                                                    <a href='/scan'>
                                                    <button type="button">Get Started</button>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="appie-project-thumb">
                                    <img src="assets/images/project-thumb.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHome;
