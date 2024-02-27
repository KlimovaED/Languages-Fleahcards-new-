import './card.scss';
import React from 'react';
import  fadeIn  from 'react-animations'



function Card({data,showTranslation,setShowTranslation}){

    const changeTranslation = () =>{
    setShowTranslation(true)
    }
    return(
    <div key={data.id} className="card__content">
            <p className="word">{data.word}</p>
            <p className="transcription">{data.transcription}</p>
            {
                showTranslation  ? <p className='translation'>{data.translation}</p> 
                        : <button onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
        </div>

    )
}

export default Card;