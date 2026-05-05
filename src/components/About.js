import React from 'react';
import { Container } from '@mui/material';
import './About.scss';

const About = () => {
    return (
        <>
            <Container className="spacer">
                <p id="bio">
                    I’m a film photographer and software engineer based in NYC. I capture the world through film because it challenges the
                    perfectionist in myself, and it's a way for me to document my perspective in a raw form.
                    <br />
                    <br />
                    When I’m not working at <a href="https://nytimes.com/" target="_blank" rel="noopener noreferrer"><span>The New York Times</span></a>,
                    I can be found somewhere shooting, in a café working on a side project, or running.
                </p>
            </Container>
        </>
    )
}

export default About;