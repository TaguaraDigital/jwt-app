import styled from 'styled-components';

export const AboutContainer = styled.section`
    width: 100%;
    height: 100vh;

    background-color: ${props => props.bgClr};
    
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;


export const AboutContent = styled.div`
    z-index: 30;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const AboutTitle = styled.h1`
    color: var(--blueClr);
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const AboutText = styled.p`
    color: var(--blueClr);
    max-width: 600px;
    font-size: 2.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        max-width: 350px;
        font-size: 1.2rem;
    }
`;