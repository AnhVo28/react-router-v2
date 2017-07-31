import React from 'react';
import {Link, Route,NavLink } from 'react-router-dom'

import JavaScript from './courses/JavaScript';
import CSS from './courses/CSS'
import HTML from './courses/HTML'


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink  to='/courses/html'>HTML</NavLink></li>
        <li><NavLink  to='/courses/css'>CSS</NavLink></li>
        <li><NavLink  to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route path='/courses/html' component={HTML}></Route>
    <Route path='/courses/javascript' component={JavaScript}></Route>
    <Route path='/courses/css' component={CSS}></Route>
  </div>
);

export default Courses;
