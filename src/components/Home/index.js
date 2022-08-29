import React from 'react';
import useToggle from '../../Hooks/useToggle';
import FaqHome from './FaqHome';
import FeaturesHome from './FeaturesHome';
import FooterHome from './FooterHome';
import ProjectHome from './ProjectHome';
import TeamHome from './TeamHome';
import CounterArea from './CounterArea';
import Drawer from '../Mobile/Drawer';
import HeaderHome from './HeaderHome';
import HeroHome from './HeroHome';

function HomeSeven() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHome action={drawerAction.toggle} />
            <HeroHome />
            <FeaturesHome />
            <CounterArea />
            <TeamHome />
            <FaqHome className="pt-90" />
            <ProjectHome />
            <FooterHome />
        </>
    );
}

export default HomeSeven;
