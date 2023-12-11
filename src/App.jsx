import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './Components/courses';
import Allcourses from './Components/allcourses';
import Fsdelopment from './Components/fsdevelopment';
import DataScience from './Components/datascience';
import CyberSecurity from './Components/cybersecurity';
import Career from './Components/career';
import { allCourses,fsCourses,dsCourses,cybersecCourses,career } from './mockdata/mockcourses';

function App() {
  return (
    <Router>
    <Courses />
    <Routes>
      <Route path='/all' element={<Allcourses data={allCourses()}/>} />
      <Route path='/fsdevelopment' element={<Fsdelopment data={fsCourses()}/>} />
      <Route path='/dscience' element={<DataScience data={dsCourses()}/>} />
      <Route path='/cybersec' element={<CyberSecurity data={cybersecCourses()}/>} />
      <Route path='/career' element={<Career data={career()}/>} />
    </Routes>
  </Router>
  );
}

export default App;
