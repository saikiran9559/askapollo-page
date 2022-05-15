//Components import 
import City from '../../components/city-box/city-box'

//data import 
import {cities} from '../../data/cities'
//styled components imports 
import {
    Background,
    Container,
    Heading,
    GridContainer
} from './style'

const SelectCityPopUp = ({setCitiesDisplay, citiesDisplay}) => {
    return (
        <Background>
            <Container>
                <Heading>Popular Cities</Heading>
                <GridContainer>
                    {cities.map((item) => {
                        return <City city={item} key={item['name']} setCitiesDisplay={setCitiesDisplay} citiesDisplay={citiesDisplay} />
                    })}
                </GridContainer>
            </Container>
        </Background>
    );
}
export default SelectCityPopUp;
