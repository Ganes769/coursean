import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import LiveSection from "./components/live";

import Welcome from "./components/Welcome";
import VideoContent from "./pages/VideoContent";
import { useSelector } from "react-redux";
import LiveSection from "./components/live";
import TeacherPage from "./pages/TeacherPage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import FirebaseDataFetcher from "./pages/example";
import Footer from "./components/Footer";
import LiveClass from "./pages/LiveCllass";

function App() {
  const userName = useSelector((state) => state.account.username);
  return (
    <BrowserRouter>
      <Navbar />
      {/* {userName ? <Welcome /> : null} */}

      <Sidebar />
      <Routes>
        <Route path="/liveclass" element={<LiveClass />} />
        <Route path="/teachermode/:content" element={<VideoContent />} />
        <Route path="/teachermode" element={<TeacherPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fetch" element={<FirebaseDataFetcher />} />
        {/* <Route path="/search" element={<SearchResult />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
