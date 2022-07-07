
import React from "react";
import {useLocation} from "react-router-dom";

import './_project-content.scss';

const ProjectRiceContent = () => {
    return (
        <React.Fragment>
            <ul className='project-content-list'>
                <li>
                    <span>Role</span>
                    Senior Frontend Developer
                </li>
                <li>
                    <span>Service</span>
                    Interactive Development
                </li>
                <li>
                    <span>Award</span>
                    2021 Webby Award Winner
                </li>
                <li>
                    <a href='https://experience.rice.edu/' className='project-content-link' target='_blank'>Explore</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

const ProjectChsContent = () => {
    return (
        <React.Fragment>
            <ul className='project-content-list'>
                <li>
                    <span>Role</span>
                    Senior Frontend Developer
                </li>
                <li>
                    <span>Service</span>
                    Web & Intranet Development
                </li>
                {/*<li>*/}
                {/*    <span>Award</span>*/}
                {/*    2021 Webby Award Winner*/}
                {/*</li>*/}
                <li>
                    <a href='https://www.chsli.org/' className='project-content-link' target='_blank'>Explore</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

const ProjectCalsContent = () => {
    return (
        <React.Fragment>
            <ul className='project-content-list'>
                <li>
                    <span>Role</span>
                    Senior Frontend Developer
                </li>
                <li>
                    <span>Service</span>
                    Web Development
                </li>
                <li>
                    <span>Award</span>
                    <a href='https://cals.cornell.edu/faculty-staff/marketing-communications/special-projects-and-awards' className='project-content-link' target='_blank'>Explore Awards</a>
                </li>
                <li>
                    <a href='https://cals.cornell.edu/' className='project-content-link' target='_blank'>Explore Website</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

const ProjectJfmContent = () => {
    return (
        <React.Fragment>
            <ul className='project-content-list'>
                <li>
                    <span>Role</span>
                    Senior Frontend Developer
                </li>
                <li>
                    <span>Service</span>
                    Gamification Development
                </li>
                {/*<li>*/}
                {/*    <span>Award</span>*/}
                {/*    2021 Webby Award Winner*/}
                {/*</li>*/}
                <li>
                    <a href='https://www.juniorfiremarshal.com/companion#/' className='project-content-link' target='_blank'>Explore</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

const ProjectLimContent = () => {
    return (
        <React.Fragment>
            <ul className='project-content-list'>
                <li>
                    <span>Role</span>
                    Senior Frontend Developer
                </li>
                <li>
                    <span>Service</span>
                    Web Development
                </li>
                {/*<li>*/}
                {/*    <span>Award</span>*/}
                {/*    2021 Webby Award Winner*/}
                {/*</li>*/}
                <li>
                    <a href='https://www.limcollege.edu/' className='project-content-link' target='_blank'>Explore</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

const ProjectContents = ({ slug }) => {
    switch(slug) {
        case 'rice':
            return <ProjectRiceContent />;
        case 'chs':
            return <ProjectChsContent />;
        case 'cals':
            return <ProjectCalsContent />;
        case 'jfm':
            return <ProjectJfmContent />;
        case 'lim':
            return <ProjectLimContent />;
        default:
            return null;
    }
}

const ProjectContent = () => {
    const projectPath = useLocation();

    return (
        <div className='project-content'>
            <ProjectContents slug={projectPath.pathname.split("/")[2]} />
        </div>
    );
}; export default ProjectContent;
