import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Back from '../../Assets/back.png';
import { BiRightArrowAlt } from "react-icons/bi";
import Peca from '../../Assets/peca.png';
import Card from '../../Components/cards';
import CardMedio from '../../Components/cardsMedio';
import SetaClick from '../../Assets/setaClick.png'
//import {Text,Button } from '@adobe/react-spectrum';



const Insight2 = function () {
    const navigate = useNavigate();

    const [ toggleImage ,setToggleImage ] = useState(false);

    const ToggleImage = () => {
        toggleImage ? setToggleImage(false) : setToggleImage(true);
    }

   

    const [ isHovering1, setIsHovering1 ] = useState(false);
    const [ isHovering2, setIsHovering2 ] = useState(false);
    const [ isHovering3, setIsHovering3 ] = useState(false);
    const [ isHovering4, setIsHovering4 ] = useState(false);
    const [ isHovering5, setIsHovering5 ] = useState(false);
    const [ isHovering6, setIsHovering6 ] = useState(false);
    
    function crossClass1() {
        return `borderLeft ${isHovering1 ? "":"hidden"}`;
    }
    function back1() {
        return `leftMenu ${isHovering1 ? "background":""}`;
    }
    function crossClass2() {
        return `borderLeft ${isHovering2 ? "":"hidden"}`;
    }
    function back2() {
        return `leftMenu ${isHovering2 ? "background":""}`;
    }
    function crossClass3() {
        return `borderLeft ${isHovering3 ? "":"hidden"}`;
    }
    function back3() {
        return `leftMenu ${isHovering3 ? "background":""}`;
    }
    function crossClass4() {
        return `borderLeft ${isHovering4 ? "":"hidden"}`;
    }
    function back4() {
        return `leftMenu ${isHovering4 ? "background":""}`;
    }
    function crossClass5() {
        return `borderLeft ${isHovering5 ? "":"hidden"}`;
    }
    function back5() {
        return `leftMenu ${isHovering5 ? "background":""}`;
    }
    function crossClass6() {
        return `borderLeft ${isHovering6 ? "":"hidden"}`;
    }
    function back6() {
        return `leftMenu ${isHovering6 ? "background":""}`;
    }

  return (
    <div className="flex-container">
        <div className='topInsight3'></div>

         <div className='imageFundo1'>
            <p className='p30'>Complexo ou Complicado</p>
            <p className='p31'>pense  rápido</p>
            <p className='p32'>Você tem<span className='p33'>15 segundos</span> para cada resposta.</p>
            <p className='p34'>Selecione a alternativa correta sem pesquisar na internet ;)</p>
            
            <div className='divBtn' onClick={() => { navigate('/menu');}}>
                <p className='btnTextStart'>Começar =)</p>
                {/* <p className='btnText'>Já começou =D</p> */}
            </div> 
        </div>

        <div className='div233'>
            <p className='p20'>15</p>
        </div>

        <div className='imageFundo2'>
            <p className='boxSubTituloQtd'>1. Qual é a quantidade média de leucócitos de uma pessoa saudável?</p>
            <div className='divContainer5'>
                <div className='divContainer6'>
                    <div className='circulo'>
                        <p className='p23'>A</p>
                    </div>
                    <p className='p24'>Entre <b>6 mil e 10 mil</b> por milímetro cúbico de sangue.</p>
                </div>
                <div className='divContainer7'>
                    <div className='circulo'>
                        <p className='p23'>A</p>
                    </div>
                    <p className='p24'>Entre <b>400 e 100</b> por milímetro cúbico de sangue.</p>
                </div>
                <div className='divContainer8'>
                    <div className='circulo'>
                        <p className='p23'>A</p>
                    </div>
                    <p className='p24'>Entre <b>20 mil e 30 mil</b> por milímetro cúbico de sangue.</p>
                </div>
            </div>  
        </div>

        <div className='div234'>
            <p className='p20'>15</p>
        </div>

        <div className='divBlue'>
            <p className='boxSubTituloQtd2'>1. Qual é a quantidade média de leucócitos de uma pessoa saudável?</p>
            <div className='divContainer5'>
                <div className='divContainer6'>
                    <div className='circulo'>
                        <p className='p23'>A</p>
                    </div>
                    <p className='p24'>Entre <b>6 mil e 10 mil</b> por milímetro cúbico de sangue.</p>
                </div>
                <div className='divContainer7'>
                    <div className='circulo'>
                        <p className='p23'>A</p>
                    </div>
                    <p className='p24'>Entre <b>400 e 100</b> por milímetro cúbico de sangue.</p>
                </div>
                <div className='divContainer8'>
                    <div className='circulo'>
                        <p className='p23'>A</p>
                    </div>
                    <p className='p24'>Entre <b>20 mil e 30 mil</b> por milímetro cúbico de sangue.</p>
                </div>
            </div>  
            
        </div>



    </div>
  );
};

export default Insight2;