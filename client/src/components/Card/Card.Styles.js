import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 300px;
    min-height: 410px;
    background-color: lightblue;
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 25px;
    box-shadow: 2px 2px 10px var(--altClr);

    &:hover {
        transform: scale(1.1);
        background-color: blue;
    }
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: lightgoldenrodyellow;
    color: var(--darkClr);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const CardBody = styled.div`
    width: 100%;
    min-height: 350px;
    background-color: lightpink;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: .5rem;
`;