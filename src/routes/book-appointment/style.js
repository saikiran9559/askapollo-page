import styled from 'styled-components';
import TickMark from '../../assets/steps-check.svg';
import {keyframes} from 'styled-components';
import plus from '../../assets/accordian-plus.svg';
import minus from '../../assets/accordian-minus.svg';

export const Container2 = styled.div`
    position : relative;
    display: flex;
    flex-direction: column;
`
export const SearchContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d3e5eb;
`
export const SearchBox = styled.input`
    border-color: #2e718e !important;
    width: 250px !important;
    font-size: 12px;
    border: 1px solid #a5cbd7;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    padding: .375rem .75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;overflow: hidden;
    outline: none;
    &:focus{
        border-style: none;
    border: 1px solid #a5cbd7;
    }
`
export const Container = styled.div`
    position: relative;
    top:0px;
    width: 100%;
    display: flex;
    flex-direction: ${({show}) => show ? 'row' : 'column'};
    flex-basis: 0;
    align-items: ${({show}) => show ? '' : 'center'};
`
export const LeftContainer = styled.div`
    position: relative;
    padding-top:70px;
    position: ${({show}) => show ? 'sticky' : 'relative'};
    top: ${({show}) => show ? '0px' : ''};
    width: ${({show}) => show ? '33.3%' : '95%'};
    background-color: #007291;
    height: ${({show}) => show ? '130vh' : ''};
    clip-path: ${({show}) => show ? '' : `polygon(0% 0%, 100% 0%, 100% 96%, 53% 96%, 50% 100%, 47% 96%, 0 96%)`};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media(max-width:950px){
        height: ${({show}) => show ? '125vh' : ''};
    }
    padding-bottom:${({show}) => show ? '' : '10px'};
`

export const RigthContainer = styled.div`
    position:relative;
    width: 67%;
    background-color: #f6f9fb;
    @media(max-width:776px){
        width: 100%;
    }
`
export const DoctorImage = styled.img`
    // z-index:  2;
    position:${({show}) => show ? 'relative' : 'absolute'};
    top: ${({show}) => show ? '' : '-30px'};
    right: ${({show}) => show ? '' : '-10px'};
    max-width: ${({show}) => show ? '100%' : '220px'};
    min-width: ${({show}) => show ? '100%' : '220px'};
    object-fit: contain;
    @media(max-width: 450px){
        max-width: 150px;
        min-width: 150px;
        top: 10px;
        right: 2px;
    }
`

export const LevelContainer = styled.div`
    margin:0 auto;
    position:relative;
    // padding-top: 70px;
    
    max-width: ${({show}) => show ? '216px' : '90%'};
    min-width: ${({show}) => show ? '216px' : '90%'};
    flex-grow:1;
`


export const StepsContainer = styled.div`
    width: 100%;
    box-sizing:  border-box;
    display: flex;
    flex-direction:${({show}) => show ? 'column' : 'row'};
    font-weight: 600;
    // align-items: flex-start;
    border-top: 1px solid #2b4754;
    border-bottom: ${({show}) => show ? `1px solid #2b4754` : 'none'};
    padding-top: 24px;
    margin-top: 24px;
    padding-bottom: 16px;
    gap:10px;
    justify-content: space-between;
`

export const Number = styled.span`
    margin-left: 10px;
    position: relative;
    max-width: 28px;
    z-index:3;
    max-height: 28px;
    min-width:28px;
    min-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 12px;
    border: 2px solid #fff;
    border-radius: 100%;
    color: white;
    position : relative;
`

const fadeIn = keyframes`
    0%{
        opacity: 0%;
    }
    50%{
        opacity: 50%;
    }
    100%{
        opacity: 100%;
    }
`

export const Step = styled.div`
    position: relative;
    font-size: 11px;
    width: 10rem;
    display: flex;
    flex-direction: ${({show}) => show ? 'row' : 'column'};
    align-items: center;
    justify-content:start;
    color: white;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        color:#ebac0f;
    }

    // &:hover::after{
    //     transition: content .3s linear;
    //     content: url(${TickMark});
    //     animation: ${fadeIn} .3s linear;
    //     // top: 0px;
    //     // left:calc(38.5%-20px);
    //     width: 28px;
    //     z-index:4;
    //     height: 28px;
    //     position: absolute;
    // }
`

export const Tick = styled.div`
    display:visible;
    position: absolute;
    // top: 0px;
    background-image: url(${TickMark});
    min-width:  28px;
    max-width:28px;
    aspect-ratio: 1/1;
    // &:hover{
    //     left:-20px;
    // }
`

export const SectionName = styled.div`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
`
export const HeadDescription = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 450px){
        // width: 40%;
    }
`
export const Heading = styled.div`
    font-size: 22px;
    color:white;
    line-height: 1.2;
    max-width: 100%;
    min-width: 100%;
`

export const Description = styled.div`
    color: white;
    font-weight: 400;
    line-height: 1.6;
    font-size: 14px;
    padding-top: 10px;
    max-width: 216px;
    min-width: 216px;
`
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 10px 10px;
    border: 1px solid grey;
    margin: 20px 8% 30px 8%;
    border-radius: 4px;
    height: ${({show}) => show ? "auto" : "26px"};
    overflow: hidden;
`
export const Cities = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const Name = styled.div`
    color: #7b7b7b;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
`
export const Plus = styled.button`
    border-style: none;
    background-color: grey;
    color: #7b7b7b;
    max-width: 22px;
    min-width: 22px;
    aspect-ratio: 1/1;
    background:${({show}) => show ? `url(${minus})` : `url(${plus})`};
    background-size: contain;
`
export const CityNamesContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap;: auto;
`
export const CityName = styled.div`
    text-transform: uppercase;
    font-size: 10.8px;
    font-weight: 300;
    height: 42px;
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: .2px;
    color: grey;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: #0a58ca;

    }
`
