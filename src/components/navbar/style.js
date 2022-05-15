import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 45px;
    padding-right: 13%;
    padding-left: 13%;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center !important;
    gap:20px;
    @media(max-width: 990px){
        padding: 0 5%;
    }
`
export const LogoContainer = styled.div`
    width: 234px;
    height: 58px;
`
export const LogoImage = styled.img`
    width: 102px;
    height: 58px;
    cursor: pointer;
`
export const Options = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 85%;
    justify-content: flex-end;
    align-items: center;
`
export const SelectCity = styled.div`
    width:107px;
    height: 28px;
    border-radius: 3px;
    border: 1px solid #007291;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size: 11px;
    color: #007259;
    font-weight: 400;
    letter-spacing: 0.5px;
    cursor: pointer;
    &:after{
        display: inline-block;
        margin-left: .255em;
        vertical-align: .255em;
        content: "";
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;
    }
`
export const Help = styled.div`
    width: 110px;
    height: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    letter-spacing: .1px;
    text-transform: capitalize;
    font-weight: 400;
    cursor: pointer;
    &:after{
        display: inline-block;
        margin-left: .255em;
        vertical-align: .255em;
        content: "";
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;
    }
    &:hover{
        color: #ebac0f;
    }
`
export const ChatImage = styled.img`
    width: 24px;
    height: 18px;
`

export const LoginSignup = styled.div`
    font-size: 12px;
    letter-spacing: .1px;
    text-transform: capitalize;
    font-weight: 300;
    &:hover{
        color: #ebac0f;
    }
`
export const MenuButton = styled.div`
    max-width: 32px;
    max-height: 32px;
`
