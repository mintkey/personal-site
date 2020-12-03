import React from 'react';
import {Container, Grid} from '@material-ui/core';
import './Projects.scss';
import Nanolens from '../assets/nanolens-icons.png';
import Caffeinated from '../assets/caffeinated.png';
import Melo from '../assets/melo.png';
import MathFest2020 from '../assets/mathfest2020.png';
import FordhamHacks from '../assets/fordhamhacks.png';

const Projects = () => {
    return (
        <div id="projects">
            <Container maxWidth="lg">
                <h1>Projects</h1>
                <Grid container>
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>Nanolens</h2>
                            <p>App icon redesigns</p>
                            <ul className="tools">
                                <li>Figma</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <img className="project" src={Nanolens} alt="Nanolens app icons"/>
                    </Grid>
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>Caffeinated</h2>
                            <p>SwiftUI app</p>
                            <ul className="tools">
                                <li>Sketch</li>
                                <li>SwiftUI</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a
                            href="https://github.com/mintkey/Caffeinated"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                className="project hvr-grow"
                                src={Caffeinated}
                                alt="Caffeinated iOS app mockups"/>
                        </a>
                    </Grid>
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>Melo</h2>
                            <p>UI/UX design concept for a music-sharing platform</p>
                            <ul className="tools">
                                <li>Sketch</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <img className="project" src={Melo} alt="UI/UX mockups of Melo"/>
                    </Grid>
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>MathFest 2020</h2>
                            <p>Website for Fordham University's annual MathFest
                                event</p>
                            <ul className="tools">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>AJAX</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a
                            href="https://faculty.fordham.edu/cbreiner/mathfest.html"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                className="project hvr-grow"
                                src={MathFest2020}
                                alt="Screenshot of MathFest2020 webpage"/>
                        </a>
                    </Grid>
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>FordhamHacks</h2>
                            <p>Website for Fordham University's first hackathon</p>
                            <ul className="tools">
                                <li>React</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a
                            href="https://hackathon.fordham.edu"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                className="project hvr-grow"
                                src={FordhamHacks}
                                alt="Screenshot of FordhamHacks webpage"/>
                        </a>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid
                        item
                        xs={12}
                        className="link"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out">
                        <h2>
                            <a class="hvr-grow" href="https://vsco.co/helendmp/" target="_blank" rel="noopener noreferrer">Photography</a>
                        </h2>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Projects;