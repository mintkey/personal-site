import React from 'react';
import { Container } from '@mui/material';
import './Photography.scss';

const importImages = (r) => {
    return r.keys().map(r);
}

const images = importImages(require.context('../assets/Photography', false, /\.(png|jpe?g|svg)$/));

const Photography = () => {
    return (
        <div>
            <Container>
                <div>
                    <h2 className="section-title">
                        <i>
                            Available Prints
                        </i>
                    </h2>
                    <h3 className="subtitle">
                        <i>
                            All prints are 1 of 1. All sales are final.
                            <br />
                            Inquire for pricing.
                        </i>
                    </h3>
                </div>
                <div className="grid">
                    {images.map((image, index) => (
                        <div key={index} className="grid-item">
                            <a href="/">
                                <img
                                    src={image}
                                    alt={`Photography ${index + 1}`}
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Photography;
