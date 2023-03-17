// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import templates
import Home from './templates/Home';
import Project from './templates/Project';

// styles
import 'normalize.css/normalize.css';
import './styles/global-styles.scss';

// image
import backgroundImage from './assets/noise.png';

function RoutePath() {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="transition" timeout={{ enter: 2000, exit: 1000 }}>
                <div className="main-container" style={{backgroundImage: `url(${backgroundImage})`}}>
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        {/*<Route path="/project" element={<Project />}>*/}
                        {/*    <Route path="rice" element={<Project />} />*/}
                        {/*    <Route path="chs" element={<Project />} />*/}
                        {/*    <Route path="cals" element={<Project />} />*/}
                        {/*    <Route path="lim" element={<Project />} />*/}
                        {/*</Route>*/}
                    </Routes>

                    <div className='cursor cursor--custom'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.8">
                            <path d="M.1,7.2H14.7V8.8H.1Z"/>
                            <path d="M8.2,15.9,7,14.7,13.6,8,7,1.3,8.2.1,15.8,8Z"/>
                        </svg>
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

const Root = () => <Router><RoutePath /></Router>

ReactDOM.render(<Root />, document.getElementById('app'));
