import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageContainer = styled.div`
    box-sizing: border-box;
    max-width: 76px;
    min-width: 76px;
    min-height: 76px;
    max-height: 76px;
    border-radius: 5px;
    cursor: pointer;
    border 1px solid white;
    background-color: #f1f6f7;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        border: 1.5px solid #2e718e;
        background-color: #ebac0f;
    }
`

export const Image = styled.img`
    max-width:38px;
    min-width:38px;
    max-height:38px;
    min-height:38px;
`

export const Name = styled.div`
    font-size: .71rem;
    color: #000;
    margin-top: 4px;
    line-height: 1.2;
    text-transform: capitalize;
`

