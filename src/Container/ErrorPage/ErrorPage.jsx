import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Ellipse from '../../Assets/Ellipse.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdFmdGood } from "react-icons/md";


const ErrorPage = function () {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="fundoPreto" />
      <div className="backgroundStars">
        <img className="ellipseError" src={Ellipse} alt="Mundo globo" />
        
        <div className="header">
          <p className="p1">Erro 404!</p>
          <p className="p2">Página não encontrada.)</p>
        </div>
      <div className="menu">
        <div className='menuButton1'>
            <div className='menuButton'>
              <FiChevronLeft className='menuButtons'/>
            </div>
            <div className='menuButton'>
              <MdFmdGood className='menuButtons' onClick={() => { navigate('/Menu');}}/>
            </div>
            <div className='menuButton'>
            <FiChevronRight className='menuButtons'/>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;

