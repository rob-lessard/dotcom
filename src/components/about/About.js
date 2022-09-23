
import React, {useEffect} from "react";
import './_about.scss';

// import images
import webbyImage from '../../assets/webby-award.gif';
import nftImage from '../../assets/about-NFT.png';

const About = () => {

    useEffect(() => {
        // image cursor event
        let hovers = document.querySelectorAll('.hoverable');

        for (let hover of hovers) {
            let hovering = hover.querySelector('span');

            hovering.addEventListener('mouseenter', () => {
                let image = hover.querySelector('.about-image');
                image.classList.add('is-visible');
            })

            hovering.addEventListener('mouseleave', () => {
                let image = hover.querySelector('.about-image');
                image.classList.remove('is-visible');
            })
        }
    });

    return (
        <div id='aboutSection' className='about'>
            <div className='about-content'>
                <h2 className='about-heading'>About Me</h2>
                <p>Hey, I’m Rob. A developer with over a decade of practice in creating forward thinking experiences.</p>
                <p>Here are a few things about me: I won a
                    <span className='hoverable'>
                        <span> Webby Award in 2021 </span>
                        <span className='about-image'>
                            <img src={webbyImage} alt='placeholder' />
                        </span>
                    </span>.
                    I've been a mentor to other developers. My creative background has given me a keen eye for detail. And I plan, design, build, test and maintain scalable frontend web applications.
                </p>

                <p>Now lets get a little personal. When I’m not building award-winning web applications, I wear many hats: Taxi service for my daughter, a young dance enthusiast, investor for new
                    <span className='hoverable'>
                        <span> NFT </span>
                        <span className='about-image'>
                            <img src={nftImage} alt='placeholder' />
                        </span>
                    </span>projects and skipper on the weekends.
                </p>

            </div>
        </div>
    );
}; export default About;
