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
        <div style={{ background: `url(${Back})`,height: '139vh'}}>

            <div className='boxSubTituloMiddle'>
                <p className='p22'>1. Qual a primeira coisa que você pensa em fazer neste momento?</p>
            </div>

            <div className='container1'>
                <Card  
                    letra="A" 
                    pergunta="Gritar e sair correndo  =D" 
                    resposta="Você é racional e transparente, mesmo em um momento tão doido, consegue falar naturalmente com as pessoas."
                />
                <Card  
                    letra="B" 
                    pergunta="Olhar para todos e abrir o jogo de que você não é a melhor pessoa para fazer uma cirurgia." 
                    resposta="Você é racional e transparente, mesmo em um momento tão doido, consegue falar naturalmente com as pessoas."
                />
                <Card  
                    letra="C" 
                    pergunta="Olhar para o lado, entregar o bisturi para outra pessoa e sair da sala." 
                    resposta="Você é racional e transparente, mesmo em um momento tão doido, consegue falar naturalmente com as pessoas."
                />
                <Card  
                    letra="D" 
                    pergunta="Olhar para o lado, entregar o bisturi para outra pessoa e sair da sala." 
                    resposta="Você é racional e transparente, mesmo em um momento tão doido, consegue falar naturalmente com as pessoas."
                />
            </div>  

            <div className='boxSubTituloMiddle2'>
                <p className='p22'>2. Perceba seu corpo e sua mente.<br></br>
                Quais seriam as sensações e pensamentos que estariam passando por você <br></br>neste momento?</p>
            </div>

            <div className='container1'>

                <CardMedio
                    letra="A" 
                    pergunta="Batimento cardíaco acelerado, respiração curta e mãos tremendo. Medo! Isso não é para mim!" 
                    resposta="Ter consciência das nossas limitações é importante diante das complexidades, só assim podemos buscar os recursos necessários para resolver o problema. Um problema complexo só pode ser resolvido por quem tem recursos para isso, no caso o cirurgião fez um curso de medicina."
                />
                   <CardMedio
                    letra="B" 
                    pergunta="Eu não faço a menor ideia do que é uma cirurgia, tirem me daqui!" 
                    resposta="Ter consciência das nossas limitações é importante diante das complexidades, só assim podemos buscar os recursos necessários para resolver o problema. Um problema complexo só pode ser resolvido por quem tem recursos para isso, no caso o cirurgião fez um curso de medicina."
                />
                
            </div> 
        </div>
        <div className='quebraCabeca'>
            <img src={Peca} alt="Peça quebra cabeça" className='peca'/> 
            <p className='p26'>Agora, imagine que você entregou o bisturi para alguém ao lado e decidiu sair da sala e do hospital.</p>
            <p className='p27'>Há uma cafeteria por perto, você entra e encontra uma criança pequena tentando montar um quebra cabeça em uma das mesas. </p>
            <p className='p27'>A mãe dela está no balcão pegando o café. A criança se vira para você e pergunta: <span className='span27'>“Onde eu encaixo essa aqui?”</span> Você segura a peça e a encaixa no lugar certo.</p>
            <p className='p27'>Responda: <span className='span27'>qual a diferença</span> entre a situação na sala de cirurgia e essa agora? Por qual motivo você paralisa na sala de cirurgia e consegue encaixar a peça do quebra-cabeças?</p>
            
            <div className={toggleImage ? 'fundoClick' : 'fundoClick2'} onClick={ToggleImage}>
                <div style={{ background: `url(${SetaClick})`,backgroundRepeat: 'no-repeat',width:'120px',height:'120px' }} className={toggleImage ? 'none' : 'setaClick'} />
            
                <div className={toggleImage ? '' : 'none'}>
                    <p className='p28'>Uma cirurgia pode não ser complexa para alguém que estudou para isso, mas para qualquer outra pessoa é. Você não saberia fazer o que um neurocirurgião faz, a não ser que tenha frequentado a escola de medicina ;)</p>
                    <p className='p29'>Se esse for o seu caso, se você for estudante de medicina se especializando em cirurgia, você irá achar uma cirurgia complicada, não complexa. Já para uma criança pequena, um quebra-cabeças pode ser complexo, mas um adulto pode achá-lo apenas complicado.</p>
                </div>
            </div>
            
            <div className='divBtn' onClick={() => { navigate('/menu');}}>
                <p className='btnText'>Continuar</p>
            </div>
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