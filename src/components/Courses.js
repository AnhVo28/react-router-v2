import React from 'react';
import {Link, Route,NavLink, Redirect } from 'react-router-dom'

import JavaScript from './courses/JavaScript';
import CSS from './courses/CSS'
import HTML from './courses/HTML'


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink  to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink  to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink  to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Write routes here... */}

    <Route exact path={`${match.path}`} render={()=> <Redirect to='/courses/html'/>} ></Route>
    <Route path={`${match.path}/html`} component={HTML}></Route>
    <Route path={`${match.path}/javascript`} component={JavaScript}></Route>
    <Route path={`${match.path}/css`} component={CSS}></Route>
  </div>
);

export default Courses;
