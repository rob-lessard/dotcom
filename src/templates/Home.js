// import dependencies
import React from "react";
import Scroll from "../scripts/scrollEffects";

// import components
import Intro from "../components/intro/Intro";
import Projects from "../components/project-list/Projects";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

const Home = () => {
    return (
        <>
            <div className='content-wrapper'>
                <Scroll />
                <Intro />
                <Projects />
                <About />
                <Contact />
            </div>
        </>
    );
}; export default Home;
