import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './styles.css';
import Ellipse from '../../Assets/Ellipse.png';
import { MdFmdGood } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Home = function () {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="fundoPreto" />
      <div className="backgroundStars">
        <img className="ellipse" src={Ellipse} alt="Mundo globo" />
        
        <div className="header">
          <p className="p1">Olá!</p>
          <p className="p2">Que bom ter você aqui ;)</p>
          <div style={{ marginTop: '8em'}}>
            <p className="p4">Navegando nesta trilha, desejamos que você aprimore sua</p>
              <div className="center">
                <p className="p4">
                <span className="p3" style={{ marginRight: '10px' }}>CAPACIDADE DE GESTÃO</span>
                em uma era cheia de
              </p>
              <p className="p4">complexidades in tensas.</p>
            </div>
          </div>
          <div className='textTopCenter'>
            <p className="p5">“É possível desenvolver</p>
            <p className="p5">sua habilidade de gestão”</p>
          </div>
        </div>
        {/* mobile */}
       
        <div className="box">
          <div className="boxdiv1">
          <p className="p1">Olá!</p>
            <p className="p2">Que bom ter você aqui ;)</p>
            <p className="p4" style={{ marginTop: '39px' }}>Navegando nesta trilha, desejamos que você aprimore sua
              <span className="p3" style={{ marginRight: '10px',marginLeft: '10px' }}>CAPACIDADE DE GESTÃO</span>
              em uma era cheia de complexidades intensas.</p>
            </div>
          </div>
        
      

          <div className="box">
            <div className='boxdiv'>
              <div style={{ backgroundColor: '#FF4500' }} className="square2" />
                <p style={{ color: '#FF4500' }} className="p8">Desenvolvimento</p>
                <p className="textToLeft p7">
                  Ao longo dessa jornada de conhecimento e a cada experiência de aprendizagem,
                  você verá que é possível desenvolver sua habilidade de gestão,
                  mesmo em ambientes e situações complexas.
                </p>
            </div>
            <div className='boxdiv'>
              <div style={{ backgroundColor: '#804E6C' }} className="square2" />
              <div>
                <p style={{ color: '#804E6C' }} className="textToLeft p8">Autoestima</p>
                <p className="textToLeft p7">
                  Enquanto adquire novos conhecimentos, você sentirá algo mais:
                  a segurança de quem está mais preparado para um mundo tão ágil e desafiador.
                  E sabe aquela sensação de autoestima crescendo? Temos também!
                </p>
              </div>
            </div>
            <div className='boxdiv'>
              <div style={{ backgroundColor: '#6C77B7' }} className="square2" />
              <div>
                <p style={{ color: '#6C77B7' }} className="textToLeft p8">Aprendizados</p>
                <p className="textToLeft p7">
                  Por isso, aproveite o momento!
                  Esta é uma ótima oportunidade para se desconectar um pouco,
                  silenciar os alertas do seu smartphone e mergulhar nesses novos aprendizados.
                </p>
              </div>
            </div> 
          </div>

       
        <div className="middle-container">
          <div className="middle-container-child1">
            <div style={{ backgroundColor: '#FF4500' }} className="square" />
            <div className="boxConteudo">
              <p style={{ color: '#FF4500' }} className="textToLeft p8">Desenvolvimento</p>
              <p className="textToLeft p7">
                Ao longo dessa jornada de conhecimento e a cada experiência de aprendizagem,
                você verá que é possível desenvolver sua habilidade de gestão,
                mesmo em ambientes e situações complexas.
              </p>
            </div>
          </div>
          <div className="middle-container-child2">
            <div style={{ backgroundColor: '#804E6C' }} className="square" />
            <div className="boxConteudo">
              <p style={{ color: '#804E6C' }} className="textToLeft p8">Autoestima</p>
              <p className="textToLeft p7">
                Enquanto adquire novos conhecimentos, você sentirá algo mais:
                a segurança de quem está mais preparado para um mundo tão ágil e desafiador.
                E sabe aquela sensação de autoestima crescendo? Temos também!
              </p>
            </div>
          </div>
          <div className="middle-container-child3">
            <div style={{ backgroundColor: '#6C77B7' }} className="square" />
            <div className="boxConteudo">
              <p style={{ color: '#6C77B7' }} className="textToLeft p8">Aprendizados</p>
              <p className="textToLeft p7">
                Por isso, aproveite o momento!
                Esta é uma ótima oportunidade para se desconectar um pouco,
                silenciar os alertas do seu smartphone e mergulhar nesses novos aprendizados.
              </p>
            </div>
          </div>
        </div>
        <div className="boxPage">
          <div className="boxdivPage">
            <p style={{ color: '#FF4500' }} className="p12">Uma coisa é certa:</p>
            <p className="p9">O mundo anda cada vez mais complexo</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="boxBottom1">
          <p className="p10">
            No trabalho e na vida, esse mundão está cheio de incertezas e agilidade,
            exigindo da gente a capacidade de encontrar soluções em meio a um cenário complexo.
            Existem duas formas de lidar com isso: transformar tudo em algo mais simples
            ou conviver em paz com a complexidade!
          </p>
        </div>
        <div className="boxBottom2">
          <p className="p10">
            <span className="p14">Mas como conseguimos fazer isso?</span>
            A resposta está na Gestão de Complexidades.
            Afinal, o mundo não vai deixar de ser ágil, disruptivo e incerto. Cada vez mais,
            novas situações desafiadoras surgirão, como vimos na pandemia do Covid-19, por exemplo.
            Nós é que devemos nos adaptar, e com essa habilidade, podemos fazer a diferença
            nas organizações e na nossa sociedade.
          </p>
        </div>
       
        {/* mobile */}
        <div className="box">
          <div className="boxBottom3">
          <p className="p10">
            No trabalho e na vida, esse mundão está cheio de incertezas e agilidade,
            exigindo da gente a capacidade de encontrar soluções em meio a um cenário complexo.
            Existem duas formas de lidar com isso: transformar tudo em algo mais simples
            ou conviver em paz com a complexidade!
          </p>
          </div>
          <div className="boxBottom3">
            <p className="p10">
              <span className="p14">Mas como conseguimos fazer isso?</span>
              A resposta está na Gestão de Complexidades.
              Afinal, o mundo não vai deixar de ser ágil, disruptivo e incerto. Cada vez mais,
              novas situações desafiadoras surgirão, como vimos na pandemia do Covid-19, por exemplo.
              Nós é que devemos nos adaptar, e com essa habilidade, podemos fazer a diferença
              nas organizações e na nossa sociedade.
            </p>
          </div>
        </div>
      </div>

      <div className="boxBottom3">
          <p className="p15">
            Já pensou ser aquela pessoa que encontra soluções diferenciadas e com maestria?
          </p>
          <p className="p16">Está ao seu alcance ;)</p>
      </div>
      
      <div className="menuInvisible">
        <div className='menuInvisible2'>
        </div>
      </div>

      <div className="menu">
        <div className='menuButton1'>
            <div className='menuButtonDisable'>
              <FiChevronLeft className='menuButtonsDisable' />
            </div>
            <div className='menuButton'>
              <MdFmdGood className='menuButtons' onClick={() => { navigate('/menu');}} />
            </div>
            <div className='menuButton'>
              <FiChevronRight className='menuButtons'  onClick={() => { navigate('/Insight4');}}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

