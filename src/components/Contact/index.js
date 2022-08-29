import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHome from '../Home/FooterHome';
import Drawer from '../Mobile/Drawer';
import HeaderHome from '../Home/HeaderHome';
import HeroNews from './HeroNews';
import Forms from './Forms';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHome action={drawerAction.toggle} />
            <HeroNews
                title="Contact"
            />
            <Forms />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default Contact;
