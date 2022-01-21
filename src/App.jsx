import React from 'react';
import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';
import Home from './Container/Home/Home';
import Menu from './Container/Menu/Menu';
import ErrorPage from './Container/ErrorPage/ErrorPage';
import './App.css';
import Insight2 from './Container/Insight2/Insight2';
import Insight3 from './Container/Insight3/Insight3';

const App = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Insight3 />} />
        <Route path="/Insight2" element={<Insight2 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
