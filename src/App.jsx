import React from 'react';
import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';
import Home from './Container/Home/Home';
import Menu from './Container/Menu/Menu';
import ErrorPage from './Container/ErrorPage/ErrorPage';
import './App.css';
import Insight2 from './Container/Insight2/Insight2';
import Insight3 from './Container/Insight3/Insight3';
import Insight4 from './Container/Insight4/Insight4';
import Complexo from './Container/Complexo/Complexo';
import ScrowToTop from './Container/ScrowToTop';

const App = function () {
  return (
    <Router>
      <ScrowToTop />
      <Routes>
        <Route path="/Complexo" element={<Complexo />} />
        <Route path="/Insight2" element={<Insight2 />} />
        <Route path="/Insight3" element={<Insight3 />} />
        <Route path="/Insight4" element={<Insight4 />} />
        <Route path="*" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
