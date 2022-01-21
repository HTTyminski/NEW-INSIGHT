import React, { useState }from 'react';

export default function CardMedio(props) {


    return (
        <div className='divContainer1'>
            <div className='divContainer21'>
                <div className='circulo'>
                    <p className='p23'>{props.letra}</p>
                </div>
                <p className='p24'>{props.pergunta}</p>
            </div>
        </div>
    )
}