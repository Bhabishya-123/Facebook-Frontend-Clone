import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";

function Profile() {
    return (
    <div className="profile">
      <Topbar />
      <div className="fbIcon">
        <Link  to="/" style={{textDecoration:'none'}}>
        <img height='60px' src={"../assets/icon.png"} alt="" />
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileCenter">
          <div className="profileCenterTop">
            <img
              src={"../assets/coverpic.jpg"}
              alt="coverphoto"
              className="coverPhoto"
            />
            <button className="editCoverPhotoBtn">
              <CameraAltIcon />
              <b>Edit <span className="editPicText">Cover Photo</span></b>
            </button>
          </div>
          <div className="profileCenterDown">
            <div className="profileCenterDownCont">
              <div className="profilePhotoCont">
                <img
                  src={"../assets/person/1.jpeg"}
                  alt="profiephoto"
                  className="profilePhoto"
                />
              </div>
              <h4 className="profileUsername">
                Bhabishya Ghimire{" "}
                <p style={{ fontSize: "16px", margin: "0", opacity: "0.5" }}>
                  209 friends
                </p>
              </h4>
            </div>
          </div>
        </div> 

        <div className="profileBottom">
          <div className="profileBottomLeft">
            <div className="profileUserInfo">
              <h4 style={{ position:'absolute',top:'50px',marginLeft:'5px'}}>Intro</h4>
              <pre>
                {
             `             
     🎉🎉W€|©°m€❤🎉🎉
  😊😊
   ♥[Cricket Lover]♥
   
     🆈🆃🅱 🅻🅸🅽🅺:-
https://www.youtube.com/c/FutureTechnical88
             `
                }
              </pre>
           
      <button type="button" className="editBioButton"><b>Edit Bio</b></button>
            </div>
            <div className="profileMutualFriendCont">
              <h4
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "5px",
                  margin: "0",
                }}
              >
                Mutual Friends
              </h4>
              {Users.filter(function (user) {
                return user.id > 1 && user.id <= 7;
              }).map(function (user) {
                return (
                  <div key={user.id} className="mutualFriend">
                    <img
                      className="profileMutualFriendImg"
                      src={user.profilePicture}
                      alt=""
                    />
                    <span className="profileMutualFriendName">
                      {user.username}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="profileBottomRight">
            <Feed className="profileFeed" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
