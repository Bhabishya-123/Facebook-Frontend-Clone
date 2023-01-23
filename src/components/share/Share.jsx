import React from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

export default function Share({changeState}) {
  return (
    <div className='share' >

        <div className="shareWrapper">
            <div className="shareTop">
            <img className='shareProfileImage' src={"../assets/person/1.jpeg"} alt="" />
            <div className="shareInputCont"></div>
            <input placeholder="What's on your mind,Bhabishya?"  onClick={changeState} className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareButtom">
             <div className="shareOptions">
             <div className="shareOption">
                    <VideoCameraBackIcon htmlColor='red' className='shareIcon'/>
                    <span className="shareOptionText">
                        Live video
                    </span>
                </div>
                <div className="shareOption">
                    <PermMediaIcon htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionText">
                        Photo/video
                    </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='orange' className='shareIcon'/>
                    <span className="shareOptionText">
                       Feeling/Activity
                    </span>
                </div>
             </div>
            </div> 
             </div>

    </div>
  )
}
