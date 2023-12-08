import './SideBar.css'
import Harry from '../../assets/images/Harry.png'
import { ReactComponent as HomeSVG } from '../../assets/icons/home.svg'
import { ReactComponent as InboxSVG } from '../../assets/icons/inbox.svg'
import { ReactComponent as DashSVG } from '../../assets/icons/dashboard.svg'
import { ReactComponent as MoreSVG } from '../../assets/icons/more.svg'
import { ReactComponent as HubSVG } from '../../assets/icons/hub.svg'
import { ReactComponent as TeamspaceSVG } from '../../assets/icons/teamspace.svg'
import { ReactComponent as ViewallSVG } from '../../assets/icons/viewall.svg'
import { ReactComponent as CreateSVG } from '../../assets/icons/createspace.svg'
import { ReactComponent as InviteSVG } from '../../assets/icons/invite.svg'
import { NavLink } from 'react-router-dom'


const SideBar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none',
            color: isActive ? ' aliceblue' : 'aliceblue',
        }
    }


    return (
        <div className="SideBar">
            <div className='NameSection'>
                <div className='introSection'>
                    <img src={Harry} alt='..' />
                    <div className='fname'>Harry Potter</div>
                </div>
                {/* <div className='burger'>Ham</div> */}
            </div>
            <div className='NavSection'>
                <NavLink style={navLinkStyles} to='/'>
                    <div className='ToBox'>
                        <HomeSVG className='icon' />
                        <div className="iconTitle">Home</div>
                    </div>
                </NavLink>
                <div className='ToBox'>
                    <InboxSVG className='icon' />
                    <div className="iconTitle">Inbox</div>
                </div>
                <div className='ToBox'>
                    <DashSVG className='icon' />
                    <div className="iconTitle">Dashboard</div>
                </div>
                <div className='ToBox'>
                    <MoreSVG className='icon' />
                    <div className="iconTitle">More</div>
                </div>
            </div>

            <div className='spaceSection'>
                <h5>SpaceBox</h5>
                <div className='spaceListing' >
                    <div className='ToBox'>
                        <HubSVG className='icon' />
                        <div className="iconTitle">Everything</div>
                    </div>
                    <div className='ToBox'>
                        <TeamspaceSVG className='icon' />
                        <div className="iconTitle">Team space</div>
                    </div>
                    <div className='ToBox'>
                        <ViewallSVG className='icon' />
                        <div className="iconTitle">View all spaces</div>
                    </div>
                    <div className='ToBox'>
                        <CreateSVG className='icon' />
                        <div className="iconTitle">Create Space</div>
                    </div>
                </div>
            </div>
            <div className='inviteSection'>
                <div className='ToBox'>
                    <InviteSVG className='icon' />
                    <div className="iconTitle">Invite</div>
                </div>
            </div>
        </div >
    );
}

export default SideBar;
