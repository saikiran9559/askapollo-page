import {
    Container,
    ImageContainer,
    Image,
    Name,
} from './style'
const City = ({gotoSectionTwo, city, pop, citiesDisplay, setCitiesDisplay, stage, setStage, selected}) => {
    const execute=()=>{
        setStage({...stage, 'stage': 1, 'city': city['name']})
        if(pop){
            setCitiesDisplay({...citiesDisplay, 'name': city['name'], 'display': false});
        }
        gotoSectionTwo();
    }
    return (
        <Container onClick={() =>execute() }>
            <ImageContainer selected={selected}>
                <Image src={city['svg']} alt={city['name']} />
            </ImageContainer>
            <Name> {city['name']} </Name>
        </Container >
    );
}

export default City;
