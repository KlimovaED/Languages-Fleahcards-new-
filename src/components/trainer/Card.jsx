import './card.scss';
import React, {useState} from 'react';

function Card({data}){

    const [change, setChange] = useState(false);

    const changeTranslation = () =>{
    setChange(!change);
    }
    return(
        <div key={data.id} className="card__content">
            <p className="word">{data.word}</p>
            <p className="transcription">{data.transcription}</p>
            {
                change  ? <p className='translation'>{data.translation}</p> 
                        : <button onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
            
        </div>
    )
}

export default Card;