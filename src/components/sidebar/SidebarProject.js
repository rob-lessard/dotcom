
import React from "react";
import { Link } from "react-router-dom";

import './_sidebar.scss';

export default class SidebarProject extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <ul className='sidebar-menu'>
                    <li className='sidebar-menu-item sidebar-menu-item--return'>
                        <Link to='/'><span className='sr-only'>Back to Home</span></Link>
                    </li>
                    <li className='sidebar-menu-item sidebar-menu-item--name'>Portfolio of Rob Lessard</li>
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
