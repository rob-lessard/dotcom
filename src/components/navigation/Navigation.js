
import React from "react";
import './_navigation.scss';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul className='navigation-list'>
                <li className='navigation-list-item'>/Skip to</li>
                <li className='navigation-list-item'><a href='#projectSection' className='navigation-list-link'>Projects</a></li>
                {/*<li className='navigation-list-item'><a href='#aboutSection' className='navigation-list-link'>About</a></li>*/}
                <li className='navigation-list-item'><a href='#contactSection' className='navigation-list-link'>Contact</a></li>
            </ul>
        </nav>
    );
}; export default Navigation;
