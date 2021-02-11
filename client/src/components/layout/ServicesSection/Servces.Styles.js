import styled from 'styled-components';

export const ServicesContainer = styled.section`
    width: 100%;
    height: 100%;

    background-color: ${props => props.bgClr};
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const ServicesHeader = styled.div`
    z-index: 30;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const ServicesTitle = styled.h1`
    color: var(--blueClr);
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ServicesText = styled.p`
    color: var(--blueClr);
    max-width: 600px;
    font-size: 2.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        max-width: 350px;
        font-size: 1.2rem;
    }
`;

export const ServicesCards = styled.div`
    width:100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;