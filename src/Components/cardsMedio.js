import React, { useState }from 'react';

export default function CardMedio(props) {
    const [ toggle ,setToggle ] = useState(false);

    const ToggleSwith = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        <div className='divContainer1' onClick={ToggleSwith}>
             <div className={toggle ? 'divContainerFundo2' : 'divContainer21'}>
                <div className='circulo'>
                    <p className={toggle ? 'p23Circulo' : 'p23'}>{props.letra}</p>
                </div>
                <p className={toggle ? 'p24Active' : 'p24'}>{props.pergunta}</p>
            </div>
            <div className={toggle ? 'divContainer31' : 'none'}>
                <p className='p25'>{props.resposta}</p>
            </div>
        </div>
    )
}