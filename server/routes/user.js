const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateJwt, SECRET } = require("../middleware/auth");
const { User, Course, Admin } = require("../db");
const router = express.Router();

  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });



  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  


 //get all courses

  router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({published: true});
    res.json({ courses });
  });
  


//user trying to purchase course
//first we check if the course is there in db or not

  router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        user.purchasedCourses.push(course);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });



  //user trying to fetch the purchased course
  // we are using populate because we are saving only ids , to get the courses we are using populate
  

  router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  });
  

  module.exports = router