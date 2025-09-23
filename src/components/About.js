import React from 'react';
import { Container } from '@mui/material';
import './About.scss';

const About = () => {
    return (
        <>
            <Container className="spacer">
                <p id="bio">
                    I’m a developer and designer based in NYC with a passion for minimalism and creating clean yet
                    delightful user interfaces. I strongly believe in the beauty of simplicity and that thoughtful design
                    is integral to a great digital experience.
                    <br />
                    <br />
                    When I’m not working at <a href="https://nytimes.com/" target="_blank" rel="noopener noreferrer"><span>The New York Times</span></a>,
                    I can be found in a café working on a side project, somewhere shooting film photography, or training for the New York
                    City Marathon with <a href="https://banditrunning.com/" target="_blank" rel="noopener noreferrer"><span>Bandit</span></a>.
                </p>
            </Container>
        </>
    )
}

export default About;