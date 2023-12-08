import '../Dashboard/Dashboard.css'
import { ReactComponent as Option } from '../../assets/icons/options-horizontal.svg'
import Logo from '../../assets/images/logo.svg'
import { ReactComponent as Todo } from '../../assets/icons/todo.svg'
import { ReactComponent as Form } from '../../assets/icons/form.svg'
// import ToDo from '../../components/DnD'
import { NavLink, Outlet } from 'react-router-dom'


const Dashboard = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none',
            color: isActive ? ' aliceblue' : 'aliceblue',
        }
    }


    return (
        <div className="Dashboard">
            <div className="header">
                <div className="space">
                    <div className="spaceName">
                        <img src={Logo} alt='logo' />
                        <div className="title">Widget Site</div>
                    </div>
                </div>
                <div className="operate">
                    <button type="button" className="btn">Share</button>
                </div>
            </div>
            <div className="body">
                <div className="bodySpaceName">
                    <div className="space">
                        <div className="spaceName">
                            <div className="bodyTitle">Widget Site</div>
                        </div>
                        <div className="optionBtn">
                            <Option />
                        </div>
                    </div>
                    <button className="btn">Add Task</button>
                </div>
                <div className="bodyContent">
                    <div className="contentHeader">
                        <div className='feature'>
                            <NavLink style={navLinkStyles} to='/todo'>
                                <div className="list">
                                    <Todo />
                                    <span>To Do</span>
                                </div>
                            </NavLink>
                            <NavLink style={navLinkStyles} to='/validation'>
                                <div className="list">
                                    <Form />
                                    <span>Validation Check</span>
                                </div>
                            </NavLink>
                        </div>
                        <div className='searchSection'>
                            <input type='text'
                                placeholder='Search Task'
                            />
                        </div>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Dashboard;