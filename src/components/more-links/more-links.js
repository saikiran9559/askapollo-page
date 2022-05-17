import {useState, useEffect} from 'react';
import {
    Container,
    OptionsContainer,
    Wrap,
    HeaderPlus,
    Header,
    Plus,
    Name,
    RightSocialMediaContainer,
    Image,
    Rights,
    SocialMediaContainer,
    SocialImage,
    AllSpecialities,

} from './style'
//data import
import {specialities, directory_links, others} from '../../data/more-links-data';
//img import
const askapollo_img = require('../../assets/ap-ask-logo.png');
const fb = require('../../assets/facebook.png');
const twitter = require('../../assets/twitter.png');
const linkedin = require('../../assets/linkedin.png');
const yt = require('../../assets/youtube.png');
const instagram = require('../../assets/instagram.png');
const MoreLinks = () => {
    const [oneshow, setoneshow] = useState(false);
    const [twoshow, settwoshow] = useState(false);
    const [threeshow, setthreeshow] = useState(false);
    const [show, setShow] = useState(false);
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
    useEffect(() => {
        handleResize();
    }, [])
    return (
        <Container>
            <OptionsContainer show={show}>
                <Wrap show={oneshow} bool={show} >
                    <HeaderPlus onClick={() => {setoneshow(!oneshow)}}>
                        <Header>Doctors By Specialities</Header>
                        {!show && <Plus show={oneshow} />}
                    </HeaderPlus>
                    <AllSpecialities show={show}>
                        {specialities.map((item) => {
                            return <Name key={item}>{item}</Name>
                        })}
                    </AllSpecialities>
                </Wrap>

                <Wrap show={twoshow} bool={show}>
                    <HeaderPlus onClick={() => settwoshow(!twoshow)} disabled={false}>
                        <Header>Quick Directory Links</Header>
                        {!show && <Plus show={twoshow} />}
                    </HeaderPlus>
                    {directory_links.map((item) => {
                        return <Name key={item}>{item}</Name>
                    })}
                </Wrap>

                <Wrap show={threeshow} bool={show}>
                    <HeaderPlus onClick={() => {setthreeshow(!threeshow)}}>
                        <Header>Others</Header>
                        {!show && <Plus show={threeshow} />}
                    </HeaderPlus>
                    {others.map((item) => {
                        return <Name key={item}>{item}</Name>
                    })}
                </Wrap>
            </OptionsContainer>

            <RightSocialMediaContainer>
                <Image src={askapollo_img} alt="askapollo_img" />
                <Rights> © Copyright 2022. Apollo Hospitals Group. All Rights Reserved, </Rights>
                <SocialMediaContainer>
                    <SocialImage src={fb} alt='facebook' />
                    <SocialImage src={twitter} alt='twitter' />
                    <SocialImage src={linkedin} alt='linkedin' />
                    <SocialImage src={yt} alt='youtube' />
                    <SocialImage src={instagram} alt='instagram' />
                </SocialMediaContainer>
            </RightSocialMediaContainer>
        </Container>
    );
}

export default MoreLinks;

            // <DropButton>Doctors By Specialities</DropButton>
            // <DropButton>Quick Directory Links</DropButton>
            // <DropButton>Others</DropButton>
