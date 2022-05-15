import {Outlet} from "react-router-dom";
import Navbar from '../components/navbar/navbar'
const Dashboard = () => {
    return (
        <div style={{'margin': '0px', 'padding': '0px'}}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Dashboard;
