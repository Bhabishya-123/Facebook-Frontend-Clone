// import React,{useEffect, useState} from 'react'
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'
import { Users } from "../../dummyData";
// import axios from 'axios';
// import {format} from "timeago.js"

export default function Post({post}) {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);
  // const [user,setUser] = useState({});
  const likeHandler = ()=>{
    if(isLiked===false){
      setLike(like+1)
      setIsLiked(true)
    }else{
      setLike(like-1)
      setIsLiked(false)
    }
  }

  // useEffect(()=>{
  //   const fetchUser = async()=>{
  //     const res = await axios.get(`users/${post.userId}`)
  //     setUser(res.data)
  //   }
  //   fetchUser();
  // },[post.userId]);

  return (
   <div className="post">
    {/* <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImage' src={user.profilePicture || PF+"/person/noAvatar.png"} alt="" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>

          <div className="postTopRight">
               <MoreVertIcon style={{ cursor:'pointer'}}/>
          </div>
          </div>

      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img className='postImage' src={PF+"/post/"+post.img} alt="" />
      </div>
      <div className="postBottom">
          <div className="postBottomLeft">
            <div style={{display:'flex'}}>
            <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler} src={PF+"like.png"} alt="" />
            </div>
            <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler}src={PF+"heart.png"} alt="" />
              </div>
            </div>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
           <span className="postCommentText">{post.comment} comments</span>
          </div>
          </div>
        </div> */}
    <div className="postWrapper">
    <div className="postTop">
      <div className="postTopLeft">
        <img className='postProfileImage' src={Users.filter((u)=>u.id===post.userId).map((u)=>u.profilePicture)} alt="" />
        <span className="postUsername">{Users.filter((u)=>u.id===post.userId).map((u)=>u.username)}</span>
        <span className="postDate">{post.date}</span>
      </div>

      <div className="postTopRight">
           <MoreVertIcon style={{ cursor:'pointer'}}/>
      </div>
      </div>

  <div className="postCenter">
    <span className="postText">{post.desc}</span>
    <img className='postImage' src={post.photo} alt="" />
  </div>
  <div className="postBottom">
      <div className="postBottomLeft">
        <div style={{display:'flex'}}>
        <div className="likeIconCont">
        <img className='likeIcon' onClick={likeHandler} src={"../assets/like.png"} alt="" />
        </div>
        <div className="likeIconCont">
        <img className='likeIcon' onClick={likeHandler}src={"../assets/heart.png"} alt="" />
          </div>
        </div>
        <span className="postLikeCounter">{like} people like it</span>
      </div>
      <div className="postBottomRight">
       <span className="postCommentText">{post.comment} comments</span>
      </div>
      </div>
    </div>

    </div>
  )
}
