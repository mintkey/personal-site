import React, {useEffect} from 'react';
import Headroom from 'react-headroom';
import {Container} from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import Icon from '../icon';
import Links from './Links';
import Intro from './Intro';
import Projects from './Projects';
import About from './About';

function App() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="App">
            <Headroom>
                <header>
                    <h2 id="logo">
                        <a href="#intro">ㅎㄷ</a>
                    </h2>
                    <nav className="inline">
                        <ul>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </Headroom>
            <Links/> 
            <Container fluid>
                <Intro/>
                <Projects/>
                <About/>
            </Container>
            <footer id="footer">
                <div id="mobile-links" className="inline">
                    <ul>
                        <li>
                            <a href="mailto:helendmpsy@gmail.com">
                                <Icon name="email" width={25}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mintkey/" target="_blank" rel="noopener noreferrer">
                                <Icon name="github" width={25}/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/helen-dempsey/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon name="linkedin" width={25}/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/helen_dmp/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon name="twitter" width={25}/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/helendmp/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon name="instagram" width={25}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>© 2020 Helen Dempsey</p>
            </footer>
        </div>
    );
}

export default App;
