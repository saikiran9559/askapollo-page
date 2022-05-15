import styled from "styled-components";
import {keyframes} from "styled-components";

const topToBottom = keyframes`
    0%{
        transform:translateY(-20%);
        opacity:0%;
    }
    50%{
        transform: translateY(-10%)
        opacity:100%;
    }
    100%{
        transform:translateY(0%);
        opacity:100%;
    }
`

export const Background = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width:60%;
    margin: auto auto;
    border-radius: 1.2rem;
    background-color: white;
    padding: 15px;
    animation: ${topToBottom} 0.3s ease;
`



export const Heading = styled.div`
    font-size: 13px;
    font-weight: 400;
    letter-spacing: .2px;
    color: #224855;
    margin-bottom: 16px;
    text-transform: capitalize;
`
export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`
