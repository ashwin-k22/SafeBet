import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProjects from './components/pages/AddProjects';
import SignUp from './components/pages/SignUp';
import InvestmentOpporturnities from './components/pages/InvestmentOppoturnities';
import SkillGroups from './components/pages/SkillGroups';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/skillgroups' element={<SkillGroups/>} />
          <Route exact path='/investmentopps' element={<InvestmentOpporturnities/>} />
          <Route exact path='/addprojects' element={<AddProjects/>} />
          <Route exact path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
