import Screen from '../../src/screens/SideBar/SideBar'
import Dashboard from '../screens/Dashboard/Dashboard';
import '../Home/Home.css'

const Home = () => {
    return (<div className='Home'>
        <Screen />
        <Dashboard />
    </div>
    );
}

export default Home;