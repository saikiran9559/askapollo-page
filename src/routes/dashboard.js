import {useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from '../components/navbar/navbar'
import styled from 'styled-components'
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`
const Dashboard = ({stage, setStage, gotoSectionTwo}) => {
    return (
        <Container>
            <Navbar stage={stage} setStage={setStage} gotoSectionTwo={gotoSectionTwo} />
            <Outlet />
        </Container>
    );
}

export default Dashboard;
