import './card.scss';
import React, {useEffect, useRef} from 'react';
import { Fade } from "react-awesome-reveal";


function Card({data,showTranslation,setShowTranslation,countWords}){

    const btnRef = useRef(null);

useEffect(()=>{
    btnRef.current.focus();
},[data]);

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
                        : <button  ref={btnRef} onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
        </div>
    )
}

export default Card;