
import React from "react";
import './_sidebar.scss';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <ul className='sidebar-menu'>
                    <li className='sidebar-menu-item'>
                        <a href='#projectSection' className='sidebar-menu-link'>Recent Work</a>
                    </li>
                    <li className='sidebar-menu-item'>
                        <a href='#aboutSection' className='sidebar-menu-link'>about</a>
                    </li>
                    <li className='sidebar-menu-item'>
                        <a href='#contactSection' className='sidebar-menu-link'>contact</a>
                    </li>
                </ul>

                <ul className='sidebar-social'>
                    <li className='sidebar-social-item'>
                        <a href='https://www.linkedin.com/in/the-real-rob-lessard/' className='sidebar-social-link' target='_blank'>ln</a>
                    </li>
                    <li className='sidebar-social-item'>
                        <a href='mailto:the.roblessard@gmail.com' className='sidebar-social-link' target='_blank'>em</a>
                    </li>
                    {/*<li className='sidebar-social-item'>*/}
                    {/*    <a href='#' className='sidebar-social-link'>cv</a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        );
    }
}
