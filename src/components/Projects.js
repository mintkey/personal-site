import React from 'react';
import { Container, Grid } from '@mui/material';
import './Projects.scss';
import Arrow from '../assets/Arrow.svg'
import Auxcord from '../assets/auxcord.png';
import Caffeinated from '../assets/caffeinated.png';
import Melo from '../assets/melo.png';

const Projects = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 2, sm: 8 }} direction={{ xs: 'column', sm: 'row' }} justifycontent="center" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} className="project">
                    <Grid item sm={8}>
                        <div className="project-frame" id="auxcord">
                            <img src={Auxcord} alt="screenshot of Auxcord landing page"/>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className="description">
                            <h2>Auxcord</h2>
                            <p>
                                A music editorial site that features a new song and submission every week.
                                <br/>
                                <br/>
                                The idea behind it is to allow people to discover music (or rediscover music
                                they already know) with the context of people's personal connections to specific songs.
                            </p>
                            <br/>
                            <span className="link arrow">
                                <a href="https://auxcord.xyz" target="_blank" rel="noopener noreferrer">
                                    Visit Site&nbsp;&nbsp;<img src={Arrow} />
                                </a>
                            </span>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, sm: 8 }} direction={{ xs: 'column', sm: 'row' }} justifycontent="center" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} className="project">
                    <Grid item sm={8}>
                        <div className="project-frame">
                            <img src={Caffeinated} alt="three UI/UX iPhone mockups of Caffeinated"/>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className="description">
                            <h2>Caffeinated</h2>
                            <p>
                                SwiftUI project
                            </p>
                            <br/>
                            <span className="link arrow">
                                <a href="https://github.com/mintkey/Caffeinated" target="_blank" rel="noopener noreferrer">
                                    See Code&nbsp;&nbsp;<img src={Arrow} />
                                </a>
                            </span>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, sm: 8 }} direction={{ xs: 'column', sm: 'row' }} justifycontent="center" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} className="project">
                    <Grid item sm={8}>
                        <div className="project-frame">
                            <img  src={Melo} alt="three isometric UI/UX mockups of Melo"/>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className="description">
                            <h2>Melo</h2>
                            <p>
                                UI/UX concept design
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Projects;