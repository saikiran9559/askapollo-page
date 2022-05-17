import {useState, useRef} from 'react'
//components import
import City from '../../components/city-box/city-box'
import SpecialityBox from '../../components/speciality-box/speciality-box'
import OtherCitiesBox from '../OthersBox'
//styled components import
import {
    Container,
    SectionContainer,
    Heading,
    Number,
    Description,
    SubHeading,
    CitiesContainer,
    Wrap,
    DropHeading,
    DropContainer,
    Box,
    Continue,
    OtherCityName,
    Wrap2,
} from './style'

//data import
import {cities} from '../../data/cities'
import {specialities} from '../../data/speciality-data'
import {cities as otherCities} from '../../data/more-links-data';
import {ReactComponent as Arrow} from './../../assets/continue-arrow.svg';
const Sections = ({sectionOne, sectionTwo, sectionThree, stage, setStage, gotoSectionTwo, gotoSectionThree}) => {
    const [isHospital, setIsHospital] = useState(false);
    const [isClinic, setIsClinic] = useState(false);
    const [otherShow, setotherShow] = useState(false);
    return (
        <Container>
            <SectionContainer ref={sectionOne}>
                <Number>1.</Number>
                <Heading>Select Your City</Heading>
                <Description> Private online consultations with verified doctors in all specialists. </Description>
                <SubHeading>Popular Cities</SubHeading>
                <CitiesContainer>
                    {cities.map((item) => {
                        if(stage['city']==item['name'])
                        return <City gotoSectionTwo={gotoSectionTwo} pop={false} selected={true} city={item} key={item['name']} stage={stage} setStage={setStage} />
                        else
                        return <City gotoSectionTwo={gotoSectionTwo} pop={false} selected={false} city={item} key={item['name']} stage={stage} setStage={setStage}/>
                    })}
                    <OtherCitiesBox otherShow={otherShow} setotherShow={setotherShow} />
                </CitiesContainer>
                <Wrap2 show={otherShow}>
                    <SubHeading> Other Cities </SubHeading>
                    <div style={{'color': 'grey', 'fontSize': '12px'}}>
                        {otherCities.map((name) => {
                            return <span key={name}><OtherCityName key={name} > {name} </OtherCityName> •</span>
                        })}
                    </div>
                </Wrap2>
            </SectionContainer>

            <SectionContainer ref={sectionTwo}>
                <Number>2.</Number>
                <Heading>Select Speciality</Heading>
                <Description> Private online consultations with verified doctors in all specialists. </Description>
                <CitiesContainer>
                    {specialities.map((item) => {
                        if(stage['stage']>=2 && stage['speciality']==item['name'])
                        return <SpecialityBox selected={true} speciality={item} key={item['name']} stage={stage} setStage={setStage} gotoSectionThree={gotoSectionThree}/>
                        else
                        return <SpecialityBox selected={false} speciality={item} key={item['name']} stage={stage} setStage={setStage} gotoSectionThree={gotoSectionThree}/>
                    })}
                </CitiesContainer>
            </SectionContainer>

            <SectionContainer ref={sectionThree}>
                <Number>3.</Number>
                <Heading>Select Speciality</Heading>
                <Description> Private online consultations with verified doctors in all specialists. </Description>
                <Wrap bool={isHospital}>
                    <DropHeading onClick={() => setIsHospital(!isHospital)}>Hospitals</DropHeading>
                    <DropContainer bool={isHospital}>
                        <Box>Apollo Health City Jubilee Hills</Box>
                        <Box>Apollo Hospitals D R D O</Box>
                        <Box>Apollo Hospitals Hyderguda</Box>
                        <Box>Apollo Hospitals Secunderabad</Box>
                    </DropContainer>
                </Wrap>
                <Wrap bool={isClinic}>
                    <DropHeading onClick={() => setIsClinic(!isClinic)}>Clinics</DropHeading>
                    <DropContainer bool={isClinic}>
                        <Box>Apollo Health City Jubilee Hills</Box>
                        <Box>Apollo Hospitals D R D O</Box>
                        <Box>Apollo Hospitals Hyderguda</Box>
                        <Box>Apollo Hospitals Secunderabad</Box>
                    </DropContainer>
                </Wrap>
            </SectionContainer>
            <Continue>Continue
                <Arrow />
            </Continue>
        </Container>
    );
}

export default Sections;

