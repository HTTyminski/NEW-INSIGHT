import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { MdFmdGood } from "react-icons/md";
import { FcOk } from "react-icons/fc";

const Menu = function () {
    const navigate = useNavigate();

  return (
    <div className="flex-container">
        <div className='topMenu'>
            <div style={{ marginTop:  '20px',display: 'flex' }}>
                <MdFmdGood style={{ color: '#ffffff',width:'50px',height: '50px',marginLeft: '20px' }}/>
                <p style={{ fontWeight: '600', color: '#ffffff',marginLeft: '20px',fontSize: '18px',lineHeight: '10px' }}>MAPA DE EXPLORAÇÃO</p>
                <p style={{ color: '#ffffff',marginLeft: '20px',fontSize: '18px',lineHeight: '10px' }}>EXPLORAÇÃO INTERATIVA</p>
            </div>
        </div>
        <div className='containerMenu' style={{ height: '15vh',borderBottom: '1px solid #02cbeb' }}>
            <div className='leftMenu'>
                <div className='leftMenuCenter'>
                    <div className='borderLeft' style={{ height: '15vh' }}/>
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
        <div className='containerMenu'style={{ height: '17vh',borderBottom: '1px solid #02cbeb' }}>
            <div className='leftMenu'>
                <div className='leftMenuCenter'>
                    <div className='borderLeft' style={{ height: '17vh' }}/>
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
        <div className='containerMenu'style={{ height: '18vh',borderBottom: '1px solid #02cbeb' }}>
            <div className='leftMenu'>
                <div className='leftMenuCenter'>
                    <div className='borderLeft' style={{ height: '18vh' }}/>
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
        <div className='containerMenu'style={{ height: '40vh',borderBottom: '1px solid #02cbeb' }}>
            <div className='leftMenu'>
                <div className='leftMenuCenter'>
                    <div className='borderLeft' style={{ height: '40vh' }}/>
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
            </div>
        </div>
        <div className='containerMenu'style={{ height: '22vh',borderBottom: '1px solid #02cbeb' }}>
            <div className='leftMenu'>
                <div className='leftMenuCenter'>
                    <div className='borderLeft' style={{ height: '22vh' }}/>
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
        <div className='containerMenu'style={{ height: '22vh' }}>
            <div className='leftMenu'>
                <div className='leftMenuCenter'>
                    <div className='borderLeft' style={{ height: '22vh' }}/>
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
        <div className='botMenu'>
            <div style={{ marginTop:  '20px',display: 'flex' }}>
                <MdFmdGood onClick={() => { navigate('/');}} style={{ color: '#ffffff',width:'50px',height: '50px',marginLeft: '20px' }}/>
                <p style={{ fontWeight: '600', color: '#ffffff',marginLeft: '20px',fontSize:'12px',marginTop: '18px' }}>SAIR DESTE MÓDULO</p>
            </div>
        </div>
  </div>
  );
};

export default Menu;