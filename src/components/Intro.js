import React from 'react';
import { Container } from '@mui/material';
import './Intro.scss';

const Intro = () => {
    return (
        <div className="viewport-fill vertical-center">
            <Container>
                <h1 id="name">
                    Helen<br/>Dempsey
                </h1>
            </Container>
        </div>
    )
}

export default Intro;
