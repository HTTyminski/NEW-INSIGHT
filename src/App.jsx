import React from 'react';
import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';
import Home from './Container/Home/Home';
import Menu from './Container/Menu/Menu';
import ErrorPage from './Container/ErrorPage/ErrorPage';
import './App.css';

const App = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
