import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const HeaderContainer = styled.header`
    width: 100%;
    height: var(--header-height);
    position: sticky;
    top: 0;
    z-index: 100;

    background-color: var(--mainClr);
    color: var(--lightClr);
    
    /* margin-top: calc(var(--header-height) * -1); */
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: 960px) {
        padding: 0 1rem;
        background-color: var(--altClr);
        transition: all .8s ease;
    }
`;

export const HeaderLogo = styled(LinkR)`
    width:120px;
    cursor: pointer;
    
    img{
        display: block;
        max-width: 100%;
    }
`;

export const ToggleMenu = styled.div`
    color: var(--lightClr);
    font-size: 1.5rem;
    cursor: pointer;

    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }    
`;

export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width:100%;
        height: calc(100vh - var(--header-height));
        position: absolute;
        top: var(--header-height);
        left: ${({showToggleMenu}) => (showToggleMenu ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background-color: var(--altClr);
    }
`;

export const NavLinks = styled.li`
    padding: 0 .5rem;
    text-align:center;

    &:not(:first-of-type) {
        margin-left: 2rem;
        margin-top: 0;
        
        @media screen and (max-width: 768px) {
            margin-left: 0;
            margin-top: 2rem;
        }
    }    

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`;

export const NavLink = styled(LinkS)`
    position: relative;
    color: var(--lightClr);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: var(--ctaClr);
        width:100%;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--ctaClr);
            bottom: -2px;
            left: 0;
        }
    }
`;

export const NavLinkR = styled(LinkR)`
    position: relative;
    color: var(--lightClr);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: var(--ctaClr);
        width:100%;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--ctaClr);
            bottom: -2px;
            left: 0;
        }
    }
`;
export const ButtonLogin = styled(LinkR)`
    background-color: var(--ctaClr);
    color: var(--lightClr);
    white-space: nowrap;
    padding: .75rem 1.5rem;
    cursor: pointer;
    
    text-decoration: none;
    border: none;
    outline: none;

    &:hover {
        background-color: var(--ctaInvClr);
        transition: all .5s ease;
    }
`;