import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHome from '../Home/FooterHome';
import ProjectHome from '../Home/ProjectHome';
import Drawer from '../Mobile/Drawer';
import DetailsService from './DetailsService';
import HeaderHome from '../Home/HeaderHome';
import HeroService from './HeroService';

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHome action={drawerAction.toggle} />
            <HeroService />
            <DetailsService />
            <ProjectHome />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default Service;
