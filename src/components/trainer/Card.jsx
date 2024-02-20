import './card.scss';
import React, {useState} from 'react';

function Card(props){

    const [change, setChange] = useState(false)

    const changeTranslation = () =>{
    setChange(!change);
    }

    return(
        <div className="card__content">
            <p className="word">{props.word}</p>
            <p className="transcription">{props.transcription}</p>
            {
                change  ? <p className='translation'>{props.translation}</p> 
                        : <button onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
            
        </div>
    )
}

export default Card;