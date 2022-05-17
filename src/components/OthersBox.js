import Others from '../assets/other.svg'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageContainer = styled.div`
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
    }
`

const Image = styled.img`
    max-width:20px;
    min-width:20px;
    max-height:20px;
    min-height:20px;
`

const Name = styled.div`
    font-size: .71rem;
    color: #000;
    margin-top: 4px;
    line-height: 1.2;
    text-transform: capitalize;
`

const OtherCitiesBox = ({otherShow, setotherShow}) => {
    return (
        <Container onClick={() => setotherShow(!otherShow)}>
            <ImageContainer>
                <Image src={Others} alt='others' />
            </ImageContainer>
            <Name> Others</Name>
        </Container >
    );
}

export default OtherCitiesBox;
