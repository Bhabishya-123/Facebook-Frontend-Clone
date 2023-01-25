
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './hiddenCreatePost.css';
import React,{useState,useRef} from 'react'
import Home from "../home/Home";

export default function CreatePost() {
  const ref = useRef(null);
  const [showCreatePost,setShowCreatePost] = useState(false);
  const changeState = () => {
    ref.current?.focus();
    setShowCreatePost(!showCreatePost);
  }
  return (<>

<Home showCreatePost={showCreatePost} changeState={changeState}/>

    <div className={showCreatePost ? "showCreatePost" : "hideCreatePost"}>
    <div className="createPostWrapper">
      <div className="createPostTop">
        <h3 className="createPostTitle">Create post</h3>
        <div className="createPostCloseIconCont">
          <CloseIcon
            style={{ fontSize: "26px", opacity: "0.8", cursor: "pointer" }}
            onClick={changeState}
          />
        </div>
      </div>
      <hr className="createPostHr" />
      <div className="createPostCenter">
        <div className="createPostProfileCont">
          <img
            className="createPostProfileImage"
            src="assets/person/1.jpeg"
            alt=""
          />
          <span className="createPostUsername">
            <b>Bhabishya Ghimire</b>
          </span>
        </div>
        <div className="createPostInputCont">
          <input
            ref={ref}
            type="text"
            placeholder="What's on your mind,Bhabishya?"
            className="createPostInput"
          />
        </div>
      </div>
      <div className="createPostOptionsCont">
        <div className="createPostOption">
          <span className="createPostOptionTitle"><b>Add <span>to your post</span></b></span>
          <div className="createPostOptionIcons">
            <span className="circleCont">
            <PermMediaIcon
              style={{ fontSize: "26px"}}
              htmlColor="green"
              className="createPostIcon"
            />
            </span>
            <span className="circleCont">
            <SellIcon
              style={{ fontSize: "25px" }}
              htmlColor="blue"
              className="createPostIcon"
            /></span>
             <span className="circleCont">
                     <EmojiEmotionsIcon
              style={{ fontSize: "26px" }}
              htmlColor="orange"
              className="createPostIcon"
            /></span>
             <span className="circleCont">
            <LocationOnIcon
              style={{ fontSize: "26px" }}
              htmlColor="red"
              className="createPostIcon"
            /></span>
             <span className="circleCont">
            <MoreHorizIcon
              style={{ fontSize: "26px",opacity:'0.5' }}
              className="createPostIcon"
            />
            </span>
          </div>
        </div>
      </div>
      <div className="createPostButtonCont">
      <button type="button" className="createPostButton"><b>Post</b></button>
      </div>
    </div>
  </div>
  </>
  )
}
