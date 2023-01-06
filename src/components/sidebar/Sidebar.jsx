import "./sidebar.css";
import {
  RssFeed,
  Chat,
  Group,
  HelpOutline,
  Event
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import {useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  //to hide/show certain elements
  const [showHidden,setShowHidden] = useState()
  const logoutToggle =(showHidden)=>{
             setShowHidden(!showHidden);
  }

  //to ask user if they really want to logout
  const [logout,setLogout] = useState(false);
  console.log(logout)
  const confirmLogout =()=>{
   setLogout(window.confirm("Are You Sure, You want to Logout?"))
    } 

    //for selecting mode and doing its function
    const [mode,setMode] = useState('day');
    const getSelectedMode =(e)=>{
      setMode(e.target.value);
}

console.log(mode)

  return (
    <div className="sidebar">
      <div className="sidebarWrapper"> 
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Messenger</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibraryIcon className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <StorefrontIcon className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Marketplace</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem" onClick={()=>logoutToggle(showHidden)}>
            <ExpandCircleDownRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText" >Show more</span>
          </li>
          <Link style={{textDecoration:'none'}} to={logout?'/login':''}>
          <li><h5 id="logout"  className={showHidden?"logout-show":"logout-hide"} onClick={()=>confirmLogout()}>Logout</h5></li></Link>
          <li>
            <select id="select-mode" className={showHidden?"mode-show":"mode-hide"} onChange={getSelectedMode} value={mode} style={{background:mode==='day'?'white':'black',color:mode==='night'?'grey':''}}>
              <option className="day-mode" value='day' >Day</option>
              <option className="night-mode" value='night'>Night</option>
            </select>
          </li>
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
        <h4 style={{color:'grey'}}>Your shortcuts</h4>
        <ul className="sidebarFriendList">
        {Users.filter((user)=>{
         return user.id >2 && user.id<6
        }).map((u)=>(
          <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
