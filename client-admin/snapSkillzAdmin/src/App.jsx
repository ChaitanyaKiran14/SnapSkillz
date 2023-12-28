import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Courses from "./components/Courses/Courses"
import AddCourse from "./components/AddCourse/AddCourse"
import { NotFound } from "./components/Notfound"


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/courses" element = {<Courses/>} />
        <Route path="/addcourse" element = {<AddCourse/>}  />
        <Route path = "*"  element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}