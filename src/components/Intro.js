import React from 'react';
import { Container } from '@material-ui/core';
import './Intro.scss';

const Intro = () => {
    return (
        <div className="viewport-fill vertical-center" data-aos="fade-up" data-aos-easing="ease-in-out">
            <Container fixed>
                <h1 id="intro-heading">Hey there! I'm Helen.&nbsp;<span id="pronouns"><i>(she/her)</i></span></h1>
                <div id="intro-content">
                    <p>
                        I’m a developer from NY who loves clean user interfaces and is passionate about
                        improving diversity in the tech world. I’m currently teaching at Girls Who Code.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Intro;