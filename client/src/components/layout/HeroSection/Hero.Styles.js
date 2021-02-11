import styled from 'styled-components';

export const HeroContainer = styled.section`
    margin:0;
    background-color: var(--mainClr);
    height: 800px;
    position: relative;
    padding: 0 2rem;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroBg = styled.div`
    height: 100%;
    width: 100%;
    
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0, .5);
        top:0;
        left:0;
    }

`;

export const ImgBg = styled.img `
    height: 100%;
    width: 100%;
    position: relative;
    object-fit: cover;
    object-position: center;
`;

export const HeroContent = styled.div`
    z-index: 30;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeroTitle = styled.h1`
    color: var(--lightClr);
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const HeroText = styled.p`
    color: var(--lightClr);
    max-width: 600px;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        max-width: 350px;
        font-size: 1.2rem;
    }
`;

