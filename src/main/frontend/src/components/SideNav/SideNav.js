import './SideNav.css';
import SBLogo from '../../assets/sunbirdicon.png';
import { NavLink } from "react-router-dom" ;
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useSelector } from 'react-redux'

function SideNav() {
  //get userInfo from store
  const userRole = useSelector((state)=> state.user.data.role)
  console.log(userRole)
  return ( 
    <div className="sideNav row">
      {/* Logo in Side navigation*/}
      <div className="wrapSideLogo">
        <div className="logoSideNav">
          <img src={SBLogo} alt="SunBirdLogo" height="35px" />
        </div>
        <div className="logotext">
          <div className="logotitle">SUNBIRD SERVE</div>
          {/* <div className="usertag">NCoordinator Management</div> */}
        </div>
      </div>
      {/* Navigation Menu options */}
      {userRole && userRole.includes('nCoordinator') && <div className="navMenu">
        {/* switch to dashboard page*/}
        <NavLink to="/" exact className="sideNavItem row" activeClassName="active">
          <i><DashboardOutlinedIcon /></i>  
          <span>Dashboard</span>
        </NavLink>

        {/* switch to needs page */}
        <NavLink to="/needs" exact className="sideNavItem row">
          <i><StickyNote2OutlinedIcon /></i>
          <span>Needs</span>
        </NavLink>

        {/* switch to needs plan page */}
        <NavLink to="/needplans" exact className="sideNavItem row">
          <i><CalendarTodayOutlinedIcon /></i>
          <span>Needs Schedule</span>
        </NavLink>
      </div>}

      {/* switch to vCoordinator page */}
      {userRole && userRole.includes('vCoordinator') && <div className="navMenu">
        <NavLink to="/volunteers" exact className="sideNavItem row">
              <i><VolunteerActivismOutlinedIcon /></i> 
              <span>Volunteers</span>
        </NavLink>
      </div>}

      <div className="navMenu">
        <NavLink to="/settings" exact className="sideNavItem row">
              <i><SettingsOutlinedIcon /> </i>
              <span>Settings</span>
        </NavLink>
        <NavLink to="/help" exact className="sideNavItem row">
              <i><HelpOutlineOutlinedIcon /></i> 
              <span>Help</span>
        </NavLink>
      </div>
    </div>
  )
}

export default SideNav