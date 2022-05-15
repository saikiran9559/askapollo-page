import styled from 'styled-components'
import {keyframes} from 'styled-components'
import CloseSvg from '../../assets/hamburger-close.svg'

const rigthToLeft = keyframes`
    0%{
        transform:translateX(200%);
        opactiy: 0%;
    }
    50%{
        transform: translateX(150%);
        opacity: 100%;
    }
    100%{
        transform: translateX(0%);
        opacity: 100%;
    }
`

export const BackGround = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: ${({sidenav}) => sidenav ? "visible" : "none"};
`

export const Container = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    width:250px;
    height:100%;
    background-color: #f1f6f7;
    transition: all 1s ease;
    right: ${({sidenav}) => sidenav ? `0x` : `-250px`};
`
export const LoginContainer = styled.div`
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const LoginSignUp = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    background-color: #d69b08;
    color: #343a40;
`
export const Line = styled.div`
    height:4px;
    width: 100%;
    background-color: #d69b08;
`
export const PaddingContainer = styled.div`
    padding: 0px 30px;
    max-width: 100%;
    // flex-grow: 1;
`
export const Heading = styled.div`
    padding-top: 12px;
    padding-bottom: 5px;
    color: #224855;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .2px;
    text-transform: capitalize;
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Action = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction:row;
    align-items:center;
    gap:10px;
`
export const Image = styled.img`
    max-width: 12px;
    min-width: 12px;
    max-height: 12px;
    min-height: 12px;
`

export const ActionName = styled.div`
    color: #6c757d;
    width:100%;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: .2px;
    text-transform: capitalize;
    text-decoration: none;
    line-height: 24px;
    position: relative;
    &:after{
        content: ">";
        position: absolute;
        right: 0;
        font-weight: 700;
    }
    &:hover{
        color: #d69b08;
    }
`

export const Close = styled.div`
    background: url(${CloseSvg});
    background-size: cover;
    position: absolute;
    bottom: 20px;
    left: 50%;
    max-width: 32px;
    min-width: 32px;
    max-height: 32px;
    min-height: 32px;
    cursor: pointer;
    &:hover{
        color: #000;
        text-decoration: none;
        opacity: .75;
    }
`
