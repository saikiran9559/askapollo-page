import {useState, useEffect} from 'react';

//styled components imports
import {
    Container,
    LogoImage,
    SelectCity,
    Options,
    Help,
    ChatImage,
    LoginSignup,
    MenuButton,
} from './style'

//Svg imports
import {ReactComponent as Search} from '../../assets/search-box.svg';
import {ReactComponent as Menu} from '../../assets/hambergur.svg'
import {ReactComponent as RadioButton} from '../../assets/target.svg';
import {ReactComponent as Phone} from '../../assets/phone-top.svg';
//react js files import 
import SelectCityPopUp from '../../components/select-city/select-city'
import SideNavBar from '../side-navbar/side-navbar'
import {useOutletContext} from 'react-router-dom';

const askapollo_logo = require('../../assets/askapollo-logo.png');
const chat_png = require('../../assets/chat.png');

const Navbar = ({stage, setStage, gotoSectionTwo}) => {
    const [citiesDisplay, setCitiesDisplay] = useState({'display': false, 'name': stage['city']});
    const [sideNavbarDisplay, setSideNavbarDisplay] = useState(false);
    const [show, setShow] = useState(true);
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
    return (
        <>
            <SideNavBar setSideNavbarDisplay={setSideNavbarDisplay} sideNavbarDisplay={sideNavbarDisplay} />
            {citiesDisplay['display'] && <SelectCityPopUp gotoSectionTwo={gotoSectionTwo} citiesDisplay={citiesDisplay} setCitiesDisplay={setCitiesDisplay} stage={stage} setStage={setStage} />}
            <Container>
                {!show &&
                    <MenuButton onClick={() => {setSideNavbarDisplay(true)}}>
                        <Menu style={{'cursor': 'pointer'}} />
                    </MenuButton>
                }
                <LogoImage src={askapollo_logo} alt="askapollo-logo.png" />
                <Options>
                    <SelectCity onClick={() => {setCitiesDisplay({...citiesDisplay, 'display': true})}}>
                        <RadioButton />
                        {stage['city']}
                    </SelectCity>
                    <Help>
                        <ChatImage src={chat_png} alt="chat_png" />
                        Need Help?
                    </Help>
                    <LoginSignup> Login-SignUp </LoginSignup>
                    {show && <Search style={{'cursor': 'pointer'}} />}
                </Options>
                {show &&
                    <MenuButton onClick={() => {setSideNavbarDisplay(!sideNavbarDisplay);}}>
                        <Menu style={{'cursor': 'pointer'}} />
                    </MenuButton>
                }
                {!show && <Phone style={{"maxWidth": "34px", "maxHeight": '34px', "minWidth": "34px", "minHeight": '34px'}} />}
            </Container>
        </>
    );
}

export default Navbar;
