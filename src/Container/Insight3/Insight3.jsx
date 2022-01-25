import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { AiOutlineCheck } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import { BsPatchExclamation } from "react-icons/bs";

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

    function AiOutlineCheck1() {
        return `AiOutlineCheck ${isOk1 ? "AiOutlineCheck" : "hidden"}`;
    }
    function AiOutlineCheck2() {
        return `AiOutlineCheck2 ${isOk2 ? "hidden":"AiOutlineCheck2" }`;
    }
    function classCounter() {
        return `div233 ${isClicked ? "div233Clicked" : "div233"}`;
    }
    function classCounter2() {
        return `div234 ${isClicked2 ? "div234Clicked" : "div234"}`;
    }

    const startTimer = () => {
        setCustomInterval(
            setInterval(() => {
                changeTime()
            }, 1000)
        )
        setChangeElement(true)
        setIsClicked(true);
    }
    const startTimerTwo = () => {
        setCustomIntervalTwo(
            setInterval(() => {
                changeTimeTwo()
            }, 1000)
        )
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
            <div className='topInsight3'></div>

            <div className='imageFundo1'>
                <p className='p30'>Complexo ou Complicado</p>
                <p className='p31'>pense  rápido</p>
                <p className='p32'>Você tem<span className='p33'> 15 segundos</span> para cada resposta.</p>
                <p className='p34'>Selecione a alternativa correta sem pesquisar na internet ;)</p>

                <div className='divBtn' onClick={startTimer}>
                    {!changeElement
                        ? <p className='btnTextStart'>Começar =)</p>
                        : <p className='btnTextStarted'>Já começou =D</p>
                    }
                </div>
            </div>

            <div className={classCounter()}>
                <p className='p20'>{seconds}</p>
            </div>

            <div className='imageFundo2'>
                <p className='boxSubTituloQtd'>1. Qual é a quantidade média de leucócitos de uma pessoa saudável?</p>
                <div className='divContainer5'>
                    <div className='divContainer6'
                        onClick={() => {
                            stopTimer();
                            startTimerTwo();
                            AiOutlineCheck1();
                        }}>

                        <div className='boxResponse'>
                            <p className='p23 circulo'>A</p>
                            <BsPatchCheck className={AiOutlineCheck1()} />
                        </div>
                        <p className='p24' >Entre <b>6 mil e 10 mil</b> por milímetro cúbico de sangue.</p>
                    </div>
                    <div className='divContainer7' 
                        onClick={() => {
                            stopTimer();
                            startTimerTwo();
                        }}>
                        <div className='boxResponse'>
                            <p className='p23 circulo'>A</p>
                            <BsPatchExclamation className={AiOutlineCheck1()} />
                        </div>
                        <p className='p24'>Entre <b>400 e 100</b> por milímetro cúbico de sangue.</p>
                    </div>
                    <div className='divContainer8' 
                        onClick={() => { 
                            stopTimer(); 
                            startTimerTwo(); 
                        }}>
                        <div className='boxResponse'>
                            <p className='p23 circulo'>A</p>
                            <BsPatchExclamation className={AiOutlineCheck1()} />
                        </div>
                        <p className='p24'>Entre <b>20 mil e 30 mil</b> por milímetro cúbico de sangue.</p>
                    </div>
                </div>
            </div>

            <div className={classCounter2()}>
                <p className='p20'>{secondsTwo}</p>
            </div>

            <div className='divBlue'>
                <p className='boxSubTituloQtd2'>2. Qual é o resultado de 100 vezes 5.</p>
                <div className='divContainer5'>
                    <div className='divContainer9' onClick={stopTimerTwo}>
                        <div className='boxResponse'>
                            <p className='p23 circulo2'>A</p>
                            <BsPatchExclamation className={AiOutlineCheck2()} />
                        </div>
                        <p className='p38'>50</p>
                    </div>
                    <div className='divContainer10' onClick={stopTimerTwo}>
                        <div className='boxResponse'>
                            <p className='p23 circulo2'>B</p>
                            <BsPatchExclamation className={AiOutlineCheck2()} />
                        </div>
                        <p className='p38'>15</p>
                    </div>
                    <div className='divContainer11' onClick={stopTimerTwo}>
                        <div className='boxResponse'>
                            <p className='p23 circulo2'>B</p>
                            <BsPatchCheck className={AiOutlineCheck2()} />
                        </div>
                        <p className='p38'>500</p>
                    </div>
                </div>
            </div>
            <div className='imageFundo3'>
                <p className='p39'>Percebeu como uma pergunta complexa deixa a gente desconcertado?</p>
                <p className='p40'>Algumas perguntas só um especialista pode responder. Mortais comuns como eu e você, podemos chutar ou utilizar um recurso, nesse caso, o Google serve!</p>
                <div className='divBtn2' onClick={() => { navigate('/menu'); }}>
                    <p className='btnTextMotivation'>Motivation</p>
                </div>
            </div>
        </div>
    );
};

export default Insight2;