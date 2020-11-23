import React from 'react';
import { Grid } from '@material-ui/core';
import './About.scss';
import Portrait from '../img/self-portrait.JPG';

const About = () => {
    return (
        <div id="about" className="viewport-fill vertical-center">
            <Grid container justify="center" alignItems="center">
                <Grid
                    item
                    xs={10}
                    sm={5}
                    spacing={3}
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out">
                    <h1>About me</h1>
                    <p id="bio">
                        I’m a recent graduate of Fordham University with a B.S. in computer
                        science. A graphic design class I took senior year really solidified my interest
                        in design, and a not-so-great study abroad semester cemented my desire to help
                        make tech more inclusive. Before I started programming, I was—and still am—passionate
                        about music, as I've been playing piano for 15 years, as well as the flute, guitar, and ukulele.
                        <br/><br/>
                        When I’m not coding, I enjoy video games, photography, traveling, and discovering new
                        music.
                    </p>
                </Grid>
                <Grid
                    item
                    xs={0}
                    sm={5}
                    spacing={3}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out">
                    <img id="portrait" src={Portrait} alt="Self portrait of Helen Dempsey"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;