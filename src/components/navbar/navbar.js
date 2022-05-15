import {useState} from 'react';

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

//react js files import 
import SelectCityPopUp from '../../components/select-city/select-city'
import SideNavBar from '../side-navbar/side-navbar'

const askapollo_logo = require('../../assets/askapollo-logo.png');
const chat_png = require('../../assets/chat.png');

const Navbar = () => {
    const [citiesDisplay, setCitiesDisplay] = useState({'display': false, 'name': 'Hyderabad'});
    const [sideNavbarDisplay, setSideNavbarDisplay] = useState(false);
    return (
        <>
            <SideNavBar setSideNavbarDisplay={setSideNavbarDisplay} sideNavbarDisplay={sideNavbarDisplay} />
            {citiesDisplay['display'] && <SelectCityPopUp citiesDisplay={citiesDisplay} setCitiesDisplay={setCitiesDisplay} />}
            <Container>
                <LogoImage src={askapollo_logo} alt="askapollo-logo.png" />
                <Options>
                    <SelectCity onClick={() => {setCitiesDisplay({...citiesDisplay, 'display': true})}}>
                        <RadioButton />
                        {citiesDisplay['name']}
                    </SelectCity>
                    <Help>
                        <ChatImage src={chat_png} alt="chat_png" />
                        Need Help?
                    </Help>
                    <LoginSignup> Login-SignUp </LoginSignup>
                    <Search style={{'cursor': 'pointer'}} />
                </Options>
                <MenuButton onClick={() => {setSideNavbarDisplay(true)}}>
                    <Menu style={{'cursor': 'pointer'}} />
                </MenuButton>
            </Container>
        </>
    );
}

export default Navbar;
