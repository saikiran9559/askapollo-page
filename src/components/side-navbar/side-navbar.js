//styled components import 
import {
    BackGround,
    Container,
    LoginContainer,
    LoginSignUp,
    Line,
    PaddingContainer,
    Heading,
    ActionsContainer,
    Action,
    Image,
    ActionName,
    Close,
} from './style'

//data import
import {profileActions} from '../../data/profile-actions'
import {othersActions} from '../../data/others-actions'


const ActionsClick = ({action}) => {
    return (
        <Action>
            <Image src={action['svg']} alt={action['name']} />
            <ActionName> {action['name']}</ActionName>
        </Action>
    );
}

const SideNavBar = ({setSideNavbarDisplay, sideNavbarDisplay}) => {
    return (
        <BackGround sidenav={sideNavbarDisplay}>
            <Container sidenav={sideNavbarDisplay}>
                <LoginContainer>
                    <LoginSignUp>Login-SignUp </LoginSignUp>
                    <Line />
                </LoginContainer>
                <PaddingContainer>

                    <Heading>Profile</Heading>
                    <ActionsContainer>
                        {profileActions.map((item) => {
                            return <ActionsClick action={item} key={item['name']} />
                        })}
                    </ActionsContainer>

                    <Heading>Profile</Heading>
                    <ActionsContainer>
                        {othersActions.map((item) => {
                            return <ActionsClick action={item} key={item['name']} />
                        })}
                    </ActionsContainer>

                </PaddingContainer>
                <Close onClick={() => {setSideNavbarDisplay(false)}} />
            </Container>
        </BackGround>
    );
}

export default SideNavBar;
