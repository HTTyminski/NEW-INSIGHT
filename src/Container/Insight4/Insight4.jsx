import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Back from '../../Assets/back.png';
import Peca from '../../Assets/peca.png';
import Card from '../../Components/cards';
import CardMedio from '../../Components/cardsMedio';
import SetaClick from '../../Assets/setaClick.png';
import { Grid } from '@material-ui/core';
import Fundo from '../../Assets/Fundo.png';
import './styles.css';


const Insight4 = function () {

    const navigate = useNavigate();

    const [ toggleImage ,setToggleImage ] = useState(false);

    const ToggleImage = () => {
        toggleImage ? setToggleImage(false) : setToggleImage(true);
    }

    return (
        <div className="flex-container">
            <img className="bisturi" src={Fundo} alt="Bisturi" />
            <div className='backgroundColorIns4'>
            <p className='p17'>Pare o mundo que eu quero descer!</p>
            <p className='p18'>exercício de inspiração</p>

            <div className='main'>
                <div className='sectionFilmes'>
                    <p className='p19Filme'>No filme “Sexta-feira Muito Louca”, uma comédia de 2003, a atriz 
                        Jamie Lee-Curtis troca de corpo com sua filha adolescente e boa parte 
                        das cenas cômicas acontecem pelo fato de uma não saber fazer o que a outra sabe
                    </p>
                
                    <p className='p199'>Por exemplo, a mãe, quando está no corpo da filha, precisa tocar uma guitarra 
                        em um show. Não existe nenhuma maneira de isso dar certo! A guitarra, no caso, é 
                        algo complexo para alguém que nunca tocou o instrumento.
                    </p>
                </div>
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

            <div style={{ background: `url(${Back})`}}>

            <div className='boxSubTituloMiddle1'>
                <p className='p22'>1. Qual a primeira coisa que você pensa em fazer neste momento?</p>
            </div>

            <Grid container>
                <Grid item  xs={12} sm={6} md={3}>                  
                    <Card  
                        letra="A" 
                        pergunta="Gritar e sair correndo  =D" 
                        resposta="Reação normal para um problema maluco."
                    />
                </Grid>
                <Grid item  xs={12} sm={6} md={3}>       
                    <Card  
                        letra="B" 
                        pergunta="Olhar para todos e abrir o jogo de que você não é a melhor pessoa para fazer uma cirurgia." 
                        resposta="Sabia decisão, ponderada. Afinal fazer uma cirurgia não está entre as suas habilidades."
                    />
                </Grid>
                <Grid item  xs={12} sm={6} md={3}>      
                    <Card  
                        letra="C" 
                        pergunta="Olhar para o lado, entregar o bisturi para outra pessoa e sair da sala." 
                        resposta="Você é racional e transparente, mesmo em um momento tão doido, consegue falar naturalmente com as pessoas."
                    />
                </Grid>
                <Grid item  xs={12} sm={6} md={3}>     
                    <Card  
                        letra="D" 
                        pergunta="Olhar para o lado, entregar o bisturi para outra pessoa e sair da sala." 
                        resposta="Você não para de nos surpreender!"
                    />
                </Grid>
            </Grid>

            <div className='boxSubTituloMiddle2'>
                <p className='p22'>2. Perceba seu corpo e sua mente.<br></br>
                Quais seriam as sensações e pensamentos que estariam passando por você <br></br>neste momento?</p>
            </div>

            <div className='marginBtGrid'>

            <Grid container>
                <Grid item  xs={12} sm={12} md={6}> 
                    <CardMedio
                        letra="A" 
                        pergunta="Batimento cardíaco acelerado, respiração curta e mãos tremendo. Medo! Isso não é para mim!" 
                        resposta="Sua reação é normal. Quando estamos diante de uma complexidade, quase sempre nos paralisamos. Isso porque sabemos que não temos os recursos para resolver problemas complexos quando não fazem parte do nosso repertório. Nesse caso, uma cirurgia para um leigo é algo supercomplexo."
                    />
                </Grid>
                <Grid item  xs={12} sm={12} md={6}> 
                    <CardMedio
                        letra="B" 
                        pergunta="Eu não faço a menor ideia do que é uma cirurgia, tirem me daqui!" 
                        resposta="Ter consciência das nossas limitações é importante diante das complexidades, só assim podemos buscar os recursos necessários para resolver o problema. Um problema complexo só pode ser resolvido por quem tem recursos para isso, no caso o cirurgião fez um curso de medicina."
                    />
                </Grid>
            </Grid>
            </div>

            <div className='marginBtGrid2'>
                <CardMedio
                    letra="A" 
                    pergunta="Batimento cardíaco acelerado, respiração curta e mãos tremendo. Medo! Isso não é para mim!" 
                    resposta="Sua reação é normal. Quando estamos diante de uma complexidade, quase sempre nos paralisamos. Isso porque sabemos que não temos os recursos para resolver problemas complexos quando não fazem parte do nosso repertório. Nesse caso, uma cirurgia para um leigo é algo supercomplexo."
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

           
            

            
        </div>
    );
};

export default Insight4;