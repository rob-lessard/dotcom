// import dependencies
import React, {useState} from "react";
import Scroll from "../scripts/scrollEffects";

// import components
import Contact from "../components/contact/Contact";
import ProjectIntro from "../components/project-intro/ProjectIntro";
import ProjectContent from "../components/project-content/ProjectContent";
import ProjectGrid from "../components/project-grid/ProjectGrid";
import SidebarProject from "../components/sidebar/SidebarProject";

const Project = () => {
    return (
        <>
            <SidebarProject />

            <div className='content-wrapper'>
                <Scroll />
                <ProjectIntro />
                <ProjectContent />
                <ProjectGrid />
                <Contact />
            </div>
        </>
    );
}; export default Project;
