import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { MdFmdGood } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import Back from '../../Assets/back.png';
import QuebraCabeca from '../../Assets/quebracabeca.png';
import Peca from '../../Assets/peca.png';

const Insight2 = function () {
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
        {/* <div className='menuTop'>
            <div style={{ marginTop:  '20px',display: 'flex' }}>
                <MdFmdGood style={{ color: '#ffffff',width:'50px',height: '50px',marginLeft: '20px' }}/>
                <p className='mapa'>MAPA DE EXPLORAÇÃO</p>
                <p className='exp'>EXPLORAÇÃO INTERATIVA</p>
            </div>
        </div> */}



        <div className='backgroundCor'>
            <div className='div1'>
                <div className='boxTitulo'>
                    <p className='p17'>Pare o mundo que eu quero descer!</p>
                </div>
                <div className='boxSubTitulo'>
                    <p className='p18'>exercício de inspiração</p>
                </div>
            </div>
            <div className='main'>
                <div className='section'>
                    <p className='p19'>No filme “Sexta-feira Muito Louca”, uma comédia de 2003, a atriz 
                        Jamie Lee-Curtis troca de corpo com sua filha adolescente e boa parte 
                        das cenas cômicas acontecem pelo fato de uma não saber fazer o que a outra sabe
                    </p>
                
                    <p className='p19'>Por exemplo, a mãe, quando está no corpo da filha, precisa tocar uma guitarra 
                        em um show. Não existe nenhuma maneira de isso dar certo! A guitarra, no caso, é 
                        algo complexo para alguém que nunca tocou o instrumento.
                    </p>
                </div>
            </div>

            <div className='div2'>
                <p className='p20'>Faz de conta...</p>
                <p className='p21'>Agora, imagine que, por conta de um feitiço antigo, você acaba de trocar de corpo 
                    com outra pessoa e essa pessoa é um neurocirurgião!</p>
                <p className='p21'>E isso acontece bem na hora que ele está na sala de cirurgia. O que você faz?
                    Qual a sua reação quando percebe que está de avental branco segurando um bisturi
                    com um paciente desacordado na sua frente?</p>
            </div>
        </div>
        <div style={{ background: `url(${Back})`}}>

            <div className='boxSubTituloMiddle'>
                <p className='p22'>1. Qual a primeira coisa que você pensa em fazer neste momento?</p>
            </div>

            <div className='container1'>
                <div className='divContainer1'>
                    <div className='divContainer2'>
                        <div className='circulo'><p className='p23'>A</p></div>
                        <p className='p24'>Gritar e sair correndo  =D</p>
                    </div>
                    <div className='divContainer3'>
                        <p className='p25'>Você é racional e transparente, mesmo em um momento 
                        tão doido, consegue falar naturalmente com as pessoas.</p>
                    </div>
                </div>

                <div className='divContainer1'>
                    <div className='divContainer2'>
                        <div className='circulo'><p className='p23'>B</p></div>
                        <p className='p24'>Olhar para todos e abrir o jogo de que você não é a melhor pessoa para fazer uma cirurgia.</p>
                    </div>
                    <div className='divContainer3'>
                        <p className='p25'>Você é racional e transparente, mesmo em um momento 
                        tão doido, consegue falar naturalmente com as pessoas.</p>
                    </div>
                </div>

                <div className='divContainer1'>
                    <div className='divContainer2'>
                        <div className='circulo'><p className='p23'>C</p></div>
                        <p className='p24'>Olhar para o lado, entregar o bisturi para outra pessoa e sair da sala.</p>
                    </div>
                    <div className='divContainer3'>
                        <p className='p25'>Você é racional e transparente, mesmo em um momento 
                        tão doido, consegue falar naturalmente com as pessoas.</p>
                    </div>
                </div>

                <div className='divContainer1'>
                    <div className='divContainer2'>
                        <div className='circulo'><p className='p23'>D</p></div>
                        <p className='p24'>Fazer a cirurgia, afinal, eu sou cirurgião!</p>
                    </div>
                    <div className='divContainer3'>
                        <p className='p25'>Você é racional e transparente, mesmo em um momento 
                        tão doido, consegue falar naturalmente com as pessoas.</p>
                    </div>
                </div>
            </div>  

            <div className='boxSubTituloMiddle2'>
                <p className='p22'>2. Perceba seu corpo e sua mente.<br></br>
                Quais seriam as sensações e pensamentos que estariam passando por você <br></br>neste momento?</p>
            </div>

            <div className='container1'>
                <div className='divContainer1'>
                    <div className='divContainer21'>
                        <div className='circulo'><p className='p23'>A</p></div>
                        <p className='p24'>Batimento cardíaco acelerado, respiração curta e mãos tremendo. Medo! Isso não é para mim!</p>
                    </div>
                    <div className='divContainer31'>
                        <p className='p25'>Ter consciência das nossas limitações é importante diante das complexidades, só assim podemos buscar os recursos necessários para resolver o problema. Um problema complexo só pode ser resolvido por quem tem recursos para isso, no caso o cirurgião fez um curso de medicina.</p>
                    </div>
                </div>

                <div className='divContainer1'>
                    <div className='divContainer21'>
                        <div className='circulo'><p className='p23'>B</p></div>
                        <p className='p24'>Eu não faço a menor ideia do que é uma cirurgia, tirem me daqui!</p>
                    </div>
                    <div className='divContainer31'>
                        <p className='p25'>Ter consciência das nossas limitações é importante diante das complexidades, só assim podemos buscar os recursos necessários para resolver o problema. Um problema complexo só pode ser resolvido por quem tem recursos para isso, no caso o cirurgião fez um curso de medicina.</p>
                    </div>
                </div>
            </div> 
        </div>
        <div className='quebraCabeca' style={{ background: `url(${QuebraCabeca})`,backgroundRepeat: 'no-repeat',backgroundRepeat: 'round' }}>
            <img src={Peca} alt="Peça quebra cabeça" style={{ width: '151px',height: '166px'}} />

        </div>



      

    

      
       
        {/* <div className='menuMenu'>
            <div style={{ marginTop:  '20px',display: 'flex' }}>
                <MdFmdGood onClick={() => { navigate('/');}} style={{ color: '#ffffff',width:'50px',height: '50px',marginLeft: '20px' }}/>
                <p style={{ fontWeight: '600', color: '#ffffff',marginLeft: '20px',fontSize:'12px',marginTop: '18px' }}>SAIR DESTE MÓDULO</p>
            </div>
        </div> */}
  </div>
  );
};

export default Insight2;