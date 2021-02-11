import React from 'react';
import Card from '../../Card';
import cardData from './cardData.json';

import {
    ServicesContainer,
    ServicesHeader,
    ServicesTitle,
    ServicesText,
    ServicesCards
    
} from './Servces.Styles'

const ServicesSection = ({ id, title, classes, bgClr="var(--mainClr)"}) => {
    
    return (
        <>
        <ServicesContainer id={id} bgClr={bgClr}>
            <ServicesHeader>
                <ServicesTitle className={classes}> {title} </ServicesTitle>
                <ServicesText> En Taguara Digital estamo para darte una mano</ServicesText>
            </ServicesHeader>
            <ServicesCards>
                {cardData.map((card, i) => {
                    return(
                        <Card key={'card-' + i} cardData={card}/>
                    )
                })}
            </ServicesCards>
        </ServicesContainer>
        </>
    )
}

export default ServicesSection;