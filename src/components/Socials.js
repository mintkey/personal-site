import React from 'react';
import { Container, Stack } from '@mui/material';
import './Socials.scss';

const Socials = () => {
    return (
        <div>
            <Container id="socials">
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <a href="https://github.com/mintkey" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/helen-dempsey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Stack>
            </Container>
        </div>
    )
}

export default Socials;