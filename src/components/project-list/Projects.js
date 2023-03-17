
import React, {useRef, useEffect} from "react";
// import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import './_projects.scss';

import riceImage from '../../assets/rice--main.png';
import chsliImage from '../../assets/chsli--main.jpg';
import calsImage from '../../assets/cornell--main.jpg';
import limImage from '../../assets/lim/lim-detail-grid--main1.jpg';
import beazleyImage from '../../assets/beazley--main.png';

const projects = [
    {
        id: 1,
        class:"projects-container--one get-skewed",
        title: "Catholic Health",
        projectLink: "https://www.chsli.org/",
        projectImage: chsliImage,
        projectCopy: "Website & Intranet"
    },
    {
        id: 2,
        class:"projects-container--two get-skewed",
        title: "Experience Rice",
        projectLink: "https://experience.rice.edu/",
        projectImage: riceImage,
        projectCopy: "Virtual Experience | Webby Award Winner"
    },
    {
        id: 3,
        class:"projects-container--three get-skewed",
        title: "Cornell CALS",
        projectLink: "https://cals.cornell.edu/",
        projectImage: calsImage,
        projectCopy: "Website"
    },
    {
        id: 4,
        class:"projects-container--four get-skewed",
        title: "LIM College",
        projectLink: "https://www.limcollege.edu/",
        projectImage: limImage,
        projectCopy: "Website"
    },
    {
        id: 5,
        class:"projects-container--five get-skewed",
        title: "Beazley",
        projectLink: "https://www.beazley.com/en-us",
        projectImage: beazleyImage,
        projectCopy: "Website"
    },
]

const Projects = () => {

    const projectList = projects.map((project)=>{
        return <a key={project.id} className={project.class} href={project.projectLink} target='_blank'>
            {[
                <>
                    <figure>
                        <img src={project.projectImage} alt={project.title} />
                    </figure>

                    <div className='projects-content'>
                        <h3>{project.title}</h3>
                        <p>{project.projectCopy}</p>
                    </div>
                </>
            ]}
        </a>;
    });

    useEffect(() => {
        // gsap.to('.get-skewed', {
        //     scrollTrigger: {
        //         trigger: '.get-skewed',
        //         scrub: true,
        //         once: true,
        //         start: () => "top bottom-=250",
        //         toggleClass: "is-visible",
        //     }
        // });
    });

    return (
        <div id='projectSection' className='projects'>
            <div className='projects-inner'>
                <h2 className='projects-heading'>/Featured Work</h2>

                <div className='projects-container'>
                    {projectList}
                </div>
            </div>
        </div>
    );
}; export default Projects;
