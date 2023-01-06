import HomeWithHiddenCreatePost from "./pages/homeWithHiddenPage/HomeWithHiddenCreatePost";
import "./App.css";
import Profile from './pages/profile/Profile'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeWithHiddenCreatePost />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;




















  // var showCreatePost = useRef();
  // const dataToParent = (data) => {
  //   showCreatePost.current = data;
  //   console.log(showCreatePost)
  // }
  // const [showCreatePost,setShowCreatePost] = useState(childState);