import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import './Work.scss';
import Arrow from '../assets/Arrow.svg'

const Work = () => {
    const [emails] = useState([
        {
            source: require('../assets/BG/021522_Prada_VIC.jpg'),
            title: "Prada VIC email"
        },
        {
            source: require('../assets/BG/030722_New_Arrivals.jpg'),
            title: "New Season Essentials email"
        },
        {
            source: require('../assets/BG/031622_Editorial.jpg'),
            title: "Collage Editorial email"
        },
        {
            source: require('../assets/BG/031822_Mens_Dress_Codes.jpg'),
            title: "Men's Dress Codes email"
        },
        {
            source: require('../assets/BG/051222_The_Weekend_Agenda.jpg'),
            title: "The Weekend Agenda email"
        },
        {
            source: require('../assets/BG/052622_Editorial.jpg'),
            title: "Editorial email"
        },
        {
            source: require('../assets/BG/060922_AMQ_Mens.jpg'),
            title: "Alexander McQueen Men's co-op email"
        },
        {
            source: require('../assets/BG/080422_One_Trend_Two_Ways.jpg'),
            title: "One Trend, Two Ways email"
        },
        {
            source: require('../assets/BG/081122_Evening_Hour_Edit.jpg'),
            title: "Evening Hour Editorial email"
        }
    ]);

    let [index, setIndex] = useState(0);
    let currentEmail = emails[index];

    const nextEmail = () => {
        index !== emails.length -1 ? setIndex(index + 1) : setIndex(index = 0);
        currentEmail = emails[index];
        document.getElementById("gallery-frame").scrollTop = 0;  
    }

    return (
        <>
            <Container className="spacer">
                <Grid container justifyContent="center" direction="row">
                    <Grid item xs={8} sm={5} id="gallery-wrapper">
                        <div data-lenis-prevent id="gallery-frame">
                            <img src={currentEmail.source} alt={currentEmail.title} />
                        </div>
                        <div id="gallery-nav-container">
                            <p>
                                {`${index + 1}`}/{`${emails.length}`}&nbsp;
                                <button className="arrow" onClick={nextEmail}>
                                    <img src={Arrow} alt="arrow" />
                                </button>
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={1}>&nbsp;</Grid>
                    <Grid xs={8} sm={6} id="work-description">
                        <div>
                            <h2>Bergdorf Goodman</h2>
                            <p>
                                From 2021 to 2023, I was a web designer and developer 
                                for Bergdorf Goodman's email campaigns. I was responsible for incorporating 
                                rich text into email files, coding over 20 email template designs with 
                                HTML and CSS, designing layouts for various email-exclusive editorials, 
                                and creating graphic designs that have been featured across email,&nbsp;
                                <a href="https://bergdorfgoodman.com/" target="_blank" rel="noopener noreferrer">bg.com</a>, 
                                and <a href="https://instagram.com/bergdorfs" target="_blank" rel="noopener noreferrer">@bergdorfs</a>.
                            </p>
                                <br/>
                            <p>
                                As a developer, I followed current email standards and code practices to ensure that 
                                email HTML was both mobile-optimized and consistent across email platforms.
                            </p>
                                <br/>
                            <p>
                                As a designer, I made sure that layouts were consistent from email to email, 
                                optimized for the user, and aligned with Bergdorf’s digital brand.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Work;