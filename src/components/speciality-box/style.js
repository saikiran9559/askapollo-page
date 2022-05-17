import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
`
export const Box = styled.div`
    max-width: 110px;
    min-width: 110px;
    max-height: 90px;
    min-height: 90px;
    border: 1px solid #b2c7cd;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
    background: ${({selected})=>selected?'rgb(255, 231, 171)':'#f1f6f7'};
    &:hover{
        border-color: #2e718e;
    }
`
export const Image = styled.img`
    min-width: 42px;
    max-width: 42px;
    aspect-ratio: 1/1;
`
export const Name = styled.div`
    font-size: .71rem;
    color: #000;
    margin-top: 4px;
    line-height: 1.2;
    text-transform: capitalize;
    color: black;
`
