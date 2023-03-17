
import React, {useEffect} from "react";
import { gsap } from 'gsap';

import './_contact.scss';

const Contact = () => {

    useEffect(() => {
        // create scrolling marquee
        let marquee = document.querySelectorAll('.contact-heading span');

        gsap.to(marquee, {
            duration: 20,
            ease: "linear",
            xPercent: -100,
            repeat: -1
        });
    });

    return (
        <div id='contactSection' className='contact'>
            <div className='contact-inner'>
                <div className='contact-heading-container'>
                    <h2 className='contact-heading'>
                        <span>Contact</span>
                        <span>Contact</span>
                    </h2>
                </div>

                <ul>
                    <li><a href='mailto:the.roblessard@gmail.com'>the.roblessard@gmail.com</a></li>
                    <li><a href='https://www.linkedin.com/in/the-real-rob-lessard/' target='_blank'>LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
}; export default Contact;
