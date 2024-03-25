import './card.scss';
import React, {useEffect, useRef, useContext} from 'react';
import { Fade } from "react-awesome-reveal";
import { MyContext } from '../../context/Сontext';



function Card({showTranslation,setShowTranslation,countWords}){
    const {cards,currentCardId} = useContext(MyContext);


    const btnRef = useRef(null);

useEffect(()=>{
    btnRef.current.focus();
},[currentCardId]);

    const changeTranslation = () =>{
    setShowTranslation(true);
    countWords();
    }
    return(
    <div key={cards[currentCardId].id} className="card__content">
            <p  className="word">{cards[currentCardId].english}</p>
            <p className="transcription">{cards[currentCardId].transcription}</p>
            {
                showTranslation  ? <Fade><p className='translation'>{cards[currentCardId].russian}</p></Fade>
                        : <button  ref={btnRef} onClick={changeTranslation} type='button' className='btn__result'>Показать</button>
            }
        </div>
    )
}

export default Card;