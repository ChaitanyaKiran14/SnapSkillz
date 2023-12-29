// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeLogin from '../Home/HomeLogin';
import HomeLogout from '../Home/HomeLogout';
import AddCourse from '../AddCourse/AddCourse';
import Courses from '../Courses/Courses';

const Navbar = () => {
  const navigate  = useNavigate()
  const logout = () =>  {
    //localStorage.removeItem('token');
    console.log("Logout Succesful")
    navigate('/')

  }
  
  //upon clicking logout use useNavigate and to send the user  back to page where user is navbar notLoged in 


  return (
    <nav>
      <ul>
        {/* Navbar items for authenticated user */}
        <li><Link to="/addcourse"> Add Course </Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link onClick={()=> logout()} to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
