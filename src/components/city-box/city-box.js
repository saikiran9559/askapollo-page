import {
    Container,
    ImageContainer,
    Image,
    Name,
} from './style'
const City = ({city, citiesDisplay, setCitiesDisplay}) => {
    return (
        <Container onClick={() => {setCitiesDisplay({...citiesDisplay, 'name': city['name'], 'display': false})}}>
            <ImageContainer>
                <Image src={city['svg']} alt={city['name']} />
            </ImageContainer>
            <Name> {city['name']} </Name>
        </Container >
    );
}

export default City;
