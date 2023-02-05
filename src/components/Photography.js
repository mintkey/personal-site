import React from 'react';
import { Container } from '@mui/material';
import Arrow from '../assets/Arrow.svg'
import './Photography.scss';

const Photography = () => {
    return (
        <div className="viewport-fill vertical-center">
            <Container>
                <span className="link">
                    <a href="https://vsco.co/helendmp" target="_blank" rel="noopener noreferrer" className="vertical-center" id="label">
                        <h3>Photography</h3>&nbsp;&nbsp;<img src={Arrow} />
                    </a>
                </span>
            </Container>
        </div>
    )
}

export default Photography;
