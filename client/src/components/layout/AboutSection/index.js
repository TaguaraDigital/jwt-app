import React from 'react';

import {
    AboutContainer,
    AboutContent,
    AboutTitle,
    AboutText,
    
} from './About.Styles'

const AboutSection = ({ id, title, classes, bgClr="#ff00ff" }) => {

        return (
        <AboutContainer id={id} bgClr={bgClr}>
            <AboutContent>
                <AboutTitle className={classes}> {title} </AboutTitle>
                <AboutText> Aqui va toda la informacion acerca de la empresa</AboutText>
                <AboutText> como quienes Somos</AboutText>
                <AboutText> el equipo que la conforma</AboutText>
                <AboutText> Historia, Misión y Visión</AboutText>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutSection
