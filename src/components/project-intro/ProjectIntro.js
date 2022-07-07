
import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import './_project-intro.scss';

// rice
import riceDetailMain from '../../assets/rice/rice-detail--main.png';
import riceDetailSupport from '../../assets/rice/rice-detail--supporting.png';

// chs
import chsDetailMain from '../../assets/chs/chs-detail--main.png';
import chsDetailSupport from '../../assets/chs/chs-detail--supporting.png';

// cals
import calsDetailMain from '../../assets/cals/cals-detail--main.png';
import calsDetailSupport from '../../assets/cals/cals-detail--supporting.png';

// jfm
import jfmDetailMain from '../../assets/jfm/jfm-detail--main.png';
import jfmDetailSupport from '../../assets/jfm/jfm-detail--supporting.png';

// lim
import limDetailMain from '../../assets/lim/lim-detail--main.png';
import limDetailSupporting from '../../assets/lim/lim-detail--supporting.png';

const ProjectRice = () => {
    return (
        <React.Fragment>
            <h1 className='project-intro-heading'>Experience Rice</h1>
            <figure className='project-intro-image'>
                <img src={riceDetailMain} alt='rice virtual tour'/>
            </figure>
            <figure className='project-intro-image-support'>
                <img src={riceDetailSupport} alt='rice virtual tour mobile' />
            </figure>
        </React.Fragment>
    )
}

const ProjectChs = () => {
    return (
        <React.Fragment>
            <h1 className='project-intro-heading'>Catholic Health</h1>
            <figure className='project-intro-image'>
                <img src={chsDetailMain} alt='catholic health services'/>
            </figure>
            <figure className='project-intro-image-support'>
                <img src={chsDetailSupport} alt='catholic health services mobile' />
            </figure>
        </React.Fragment>
    )
}

const ProjectCornell = () => {
    return (
        <React.Fragment>
            <h1 className='project-intro-heading'>Cornell CALS</h1>
            <figure className='project-intro-image'>
                <img src={calsDetailMain} alt='cornell cals'/>
            </figure>
            <figure className='project-intro-image-support'>
                <img src={calsDetailSupport} alt='cornell cals mobile' />
            </figure>
        </React.Fragment>
    )
}

const ProjectJfm = () => {
    return (
        <React.Fragment>
            <h1 className='project-intro-heading'>Junior Fire Marshall</h1>
            <figure className='project-intro-image'>
                <img src={jfmDetailMain} alt='junior fire marshal'/>
            </figure>
            <figure className='project-intro-image-support'>
                <img src={jfmDetailSupport} alt='junior fire marshal mobile' />
            </figure>
        </React.Fragment>
    )
}

const ProjectLim = () => {
    return (
        <React.Fragment>
            <h1 className='project-intro-heading'>LIM College</h1>
            <figure className='project-intro-image'>
                <img src={limDetailMain} alt='lim college'/>
            </figure>
            <figure className='project-intro-image-support'>
                <img src={limDetailSupporting} alt='lim college mobile' />
            </figure>
        </React.Fragment>
    )
}

const ProjectIntros = ({ slug }) => {
    switch(slug) {
        case 'rice':
            return <ProjectRice />;
        case 'chs':
            return <ProjectChs />;
        case 'cals':
            return <ProjectCornell />;
        case 'jfm':
            return <ProjectJfm />;
        case 'lim':
            return <ProjectLim />;
        default:
            return null;
    }
}

const ProjectIntro = () => {
    const projectPath = useLocation();

    useEffect(() => {
        const supportImage = document.querySelectorAll('.project-intro-image-support');

        ScrollTrigger.create({
            scroller: '.content-wrapper',
            onUpdate: (self) => {
                gsap.fromTo(supportImage, {yPercent: 5}, {yPercent: -30,
                    scrollTrigger:{
                        trigger: supportImage,
                        start: () => "top bottom",
                        end: () => "top top-=100",
                        scrub: true,
                        once: true
                    }
                });
            }
        })
    }, []);

    return (
        <div className='project-intro'>
            <Link to='/' className='project-intro-home'>Back</Link>
            <ProjectIntros slug={projectPath.pathname.split("/")[2]} />
        </div>
    );

}; export default ProjectIntro;
