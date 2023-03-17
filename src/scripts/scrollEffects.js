// import dependencies
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { gsap } from 'gsap';
import {ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let options = {
    damping: .15,
    // plugins: {
    //     overscroll: {
    //         effect: "bounce",
    //         maxScroll: 300,
    //         damping: .15,
    //     },
    // }
}

const Scroll = () => {

    useEffect(() => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            const scroller = Scrollbar.init(document.querySelector('.content-wrapper'), options);

            // set scrolltrigger proxy to work with smooth scrollbar
            ScrollTrigger.scrollerProxy(".content-wrapper", {
                scrollTop(value) {
                    if (arguments.length) {
                        scroller.scrollTop = value;
                    }
                    return scroller.scrollTop;
                }
            });

            // set skewing on scroll
            let proxy = { skew: 0 },
                skewSetter = gsap.quickSetter(".get-skewed", "skewY", "deg"), // fast
                clamp = gsap.utils.clamp(-1, 1); // don't let the skew go beyond 2 degrees.

            ScrollTrigger.create({
                scroller: ".content-wrapper",
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -600);
                    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their
                    // scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {skew: 0, duration: .4, ease: "linear", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                    }
                }
            });

            // make the right edge "stick" to the scroll bar. force3D: true improves performance
            gsap.set(".get-skewed", {transformOrigin: "right center", force3D: true});

            // set anchors
            const anchors = document.querySelectorAll('.navigation-list-link');

            for (let anchor of anchors) {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    let hash = anchor.getAttribute('href');
                    let target = document.querySelector(hash);
                    let scrollPosition = target.offsetTop;
                    ScrollTrigger.update();

                    scroller.scrollTo(0, scrollPosition, 750);
                })
            }

            // custom cursor -- desktop only
            if (window.matchMedia('(min-width: 991px)')) {
                // custom cursor
                const cursor = document.querySelector(".cursor");
                const cursorSVG = document.querySelector(".cursor svg");
                let links = document.querySelectorAll("a");

                // set the starting position of the cursor outside of the screen
                let clientX = -100;
                let clientY = -100;

                // add listener to track the current mouse position
                document.addEventListener("mousemove", e => {
                    clientX = e.clientX;
                    clientY = e.clientY;
                });

                // render using gsap
                const render = () => {
                    gsap.set(cursor, { x: clientX, y: clientY });
                    requestAnimationFrame(render);
                };

                requestAnimationFrame(render);

                // loop through links on the page
                for (let link of links) {
                    link.addEventListener("mouseover", function() {
                        gsap.to( cursor, { x: clientX, y: clientY, scale: 2.5, backgroundColor: "rgba(233,66,53,.75)", duration: .25 });
                        cursorSVG.style.display = "block";
                        if (link.classList.contains('navigation-list-link')) {
                            cursor.classList.add('hovering');
                        }
                    });
                    link.addEventListener("mouseout",  function() {
                        gsap.to( cursor, { x: clientX, y: clientY, scale: 1, backgroundColor: "#e94235", duration: .25 });
                        cursorSVG.style.display = "none";
                        cursor.classList.remove('hovering');
                    });
                }
            }
        }
    }, []);

    return null;
}

export default Scroll;
