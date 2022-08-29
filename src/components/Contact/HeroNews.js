import React from 'react';

function HeroNews({ title }) {
    return (
        <>
            <div className="appie-page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                <h3 className="title">{title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroNews;
