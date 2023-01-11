import React from 'react';
import { Container } from '@mui/material';
import './Intro.scss';

const Intro = () => {
    return (
        <div>
            <Container fixed>
                <h1 id="name">
                    Helen<br/>Dempsey
                </h1>
                <h3 id="title">
                    Developer & Designer
                </h3>
            </Container>
        </div>
    )
}

export default Intro;
