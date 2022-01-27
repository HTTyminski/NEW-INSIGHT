import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { MdFmdGood } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { BsXLg } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs";

const Menu = function () {
    const navigate = useNavigate();

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
        <div className='menuInsight' onClick={() => { navigate('/');}}>
            <div style={{ marginTop:'6px',display:'flex' }}>
                <BsXLg className='iconTopMenu'/>
                <p className='mapa'>MAPA DE EXPLORAÇÃO</p>
                <p className='exp'>EXPLORAÇÃO INTERATIVA</p>
            </div>
        </div>
        <div className='containerMenu telefone' 
            onClick={() => { navigate('/Insight2');}}
            onMouseEnter={() => setIsHovering1(true)} 
            onMouseLeave={() => setIsHovering1(false)}
            style={{ 
                height: '176px',
                borderBottom: '1px solid #02cbeb',
            }}>
            <div className={back1()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass1()} style={{ height: '176px' }}/>
                    <p className='fontLeft'>I</p>
                    <p className='leftMenuTitle'>INSIGHT</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenu'>
                    <p className='fontRight'>Criar, inventar e provocar descobertas</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Narrativas em Vídeo</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Atividade de Reflexão</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* mobile */}
        <div className='containerMenu telefone1' 
            onClick={() => { navigate('/Insight4');}}
            onMouseEnter={() => setIsHovering1(true)} 
            onMouseLeave={() => setIsHovering1(false)}
            style={{ 
                height: '60px',
                borderBottom: '1px solid #02cbeb' 
            }}>
            <div className={back1()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass1()} style={{ height: '15vh' }}/>
                    <p className='fontLeft'>I</p>
                    <p className='leftMenuTitle'>INSIGHT</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenu'>
                    <p className='fontRight'>Criar, inventar e provocar descobertas</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Narrativas dem Vídeo</p>
                        </div>
                    </div>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Atividade de Reflexão</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='containerMenu telefone'
                onClick={() => { navigate('/Insight3');}}
                onMouseEnter={() => setIsHovering2(true)} 
                onMouseLeave={() => setIsHovering2(false)}
                style={{ height: '176px',borderBottom: '1px solid #02cbeb' 
            }}>
            <div className={back2()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass2()} style={{ height: '176px' }}/>
                    <p className='fontLeft'>M</p>
                    <p className='leftMenuTitle'>MOTIVATION</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Construir um futuro é facil e fazemos isso a todo momento</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Vídeo: Escolha entre 3 portas</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Entrevista com Edgard Gouveia Jr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='containerMenu telefone1'
                onClick={() => { navigate('/Insight3');}}
                onMouseEnter={() => setIsHovering2(true)} 
                onMouseLeave={() => setIsHovering2(false)}
                style={{ height: '60px',borderBottom: '1px solid #02cbeb' 
            }}>
            <div className={back2()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass2()} style={{ height: '17vh' }}/>
                    <p className='fontLeft'>M</p>
                    <p className='leftMenuTitle'>MOTIVATION</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Construir um futuro é facil e fazemos isso a todo momento</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Vídeo: Escolha entre 3 portas</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Entrevista com Edgard Gouveia Jr</p>
                        </div>
                    </div>
                    </div>
                    <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Atividade de Reflexão</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='containerMenu telefone'
                onClick={() => { navigate('/Insight4');}}
                onMouseEnter={() => setIsHovering3(true)} 
                onMouseLeave={() => setIsHovering3(false)}
                style={{ height: '176px',borderBottom: '1px solid #02cbeb' 
            }}>
            <div className={back3()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass3()} style={{ height: '176px' }}/>
                    <p className='fontLeft'>P</p>
                    <p className='leftMenuTitle'>PRACTICE</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Praticar antes de avançar</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução à atividade</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Construção de hístoria em quadrinhos em duplas</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Atividade de Reflexão</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='containerMenu telefone1'
                onClick={() => { navigate('/Insight4');}}
                onMouseEnter={() => setIsHovering3(true)} 
                onMouseLeave={() => setIsHovering3(false)}
                style={{ height: '18vh',borderBottom: '1px solid #02cbeb' 
            }}>
            <div className={back3()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass3()} style={{ height: '18vh' }}/>
                    <p className='fontLeft'>P</p>
                    <p className='leftMenuTitle'>PRACTICE</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Praticar antes de avançar</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução à atividade</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Construção de hístoria em quadrinhos em duplas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Atividade de Reflexão</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='containerMenu view telefone'
                onMouseEnter={() => setIsHovering4(true)} 
                onMouseLeave={() => setIsHovering4(false)}
                style={{ height: '40vh',borderBottom: '1px solid #02cbeb' }}
            >
            <div className={back4()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass4()} style={{ height: '40vh' }}/>
                    <p className='fontLeft'>A</p>
                    <p className='leftMenuTitle'>AWARENESS</p>
                </div>
            </div>
            <div style={{ display: 'grid' }}>
                <div className='rightMenu'>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Um universo de conhecimento</p>
                        <p className='fontRight'style={{ marginLeft: '155px' }}>Criacão de narrativas</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>PODCAST: Introdução conceitual</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Escolha uma chave para continuar</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Introdução ao tema</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Vídeo: bate-papo entre criador de narrativas de games RPG e publicitário</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Vídeo Depoimento: pesonagem do mundo corporativo</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>PODCAST: Helena Crescia - como fazer um vom storytelling</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Infográfico com passo a passo para construção de narrativas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Colaboração</p>
                    <p className='fontRight'style={{ marginLeft: '472px' }}>Experimentação</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>CAST SÉRIE: 8 episódios sobre a "Pedagogia da cooperação"</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Metodologias contemporâneas de colaboração</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Três enfoques da Experimentação</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Infográfico passo a passo de experimentação no Design Thinking</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/* telefone1 */}
        <div className='containerMenu view telefone1'
                onMouseEnter={() => setIsHovering4(true)} 
                onMouseLeave={() => setIsHovering4(false)}
                style={{ height: '40vh',borderBottom: '1px solid #02cbeb' }}
            >
            <div className={back4()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass4()} style={{ height: '40vh' }}/>
                    <p className='fontLeft'>A</p>
                    <p className='leftMenuTitle'>AWARENESS</p>
                </div>
            </div>
            <div style={{ display: 'grid' }}>
                <div className='rightMenu'>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Um universo de conhecimento</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>PODCAST: Introdução conceitual</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Escolha uma chave para continuar</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Criacão de narrativas</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Introdução ao tema</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Vídeo: bate-papo entre criador de narrativas de games RPG e publicitário</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Vídeo Depoimento: pesonagem do mundo corporativo</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>PODCAST: Helena Crescia - como fazer um vom storytelling</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Infográfico com passo a passo para construção de narrativas</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Colaboração</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Introdução ao tema</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>CAST SÉRIE: 8 episódios sobre a "Pedagogia da cooperação"</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Metodologias contemporâneas de colaboração</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Experimentação</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Introdução ao tema</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Três enfoques da esperimentação</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Infográfico passo a passo de experimentação no Design Thinking</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        {/* 2 */}
        <div className='containerMenu mobile'
                onMouseEnter={() => setIsHovering4(true)} 
                onMouseLeave={() => setIsHovering4(false)}
                style={{ height: '88vh',borderBottom: '1px solid #02cbeb' }}
            >
            <div className={back4()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass4()} style={{ height: '88vh' }}/>
                    <p className='fontLeft'>A</p>
                    <p className='leftMenuTitle'>AWARENESS</p>
                </div>
            </div>
            <div style={{ display: 'grid' }}>
                <div className='rightMenu'>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Um universo de conhecimento</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>PODCAST: Introdução conceitual</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Escolha uma chave para continuar</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* numero2 */}
                <div className='rightMenu'>
                    <div className='rightTopMenuM'>
                        <p className='fontRight'>Criacão de narrativas</p>
                    </div>
                    <div className='rightMiddleMenu'>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Introdução ao tema</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Vídeo: bate-papo entre criador de narrativas de games RPG e publicitário</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Vídeo Depoimento: pesonagem do mundo corporativo</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>PODCAST: Helena Crescia - como fazer um vom storytelling</p>
                            </div>
                        </div>
                        <div className='rightBotMenu'>
                            <div className='boxIconMenu'>
                                <div style={{ display: 'flex' }}>
                                    <MdFmdGood className='iconMenu'/>
                                    <FcOk className='iconMenu2'/>
                                </div>
                                <p className='textMenu'>Infográfico com passo a passo para construção de narrativas</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* numero3 */}
                <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Colaboração</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>CAST SÉRIE: 8 episódios sobre a "Pedagogia da cooperação"</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Metodologias contemporâneas de colaboração</p>
                        </div>
                    </div>
                </div>
                </div>
                {/* numero4 */}
                <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Experimentação</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Três enfoques da Experimentação</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Infográfico passo a passo de experimentação no Design Thinking</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className='containerMenu telefone'
            onMouseEnter={() => setIsHovering5(true)} 
            onMouseLeave={() => setIsHovering5(false)}
            style={{ height: '206px',borderBottom: '1px solid #02cbeb' }}
        >
            <div className={back5()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass5()} style={{ height: '206px' }}/>
                    <p className='fontLeft'>C</p>
                    <p className='leftMenuTitle'>CONNECT</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Como usar a exploração interativa?</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Guia prático para exercer a Exploração Interativa</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo construção de Storytelling</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo 7 práticas de Pedagogia da cooperação</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                    <div className='boxIconMenu'>
                        <div style={{ display: 'flex' }}>
                            <MdFmdGood className='iconMenu'/>
                            <FcOk className='iconMenu2'/>
                        </div>
                        <p className='textMenu'>Ferramenta: Template completo de passo a passo da experimentação pelo Design Thinking</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='containerMenu telefone1'
            onMouseEnter={() => setIsHovering5(true)} 
            onMouseLeave={() => setIsHovering5(false)}
            style={{ height: '22vh',borderBottom: '1px solid #02cbeb' }}
        >
            <div className={back5()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass5()} style={{ height: '22vh' }}/>
                    <p className='fontLeft'>C</p>
                    <p className='leftMenuTitle'>CONNECT</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Como usar a exploração interativa?</p>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao tema</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Guia prático para exercer a Exploração Interativa</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo construção de Storytelling</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo 7 práticas de Pedagogia da cooperação</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightBotMenu'>
                    <div className='boxIconMenu'>
                        <div style={{ display: 'flex' }}>
                            <MdFmdGood className='iconMenu'/>
                            <FcOk className='iconMenu2'/>
                        </div>
                        <p className='textMenu'>Ferramenta: Template completo de passo a passo da experimentação pelo Design Thinking</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='containerMenu telefone'
            onMouseEnter={() => setIsHovering6(true)} 
            onMouseLeave={() => setIsHovering6(false)}
            style={{ height: '206px' }}
        >
            <div className={back6()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass6()} style={{ height: '206px' }}/>
                    <p className='fontLeft'>T</p>
                    <p className='leftMenuTitle'>TRANSFER</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Chegou a hora da sua missão final: transferir conhecimento</p>
                </div>

                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao passo a passo para a transferência de conhecimento</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Reflexões</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Infográfico com visão completa da Trilha de Exploração Interativa</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo 7 práticas de Pedagogia da cooperação</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo de passo a passo da experimentação pelo Design Thinking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='containerMenu telefone1'
            onMouseEnter={() => setIsHovering6(true)} 
            onMouseLeave={() => setIsHovering6(false)}
            style={{ height: '22vh'}}
        >
            <div className={back6()}>
                <div className='leftMenuCenter'>
                    <div className={crossClass6()} style={{ height: '22vh' }}/>
                    <p className='fontLeft'>T</p>
                    <p className='leftMenuTitle'>TRANSFER</p>
                </div>
            </div>
            <div className='rightMenu'>
                <div className='rightTopMenuM'>
                    <p className='fontRight'>Chegou a hora da sua missão final: transferir conhecimento</p>
                </div>

                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Introdução ao passo a passo para a transferência de conhecimento</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Reflexões</p>
                        </div>
                    </div>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Infográfico com visão completa da Trilha de Exploração Interativa</p>
                        </div>
                    </div>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo 7 práticas de Pedagogia da cooperação</p>
                        </div>
                    </div>
                </div>
                <div className='rightMiddleMenu'>
                    <div className='rightBotMenu'>
                        <div className='boxIconMenu'>
                            <div style={{ display: 'flex' }}>
                                <MdFmdGood className='iconMenu'/>
                                <FcOk className='iconMenu2'/>
                            </div>
                            <p className='textMenu'>Ferramenta: Template completo de passo a passo da experimentação pelo Design Thinking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='menuInsight' onClick={() => { navigate('/menu');}}>
            <div style={{ marginTop:'6px',display:'flex' }}>
                <BsBoxArrowLeft className='iconTopMenu'/>
                <p className='fontBotNavigate'>SAIR DESTE MÓDULO</p>
            </div>
        </div>
  </div>
  );
};

export default Menu;