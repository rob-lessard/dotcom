
import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import './_projects.scss';

import riceImage from '../../assets/rice--main.png';
import chsliImage from '../../assets/chsli--main.jpg';
import calsImage from '../../assets/cornell--main.jpg';
import jfmImage from '../../assets/jfm--main.png';
import limImage from '../../assets/lim/lim-detail-grid--main1.jpg';

const projects = [
    {id: 1, title: "Experience Rice", projectLink: "/project/rice", projectImage: riceImage},
    {id: 2, title: "Catholic Health", projectLink: "/project/chs", projectImage: chsliImage},
    {id: 3, title: "Cornell CALS", projectLink: "/project/cals", projectImage: calsImage},
    {id: 4, title: "Junior Fire Marshall", projectLink: "/project/jfm", projectImage: jfmImage},
    {id: 5, title: "LIM College", projectLink: "/project/lim", projectImage: limImage},
]

const projectList = projects.map((project)=>{
    return <li className='project-list-item' key={project.id}>
                {[
                    <Link to={project.projectLink} className='project-list-link'>{project.title}</Link>,
                    <figure className='project-image'><img src={project.projectImage} alt={project.title} /></figure>
                ]}
            </li>;
});

const Projects = () => {

    useEffect(() => {
        // image cursor event
        let links = document.querySelectorAll('.project-list-link');

        for (let link of links) {
            link.addEventListener('mouseenter', () => {
                let image = link.parentNode.querySelector('.project-image');
                image.classList.add('is-visible');
            })

            link.addEventListener('mouseleave', () => {
                let image = link.parentNode.querySelector('.project-image');
                image.classList.remove('is-visible');
            })
        }
    });

    return (
        <div id='projectSection' className='project'>
            <h2 className='project-heading'>Featured Work</h2>

            <div className='project-container'>
                <ul className='project-list'>
                    {projectList}
                </ul>
            </div>
        </div>
    );
}; export default Projects;
