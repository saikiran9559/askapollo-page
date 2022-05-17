import {
    Container,
    Box,
    Image,
    Name,
} from './style'

const SpecialityBox = ({selected,speciality, stage, setStage, gotoSectionThree}) => {
    const execute=(name)=>{
        setStage({...stage, 'stage':2, 'speciality':name});
        gotoSectionThree();
    }
    return (
        <Container onClick={()=>execute(speciality['name'])}>
            <Box selected={selected}>
                <Image src={speciality['img']} alt={speciality['name']} />
            </Box>
            <Name>{speciality['name']}</Name>
        </Container>
    );
}

export default SpecialityBox;
