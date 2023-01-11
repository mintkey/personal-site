import React from 'react';
import { Container } from '@mui/material';
import Lenis from '@studio-freight/lenis'
import './App.scss';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Socials from './Socials';

function App() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })
    window.lenis = lenis;
    
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        console.log({ scroll, limit, velocity, direction, progress })
    })
    
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    return (
        <div className="App viewport-fill">
            <header>
                <h2 id="logo">
                    <a href="mailto:helendmpsy@gmail.com">ㅎㄷ</a>
                </h2>
            </header>
            <Container fluid data-lenis-prevent id="frame">
                <Intro/>
                <About/>
                <Work/>
                <Projects/>
                <Socials/>
            </Container>
            <footer id="copyright">
                <p>© 2023 Helen Dempsey</p>
            </footer>
        </div>
    );
}

export default App;
