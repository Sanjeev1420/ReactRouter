/** @format */

import React from "react";
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import '../Stylesheets/courses.css';

const Courses = () => {
  
  return (
    <div className="navbar">
      <Nav className='justify-content-center' defaultActiveKey='/all'>
        <Nav.Item>
            <NavLink to='/all' className='nav-link' activeClassName='active'>
                ALL
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/fsdevelopment' className='nav-link' activeClassName='active'>
               FULLSTACK DEVELOPMENT
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/dscience' className='nav-link' activeClassName='active'>
               DATA SCIENCE
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/cybersec' className='nav-link' activeClassName='active'>
              CYBER SECURITY
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to='/career' className='nav-link' activeClassName='active'>
              CAREER
            </NavLink>
        </Nav.Item>
       </Nav>
    </div>
  );
};

export default Courses;
