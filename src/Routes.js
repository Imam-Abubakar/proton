import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import Home from './components/Home';
import Service from './components/Service';
import Scan from './components/Scan';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/scan" component={Scan} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
