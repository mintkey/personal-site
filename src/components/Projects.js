import React from 'react';
import {Container, Grid} from '@material-ui/core';
import './Projects.scss';
import FordhamHacks from '../assets/fordhamhacks.png';
import MathFest2020 from '../assets/mathfest2020.png';
import Melo from '../assets/melo-mockups.png';

const Projects = () => {
    return (
        <div id="projects">
            <Container maxWidth="lg">
                <h1>Projects</h1>
                <Grid container>
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>MathFest 2020</h2>
                            <p>Informational registration website for Fordham University's annual MathFest
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
                            <p>Informational website for Fordham University's first hackathon</p>
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
                    <Grid item xs={0} sm={4} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="project-info">
                            <h2>Melo</h2>
                            <p>UI/UX conceptual design for a music-sharing platform</p>
                            <ul className="tools">
                                <li>Sketch</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <img className="project" src={Melo} alt="UI/UX mockups of Melo"/>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid
                        item
                        xs={12}
                        className="link"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out">
                        <h3>
                            <a href="https://vsco.co/helendmp/" target="_blank" rel="noopener noreferrer">Photography</a>
                        </h3>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Projects;