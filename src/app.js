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

function RoutePath() {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="transition" timeout={{ enter: 2000, exit: 1000 }}>
                <div className="main-container">
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/project" element={<Project />}>
                            <Route path="rice" element={<Project />} />
                            <Route path="chs" element={<Project />} />
                            <Route path="cals" element={<Project />} />
                            <Route path="jfm" element={<Project />} />
                            <Route path="lim" element={<Project />} />
                        </Route>
                    </Routes>

                    <div className='cursor cursor--custom'></div>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

const Root = () => <Router><RoutePath /></Router>

ReactDOM.render(<Root />, document.getElementById('app'));
