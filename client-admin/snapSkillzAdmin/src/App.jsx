import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Courses from "./components/Courses/Courses"
import AddCourse from "./components/AddCourse/AddCourse"
import { NotFound } from "./components/Notfound"
import HomeLogin from "./components/Home/HomeLogin"
import HomeLogout from "./components/Home/HomeLogout"



export default function App() {
  return (
    <div>
      <BrowserRouter>
       {/*  <Navbar />   */}
      <Routes>
         <Route path="/" element = {<HomeLogin />} />  
         <Route path="/logout" element = {<HomeLogout/>}  /> 
         <Route path="/courses" element = {<Courses/>} /> 
         <Route path="/addcourse" element = {<AddCourse/>}  />  
        
       { /* <Route path = "*"  element={<NotFound />} /> */ }
      </Routes>
      </BrowserRouter>
    </div>
  )
}