import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";
// import axios from 'axios'
// import { useEffect,useState } from "react";
import { Posts } from '../../dummyData';

export default function Feed({changeState}) {
  // const[posts,setPosts] = useState([]);
  // useEffect(()=>{
  //   const fetchPosts = async()=>{
  //     const res = await axios.get("posts/timeline/62b980a429037a1e38b07192")
  //     setPosts(res.data)
  //   }
  //   fetchPosts();
  // },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
      <Share  changeState={changeState}/>
      {Posts.map((p)=>(
               <Post key={p.id} post={p}/>
      ))}
      </div>
    </div>
  );
}
