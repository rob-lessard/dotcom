// import dependencies
import React from "react";
import Scroll from "../scripts/scrollEffects";

// import components
import Navigation from "../components/navigation/Navigation";
import Intro from "../components/intro/Intro";
import Projects from "../components/project-list/Projects";
import Contact from "../components/contact/Contact";

const Home = () => {
    return (
        <>
            <div className='content-wrapper'>
                <Scroll />
                <Intro />
                <Navigation />
                <Projects />
                <Contact />
            </div>
        </>
    );
}; export default Home;
