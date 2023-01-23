import "./topbar.css";
import { Search, Person, Notifications } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {Link} from 'react-router-dom'

export default function Topbar() {
  return (
    <>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link  to="/" style={{textDecoration:'none'}}>
        <img height='60px' src={"assets/icon.png"} alt="" />
        </Link>
      </div>
      <div className="topbarLeft2">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search Freechat"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarCenter">
      <div className="topbarLinks">
        <div className="topbarCenterIcon">
          <div  className="topbarHomeIcon">
            <Link to="/">
          <HomeIcon style={{fontSize:'30px',color:"blue",position:'relative',  opacity:'0.7'}}/>
          </Link>
          </div>
          </div>
          <div className="topbarCenterIcon">
          <LiveTvIcon style={{fontSize:'30px',color:"grey"}}/>
          </div>
          <div className="topbarCenterIcon">
          <StorefrontIcon style={{fontSize:'30px',color:"grey"}}/>
          </div>
          <div className="topbarCenterIcon">
          <SportsEsportsIcon style={{fontSize:'30px',color:"grey"}}/>
          </div>
     
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <div className="topbarIconCont">
            <Person style={{color:"black",borderRadius:'50%',fontSize:'21px'}} />
            </div>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <div className="topbarIconCont">
          <QuestionAnswerIcon  style={{color:"black",borderRadius:'50%',fontSize:'21px'}}/>
            </div>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
          <div className="topbarIconCont">
          <Notifications  style={{color:"black",borderRadius:'50%',fontSize:'21px'}}/>
            </div>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile/bhabishya" style={{textDecoration:'none'}}>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
    </>
  );
}
