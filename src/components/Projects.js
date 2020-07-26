import React from 'react';
import { Hidden, Grid } from '@material-ui/core';
import './Projects.scss';
import FordhamHacks from '../assets/fordhamhacks.png';
import MathFest2020 from '../assets/mathfest2020.png';

const Projects = () => {
    return (
        <div id="projects">
                <h1>Projects</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a href="https://faculty.fordham.edu/cbreiner/mathfest.html" target="_blank" rel="noopener noreferrer">
                            <img className="project" src={MathFest2020} alt="Screenshot of MathFest2020 webpage"/>
                        </a>
                    </Grid>                  
                    <Grid item sm={12} data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a href="https://hackathon.fordham.edu" target="_blank" rel="noopener noreferrer">
                            <img className="project" src={FordhamHacks} alt="Screenshot of FordhamHacks webpage"/>
                        </a>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs={12} className="link" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a href="#">Design</a>
                    </Grid>
                    <Grid item xs={12} className="link" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <a href="https://vsco.co/m2nhee/" target="_blank" rel="noopener noreferrer">Photography</a>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Projects;