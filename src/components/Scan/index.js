import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHome from '../Home/FooterHome';
import Drawer from '../Mobile/Drawer';
import HeaderHome from '../Home/HeaderHome';
import HeroNews from '../Contact/HeroNews';
import Forms from './Forms';

function Scan() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHome action={drawerAction.toggle} />
            <HeroNews title="Product Checker" />
            <Forms />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default Scan;
