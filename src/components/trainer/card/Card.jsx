import { set } from 'mobx';
import './card.scss';
import React from 'react';
import { Fade } from "react-awesome-reveal";


function Card({data,showTranslation,setShowTranslation,countWords}){

    const changeTranslation = () =>{
    setShowTranslation();
    countWords();
    }
    return(
    <div key={data.id} className="card__content">
            <p  className="word">{data.english}</p>
            <p className="transcription">{data.transcription}</p>
            {
                showTranslation  ? <Fade><p className='translation'>{data.russian}</p></Fade>
                        : <button  onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
        </div>
    )
}

export default Card;