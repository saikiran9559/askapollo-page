import {useState, useEffect, useRef} from 'react';
// components import
import Sections from '../../components/sections/sections';
import MoreLinks from '../../components/more-links/more-links';

//styled components import
import {
    Container,
    Container2,
    LeftContainer,
    RigthContainer,
    DoctorImage,
    LevelContainer,
    HeadDescription,
    Heading,
    Description,
    StepsContainer,
    Step,
    Number,
    Tick,
    SectionName,
    Wrap,
    Cities,
    Name,
    Plus,
    CityNamesContainer,
    CityName,
    SearchContainer,
    SearchBox,
} from './style'
import {CitiesContainer} from '../../components/sections/style';
import {cities} from '../../data/more-links-data'
const doctorPng = require('../../assets/book-appointment-bg.png');
const BookAppointment = ({stage, setStage, gotoSectionOne, gotoSectionTwo, gotoSectionThree, sectionOne, sectionTwo, sectionThree}) => {

    const [show, setShow] = useState(true);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const getsize = () => {
        return window.innerWidth;
    }
    const handleResize = () => {
        if (getsize() < 776) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const [iscityshow, setcityshow] = useState(false);
    return (
        <Container2>
            {!show &&
                <SearchContainer>
                    <SearchBox placeholder="Search by: Doctors, Specialities, Symptoms,..." />
                </SearchContainer>
            }
            <Container show={show}>
                <LeftContainer show={show}>
                    <LevelContainer show={show}>
                        <HeadDescription>
                            <Heading>Hi,!</Heading>
                            <Description>Answer a few basic questions to get in touch with you. </Description>
                        </HeadDescription>
                        <StepsContainer show={show}>
                            <Step show={show} onMouseEnter={() => setOne(true)} onMouseLeave={() => {setOne(false)}} onClick={() => gotoSectionOne()}>
                                <Number >
                                    1
                                    {<Tick />}
                                </Number>
                                <SectionName>Select Location</SectionName>
                            </Step>
                            <Step show={show} onMouseEnter={() => setTwo(true)} onMouseLeave={() => {setTwo(false)}} onClick={gotoSectionTwo}>
                                <Number >
                                    2
                                    {(two || stage['stage']>=2) && <Tick />}
                                </Number>
                                <SectionName>Select Hospital</SectionName>
                            </Step>
                            <Step show={show} onMouseEnter={() => setThree(true)} onMouseLeave={() => {setThree(false)}} onClick={gotoSectionThree}>
                                <Number >
                                    3
                                    {three && <Tick />}
                                </Number>
                                <SectionName>Select Speciality</SectionName>
                            </Step>
                        </StepsContainer>
                    </LevelContainer>
                    <DoctorImage show={show} src={doctorPng} alt="doctor img" />
                </LeftContainer>

                <RigthContainer >
                    <Sections sectionOne={sectionOne} sectionTwo={sectionTwo} sectionThree={sectionThree} stage={stage} setStage={setStage} gotoSectionTwo={gotoSectionTwo} gotoSectionThree={gotoSectionThree}/>
                </RigthContainer>
            </Container>
            <MoreLinks />
            <Wrap show={iscityshow}>
                <Cities onClick={() => {setcityshow(!iscityshow)}}>
                    <Name> Cities</Name>
                    <Plus show={iscityshow} />
                </Cities>
                <CityNamesContainer>
                    {cities.map((item) => {
                        return <CityName key={item}>{item}</CityName>
                    })}
                </CityNamesContainer>
            </Wrap>
        </Container2>

    );
}

export default BookAppointment
