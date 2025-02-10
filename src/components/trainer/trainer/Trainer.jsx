import FlashCard from '../cards/Cards'
import './trainer.scss';
import React, {useEffect, useState} from 'react';
import wordJSON from '../words.json';

function Trainer() {
const [currentLingua, setCurrentLingua] = useState(localStorage.getItem('currentLingua') || 'english');
const  [words, setWords] = useState([]);
useEffect(()=>{
    setWords(wordJSON.filter((word) => word.lingua === currentLingua));
},[currentLingua]);


const onChangeValueHandler = (e)=>{
    const value = e.target.value;
    setCurrentLingua(value);
    localStorage.setItem('currentLingua', value);
}

    return (
        <main id='trainer' className="trainer__container">
            <div className='selection-info'>
                <select className='lingua' value={currentLingua} onChange={onChangeValueHandler} >
                    <option value="" disabled>-- Выберите язык --</option>
                    <option value="english">Английский</option>
                    <option value="italian">Итальянский</option>
                    <option value="french">Французский</option>
                    <option value="chinese">Китайский</option>
                    <option value="turkish">Турецкий</option>
                </select>
            </div>
            <div className='game__container'>
                <FlashCard words={words} />
            </div>
        </main>

    );
}

export default Trainer;
