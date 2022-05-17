import styled from 'styled-components'
import plus from '../../assets/accordian-plus.svg';
import minus from '../../assets/accordian-minus.svg';
export const Container = styled.div`
    margin-top: 20px;
    max-width: 100%;
    border-top: 6px solid #ebac0f;
    border-bottom: 6px solid #ebac0f;
    background-color: #007291;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 8%;
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: ${({show}) => show ? 'row' : 'column'};
    justify-content: space-between;
    gap: 15px;

`
// export const
// export const DropContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 0px;
//     border-bottom: 1px solid rgba(0,0,0,0.8);
//     font 
// `
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    transition: all .3s linear;
    height: ${({show, bool}) => show || bool ? "auto" : "32px"};
`
export const HeaderPlus = styled.button`
    border-style: none;
    background: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-bottom: 10px;
    margin-left: 0px;
    padding-left: 0px;
`
export const Header = styled.div`
    color: white;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.9px;
`
export const Plus = styled.div`
    max-width: 22px;
    min-width: 22px;
    margin-right: 10px;
    aspect-ratio: 1/1;
    background:${({show}) => show ? `url(${minus})` : `url(${plus})`};
    background-size: contain;
`
export const list = styled.div`
    display: flex;
    flex-direction: column;
`
export const Name = styled.div`
    font-size: 10.8px;
    font-weight: 100;
    text-decoration: none;
    line-height: 22px;
    letter-spacing: .8px;
    color: white;
    cursor: pointer;
    &:hover{
        color: #ebac0f;
    }
`

export const RightSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media(max-width:  776px){
        flex-direction: column;
        gap: 20px;
    }
`
export const Image = styled.img`
    max-width:110px;
    min-width: 110px;
    max-height:33.3px;
    min-height: 33.3px;
`
export const Rights = styled.div`
    font-size: 10px;
    color: #fff;
    margin: 0;
`
export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 13px;
`
export const SocialImage = styled.img`
    cursor: pointer;
    width: 13px;
`

export const AllSpecialities = styled.div`
    display: grid;
    grid-template-columns: ${({show}) => show ? 'auto auto' : 'auto'};
    
    gap: 0 50px;
`
