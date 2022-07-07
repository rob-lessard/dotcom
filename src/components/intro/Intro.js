
import React, {useEffect} from "react";
import { gsap } from 'gsap';

import './_intro.scss';

const Intro = () => {
    useEffect(() => {
        gsap.to(".intro-heading span", { "clip-path": "inset(-50px 0% -50px 0%)" });
    })

    return (
        <div className='intro'>
            <h1 className='intro-heading get-skewed'>
                <span className='intro-heading--alt'>Portfolio of Rob Lessard</span>
                <span>Senior</span>
                <span>Frontend</span>
                <span>Developer</span>
            </h1>
        </div>
    );
}; export default Intro;
