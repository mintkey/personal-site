import React from 'react';
import {Container} from '@material-ui/core';
import './Intro.scss';

const Intro = () => {
    return (
        <div
            className="viewport-fill vertical-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-out">
            <Container fixed>
                <h1 id="intro-heading">Hi, I'm Helen.&nbsp;<span id="pronouns">
                        (she/her)
                    </span>
                </h1>
                <div id="intro-content">
                    <p>
                        I’m a developer and designer from NY who loves clean user interfaces. I'm passionate about
                        improving diversity in tech and combatting climate change.
                        <br/><br/>
                        Currently looking for an internship or full-time role in web and/or design. Also available for freelance/contract work.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Intro;
