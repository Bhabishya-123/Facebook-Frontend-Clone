import React from 'react'
import './onlineFriend.css'

export default function OnlineFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
   <li className='rightbarFriend'>
    <div className="rightbarProfileImageCont">
        <img src={PF+user.profilePicture} alt="" className="rightbarProfileImage" />
        <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername"><b>{user.username}</b></span>
   </li>
  )
}
