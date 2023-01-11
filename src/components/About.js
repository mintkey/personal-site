import React from 'react';
import { Container } from '@mui/material';
import './About.scss';

const About = () => {
    return (
        <div>
            <Container>
                <p id="bio">
                    I’m a developer and designer based in NYC with a passion for minimalism and creating clean yet
                    delightful user interfaces. I strongly believe in the beauty of simplicity and that thoughtful design
                    is integral to a great digital experience.
                    <br />
                    <br />
                    When I’m not working at <a href="https://nytimes.com/" target="_blank" rel="noopener noreferrer"><span>The New York Times</span></a>,
                    I can be found in a café working on a side project, somewhere in NY shooting
                    film photography, at home playing <span>Final Fantasy</span>,
                    and always listening to music.
                </p>
            </Container>
        </div>
    )
}

export default About;