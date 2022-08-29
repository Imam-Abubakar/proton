import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHome from '../Home/FooterHome';
import Drawer from '../Mobile/Drawer';
import HeaderAbout from './HeaderAbout';
import HeroAbout from './HeroAbout';
import ServicesAbout from './ServicesAbout';
import TeamAbout from './TeamAbout';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderAbout action={drawerAction.toggle} />
            <HeroAbout />
            <ServicesAbout />
            <TeamAbout />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default AboutUs;
