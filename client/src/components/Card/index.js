import React from 'react';

import {
    CardContainer,
    CardHeader,
    CardBody,
} from './Card.Styles';

const Card = ({cardData}) => {

    return (
        <>
            <CardContainer>
                <CardHeader>
                    <h2>{cardData.title}</h2>
                </CardHeader>
                <CardBody>
                    <p> {cardData.body} </p>
                </CardBody>        
            </CardContainer>
        </>
    )
}

export default Card;