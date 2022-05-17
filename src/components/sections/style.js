import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 70%;
    min-width: 70%;
    // max-width: 500px;
    // min-width: 500px;
    // padding-bottom:50px;
    // @media(max-width:975px){
    //     max-width: 360px;
    //     min-width: 360px;
    // }
`
export const SectionContainer = styled.div`
    margin-top: 70px;
    width: 100%;
    position:relative;
    box-sizing: border-box;
    border-bottom: 0.5px solid rgba(0,0,0,0.1);
    padding-bottom: 50px;
`
export const Heading = styled.div`
    color: #174e61;
    font-weight: 600;
    text-transform: capitalize;
`
export const Description = styled.div`
    font-weight: 400;
    line-height: 1.6;
    font-size: 14px;
    letter-spacing: .3px;
    margin-top: 0;
    margin-bottom: 1rem;
    color: #7b7b7b;
`
export const SubHeading = styled.div`
    font-size: 14px;
    color: #224855;
    text-transform: capitalize;
`
export const CitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
export const Number = styled.div`
    position: absolute;
    left:-20px;
    top:0px;
    color: #174e61;
    font-weight: 600;
    text-transform: capitalize;
`
export const Wrap = styled.div`
    transition:all .3s ease-in-out;
    // tranform: scaleY(${({bool}) => bool ? '100%' : '0%'})
    height:${({bool}) => bool ? 'auto' : '30px'};
    overflow: hidden;
`
export const DropContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
`
export const Box = styled.div`
    max-width: 162px;
    // max-height:80px;
    min-width: 162px;
    // min-height: 80px;
    cursor: pointer;
    font-size: 12px;
    border: 0 solid #f1f6f7;
    background-color: #d9e2e4;
    padding: 12px;
    min-height: 70px;
    color: #454545;
    text-decoration: none;
    border-radius: 4px;
    transition: border .3s ease-in-out;
`
export const DropHeading = styled.div`
    font-size: 14px;
    letter-spacing: 0.8px;
    text-decoration: none;
    font-weight: 100;
    cursor: pointer;
    color: #224855;
    padding: 5px 0;
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

export const Continue = styled.button`
    display: flex;
    flex-direction: row;
    gap: 20px;
    background: linear-gradient(to bottom right,#007291,#224855);
    border: none;
    height: 36px;
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: .8px;
    border-radius: 4px;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 11px;
    text-align: center;
    line-height: 1.5;
    cursor: pointer;
    color: white;
`

export const Wrap2 = styled.div`
    position: relative;
    width:100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: ${({show}) => !show ? 'auto' : '0px'};
    overflow: hidden;
`
export const OtherCityName = styled.a`
    margin: 0px 3px;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
    letter-spacing: .2px;
    text-transform: capitalize;
    margin-bottom: 0;
    text-decoration: none;
    position: relative;
    line-height: 22px;
    color:  grey;
    cursor: pointer;
    &:hover{
        color: #007291;
    }
}
`
