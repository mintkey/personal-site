import React from 'react';
import { Container, Stack } from '@mui/material';
import './Socials.scss';

const Socials = () => {
    return (
        <div>
            <Container id="socials">
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <a href="mailto:helendmpsy@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    <a href="https://instagram.com/helens.film" target="_blank" rel="noopener noreferrer">Instagram</a>
                </Stack>
            </Container>
        </div>
    )
}

export default Socials;