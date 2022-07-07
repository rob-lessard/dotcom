
import React, {useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import './_project-grid.scss';

// rice
import riceBuilding from '../../assets/rice/rice-moody-bldg.jpg';
import riceBuildingIllustration from '../../assets/rice/rice-bldg-illustration.png';
import riceSpaceship from '../../assets/rice/rice-spaceship.png';
import riceMap from '../../assets/rice/rice-map.png';

// chs
import chsCarousel from '../../assets/chs/chs-carousel.png';
import chsIntranet from '../../assets/chs/chs-intranet.png';
import chsLighthouse from '../../assets/chs/chs-lighthouse.png';
import chsNotifications from '../../assets/chs/chs-notifications.png';

// cals
import calsAccordion from '../../assets/cals/cals-accordion.png';
import calsHero from '../../assets/cals/cals-hero.png';
import calsMap from '../../assets/cals/cals-map.png';
import calsMolecule from '../../assets/cals/cals-molecule.png';

// jfm
import jfmDalmatian from '../../assets/jfm/jfm-dalmatian.png';
import jfmFirefighters from '../../assets/jfm/jfmFirefighters.png';
import jfmGame from '../../assets/jfm/jfmGame.png';
import jfmGameComplete from '../../assets/jfm/completed-game.png';

// lim
import limCard from '../../assets/lim/lim-card.png';
import limContentBlocks from '../../assets/lim/lim-content-blocks.png';
import limIntro from '../../assets/lim/lim-intro.png';
import limGridOne from '../../assets/lim/lim-detail-grid--main1.jpg';
import Scroll from "../../scripts/scrollEffects";
import Scrollbar from "smooth-scrollbar";

const ProjectRiceImages = () => {
    return (
        <React.Fragment>
            <figure className='project-grid-image project-grid-image--one'>
                <img src={riceBuilding} alt='rice building' />
            </figure>

            <figure className='project-grid-image project-grid-image--two is-parallaxing'>
                <img src={riceSpaceship} alt='rice spaceship' />
            </figure>

            <figure className='project-grid-image project-grid-image--three is-parallaxing--slow'>
                <img src={riceBuildingIllustration} alt='rice building illustration' />
            </figure>

            <figure className='project-grid-image project-grid-image--four is-parallaxing--fast'>
                <img src={riceMap} alt='rice map image' />
            </figure>
        </React.Fragment>
    )
}

const ProjectChsImages = () => {
    return (
        <React.Fragment>
            <figure className='project-grid-image project-grid-image--one'>
                <img src={chsIntranet} alt='chs intranet' />
            </figure>

            <figure className='project-grid-image project-grid-image--two is-parallaxing'>
                <img src={chsNotifications} alt='chs notifications menu' />
            </figure>

            <figure className='project-grid-image project-grid-image--three is-parallaxing--slow'>
                <img src={chsLighthouse} alt='chs lighthouse' />
            </figure>

            <figure className='project-grid-image project-grid-image--four is-parallaxing--fast'>
                <img src={chsCarousel} alt='chs carousel' />
            </figure>
        </React.Fragment>
    )
}

const ProjectCalsImages = () => {
    return (
        <React.Fragment>
            <figure className='project-grid-image project-grid-image--one'>
                <img src={calsHero} alt='cals hero preview' />
            </figure>

            <figure className='project-grid-image project-grid-image--two is-parallaxing'>
                <img src={calsAccordion} alt='cals accordion preview' />
            </figure>

            <figure className='project-grid-image project-grid-image--three is-parallaxing--slow'>
                <img src={calsMap} alt='cals interactive map preview' />
            </figure>

            <figure className='project-grid-image project-grid-image--four is-parallaxing--fast'>
                <img src={calsMolecule} alt='cals interactive molecule module preview' />
            </figure>
        </React.Fragment>
    )
}

const ProjectJfmImages = () => {
    return (
        <React.Fragment>
            <figure className='project-grid-image project-grid-image--one'>
                <img src={jfmGameComplete} alt='junior fire marshal completed game' />
            </figure>

            <figure className='project-grid-image project-grid-image--two is-parallaxing'>
                <img src={jfmFirefighters} alt='junior fire marshal firefighters' />
            </figure>

            <figure className='project-grid-image project-grid-image--three is-parallaxing--slow'>
                <img src={jfmDalmatian} alt='junior fire marshal dalmatian' />
            </figure>

            <figure className='project-grid-image project-grid-image--four is-parallaxing--fast'>
                <img src={jfmGame} alt='junior fire marshal screen shot' />
            </figure>
        </React.Fragment>
    )
}

const ProjectLimImages = () => {
    return (
        <React.Fragment>
            <figure className='project-grid-image project-grid-image--one'>
                <img src={limGridOne} alt='placeholder' />
            </figure>

            <figure className='project-grid-image project-grid-image--two is-parallaxing'>
                <img src={limIntro} alt='lim graphic' />
            </figure>

            <figure className='project-grid-image project-grid-image--three is-parallaxing--slow'>
                <img src={limCard} alt='lim card' />
            </figure>

            <figure className='project-grid-image project-grid-image--four is-parallaxing--fast'>
                <img src={limContentBlocks} alt='lim content blocks' />
            </figure>
        </React.Fragment>
    )
}

const ProjectImages = ({ slug }) => {
    switch(slug) {
        case 'rice':
            return <ProjectRiceImages />;
        case 'chs':
            return <ProjectChsImages />;
        case 'cals':
            return <ProjectCalsImages />;
        case 'jfm':
            return <ProjectJfmImages />;
        case 'lim':
            return <ProjectLimImages />;
        default:
            return null;
    }
}

const ProjectGrid = () => {
    const projectPath = useLocation();

    useEffect(() => {
        const projectHeading = document.querySelectorAll('.is-parallaxing--horizontal');
        const projectImage = document.querySelectorAll('.is-parallaxing');
        const projectImageSlow = document.querySelectorAll('.is-parallaxing--slow');
        const projectImageFast = document.querySelectorAll('.is-parallaxing--fast');

        ScrollTrigger.create({
            scroller: '.content-wrapper',
            onUpdate: (self) => {
                // heading trigger
                gsap.fromTo(projectHeading, {xPercent: 25}, {xPercent: -10,
                    scrollTrigger: {
                        trigger: projectHeading,
                        start: () => "top bottom",
                        end: () => "bottom top+=100",
                        scrub: true,
                        once: true
                    }
                });

                gsap.fromTo(projectImage, {yPercent: 5}, {yPercent: -30,
                    scrollTrigger: {
                        trigger: projectImage,
                        start: () => "top bottom",
                        end: () => "top top-=100",
                        scrub: true,
                        once: true
                    }
                });

                gsap.fromTo(projectImageSlow, {yPercent: 30}, {yPercent: 10,
                    scrollTrigger: {
                        trigger: projectImageSlow,
                        start: () => "top bottom",
                        end: () => "top top-=100",
                        scrub: true,
                        once: true
                    }
                });

                gsap.fromTo(projectImageFast, {yPercent: 10}, {yPercent: -50,
                    scrollTrigger: {
                        trigger: projectImageFast,
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
        <div className='project-grid'>
            <h2 className='project-grid-heading is-parallaxing--horizontal'>Details</h2>
            <ProjectImages slug={projectPath.pathname.split("/")[2]} onLoad={() => ScrollTrigger.refresh()} />
        </div>
    );
}; export default ProjectGrid;
