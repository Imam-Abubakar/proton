import React from 'react';
import counterIconOne from '../../assets/images/icon/counter-icon-1.svg';
import counterIconTwo from '../../assets/images/icon/counter-icon-2.svg';
import counterIconThree from '../../assets/images/icon/counter-icon-3.svg';
import counterIconFour from '../../assets/images/icon/counter-icon-4.svg';
import CounterUpCom from '../../lib/CounterUpCom';

function CounterArea({ style }) {
    return (
        <>
            <section className="appie-counter-area pt-90 pb-190" id="counter" style={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title">
                                <h3 className="appie-title">What we have</h3>
                                <p>
                                    The largest product data on anything you need
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-counter mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="counter-content">
                                    <div className="icon">
                                        <img src={counterIconOne} alt="" />
                                    </div>
                                    <h3 className="title">
                                        <span className="counter-item">
                                            <CounterUpCom endValue={100} sectionSelect="counter" />
                                        </span>
                                        +
                                    </h3>
                                    <p>Active Usage</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-counter mt-30 item-2 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="counter-content">
                                    <div className="icon">
                                        <img src={counterIconTwo} alt="" />
                                    </div>
                                    <h3 className="title">
                                        <span className="counter-item">
                                            <CounterUpCom endValue={2} sectionSelect="counter" />
                                        </span>
                                        
                                    </h3>
                                    <p>Project Builders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-counter mt-30 item-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="counter-content">
                                    <div className="icon">
                                        <img src={counterIconThree} alt="" />
                                    </div>
                                    <h3 className="title">
                                        <span className="counter-item">
                                            <CounterUpCom endValue={307} sectionSelect="counter" />
                                        </span>
                                        m
                                    </h3>
                                    <p>Product Database</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default CounterArea;
