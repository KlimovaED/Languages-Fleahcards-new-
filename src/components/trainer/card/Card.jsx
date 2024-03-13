import './card.scss';
import React  from 'react';
import { Fade } from "react-awesome-reveal";


function Card({data,showTranslation,setShowTranslation,countWords}){

    const changeTranslation = () =>{
    setShowTranslation(true);
    countWords();
    }
    return(
    <div key={data.id} className="card__content">
            <p  className="word">{data.word}</p>
            <p className="transcription">{data.transcription}</p>
            {
                showTranslation  ? <Fade><p className='translation'>{data.translation}</p></Fade>
                        : <button onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
        </div>
    )
}

export default Card;