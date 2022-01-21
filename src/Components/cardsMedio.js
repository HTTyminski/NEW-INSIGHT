import React, { useState }from 'react';

export default function CardMedio(props) {
    const [ toggle ,setToggle ] = useState(false);

    const ToggleSwith = () => {
        toggle ? setToggle(false) : setToggle(true);
        console.log(toggle);
    }

    return (
        <div className='divContainer1'>
            <div className='divContainer21' onClick={ToggleSwith}>
                <div className='circulo'>
                    <p className='p23'>{props.letra}</p>
                </div>
                <p className='p24'>{props.pergunta}</p>
            </div>
            <div className={toggle ? 'divContainer31' : 'none'}>
                <p className='p25'>{props.resposta}</p>
            </div>
        </div>
    )
}