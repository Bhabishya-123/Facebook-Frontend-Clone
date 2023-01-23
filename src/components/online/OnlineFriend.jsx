import React from 'react'
import './onlineFriend.css'

export default function OnlineFriend({user}) {
  return (
   <li className='rightbarFriend'>
    <div className="rightbarProfileImageCont">
        <img src={user.profilePicture} alt="" className="rightbarProfileImage" />
        <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername"><b>{user.username}</b></span>
   </li>
  )
}
