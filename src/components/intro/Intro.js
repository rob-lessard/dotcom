
import React, {useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import './_intro.scss';

import webbyImage from "../../assets/webby-award.gif";

const Intro = () => {
    useEffect(() => {
        const title = document.querySelector('.intro-title');
        title.innerHTML = title.innerHTML.split('').map(
            (char, i) => `<span style="transform: rotate(${i * 6.15}deg)">${char}</span>`
        ).join("");
    })

    return (
        <div className='intro'>
            <div className='intro-content'>
                <div className='intro-content-left'>
                    <h1 className='intro-heading get-skewed'>
                        <span className='intro-heading--alt'>/Portfolio of</span>
                        <span>Robert</span>
                        <span>Lessard</span>
                    </h1>

                    <div className='intro-title'>
                        - Senior Front-End Developer - Senior Front-End Developer
                    </div>
                </div>

                <div className='intro-content-right'>
                    <div className='intro-copy get-skewed'>
                        <p>I'm a developer with over a decade of practice working with UX and creative teams building interactive forward thinking experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default Intro;
