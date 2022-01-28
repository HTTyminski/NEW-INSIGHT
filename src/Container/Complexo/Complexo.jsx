import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdFmdGood } from "react-icons/md";
import { Grid } from '@material-ui/core';

const Insight2 = function (props) {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(15)
    const [secondsTwo, setSecondsTwo] = useState(15)
    const [customInterval, setCustomInterval] = useState();
    const [customIntervalTwo, setCustomIntervalTwo] = useState()
    const [changeElement, setChangeElement] = useState(false)
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isOk1, setIsOk1] = useState(false);
    const [isOk2, setIsOk2] = useState(false);
    const [isVisible, setIsVisible ] = useState(false);
    const [isVisible2, setIsVisible2 ] = useState(false);
    const [isStoped, setIsStoped ] = useState(false);

    function AiOutlineCheck1() {
        return `AiOutlineCheck ${isOk1 ? "AiOutlineCheck" : "hidden"}`;
    }
    function classCounter() {
        return `contador ${isClicked ? "contadorClicked" : "contador"}`;
    }
    function classCounter2() {
        return `imageFundoMiddleCompContador ${isClicked2 ? "middleCompContador" : "imageFundoMiddleCompContador"}`;
    }
   
    const scrollToTop = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }






    const startTimer = () => {
        setCustomInterval(
            setInterval(() => {
                changeTime()
            }, 1000)
        )
        setIsVisible(true);
        setChangeElement(true)
        setIsClicked(true); 
    }
    const startTimerTwo = () => {
        setCustomIntervalTwo(
            setInterval(() => {
                changeTimeTwo()
            }, 1000)
        )
        setIsVisible2(true);
        setIsOk1(true);
        setIsClicked(false);
        setIsClicked2(true);
   
    }
    const stopTimer = () => {
        if (customInterval) {
            clearInterval(customInterval);
        }
    }
    const stopTimerTwo = () => {
        if (customInterval) {
            clearInterval(customIntervalTwo);
        }
        setIsStoped(true);
     
    }
    const clear = () => {
        stopTimer();
        setSeconds(0);
    }
    const changeTime = () => {
        setSeconds((prevState) => {
            if (prevState - 1 == 0) {
                setSeconds(seconds - 1);
                return 0;
            }
            return prevState - 1;
        })
    }
    const changeTimeTwo = () => {
        setSecondsTwo((prevState) => {
            if (prevState - 1 == 0) {
                setSecondsTwo(secondsTwo - 1);
                return 0;
            }
            return prevState - 1;
        })
    }

    return (
        <div className="flex-container">
        
            <div className='imageFundoComplexo'>
                <p className='p30'>Complexo ou Complicado</p>
                <p className='p31'>pense  rápido</p>
                <p className='p32'>Você tem<span className='p33'> 15 segundos</span> para cada resposta.</p>
                <p className='p32'>Selecione a alternativa correta sem pesquisar na internet ;)</p>

                <div className='divBtnStart' onClick={startTimer} >
                    {!changeElement
                        ? <p className='btnTextStart'>Começar =)</p>
                        : <p className='btnTextStarted'>Já começou =D</p>
                    }
                </div>
            </div>



            <div className={isVisible ? classCounter(): 'hidden'}>
                <p className='p20'>{seconds}</p>
            </div>

            <div className={isVisible ? 'imageFundoMiddleComp': 'hidden'}>
                <p className='boxSubTituloQtd'>1. Qual é a quantidade média de leucócitos de uma pessoa saudável?</p>
    
            

            <Grid container spacing={1} id="bot">
                <Grid item  xs={12} sm={6} md={4}>                  
                    <div className='divContainerResp'
                        onClick={() => {
                            stopTimer();
                            startTimerTwo();
                            AiOutlineCheck1();
                        }}>
                        <div className='boxConteudoResp'>
                            <p className='p23 circulo'>A</p>
                          
                        </div>
                        <p className='p24' >Entre <b>6 mil e 10 mil</b> por milímetro cúbico de sangue.</p>
                    </div>
                </Grid>
                <Grid item  xs={12} sm={6} md={4}>       
                    <div className='divContainerResp' 
                        onClick={() => {
                            stopTimer();
                            startTimerTwo();
                        }}>
                        <div className='boxConteudoResp'>
                            <p className='p23 circulo'>A</p>
                          
                        </div>
                        <p className='p24'>Entre <b>400 e 100</b> por milímetro cúbico de sangue.</p>
                    </div>
                </Grid>
                <Grid item  xs={12} sm={6} md={4}>      
                    <div className='divContainerResp' 
                        onClick={() => { 
                            stopTimer(); 
                            startTimerTwo(); 
                        }}>
                        <div className='boxConteudoResp'>
                            <p className='p23 circulo'>A</p>
                        
                        </div>
                        <p className='p24'>Entre <b>20 mil e 30 mil</b> por milímetro cúbico de sangue.</p>
                    </div>
                </Grid>
            </Grid>

            </div>

            <div className={isVisible2 ? classCounter2() : 'hidden'}>
                <p className='p20'>{secondsTwo}</p>
            </div>

            <div className={isVisible2 ? 'divContainerBlue': 'hidden'}>
                <p className='boxSubTituloQtd2'>2. Qual é o resultado de 100 vezes 5.</p>

            <Grid container spacing={2}>
                <Grid item  xs={0} sm={0} md={3} className='gridNone'></Grid>
                <Grid item  xs={12} sm={4} md={2}>                  
                    <div className='boxResp1' onClick={stopTimerTwo}>
                        <div className='boxResponse'>
                            <p className='p23 circulo2'>A</p>
                           
                        </div>
                        <p className='p38'>50</p>
                    </div>
                </Grid>
                <Grid item  xs={12} sm={4} md={2}>       
                    <div className='boxResp2' onClick={stopTimerTwo}>
                        <div className='boxResponse'>
                            <p className='p23 circulo2'>B</p>
                            
                        </div>
                        <p className='p38'>15</p>
                    </div>
                </Grid>
                <Grid item  xs={12} sm={4} md={2}>      
                    <div className='boxResp3' onClick={stopTimerTwo}>
                        <div className='boxResponse'>
                            <p className='p23 circulo2'>B</p>
                            
                        </div>
                        <p className='p38'>500</p>
                    </div>
                </Grid>
                <Grid item  xs={0} sm={0} md={3} className='gridNone'></Grid>
            </Grid>
            </div>

            <div className={isStoped ? 'imageFundoComp3': 'hidden'}>
                <p className='textBotComplexo'>Percebeu como uma pergunta complexa deixa a gente desconcertado?</p>
                <p className='textBotComplexo2'>Algumas perguntas só um especialista pode responder. Mortais comuns como eu e você, podemos chutar ou utilizar um recurso, nesse caso, o Google serve!</p>
                <div className='divBtn2' onClick={() => { navigate('/menu'); }}>
                    <p className='btnTextMotivation'>Motivation</p>
                </div>
            </div>

            <div className="menu">
                <div className='menuButton1'>
                    <div className='menuButton'>
                    <FiChevronLeft className='menuButtons' onClick={() => { navigate('/Insight4');}}/>
                    </div>
                    <div className='menuButton'>
                    <MdFmdGood className='menuButtons' onClick={() => { navigate('/menu');}} />
                    </div>
                    <div className='menuButtonDisable'>
                    <FiChevronRight className='menuButtonsDisable'/>
                    </div>
                </div>
            </div>
       





        </div>
    );
};

export default Insight2;