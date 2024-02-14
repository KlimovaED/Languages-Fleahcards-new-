import React from 'react';
import './cards.scss'
import Card from './Card';

class FlashCard extends React.Component {
    render(){
      return (
        <React.Fragment>
    <div className='game__box'>
<Card
word="fly"
transcription="[flai]"
/>
    </div>
    <div className='buttons'>
        <button type='button' className='btn'>Не знаю</button>
        <button type='button' className='btn'>Пропустить</button>
        <button type='button' className='btn'>Знаю</button>
    </div>
    </React.Fragment>
      );
    }
    }
    
    export default FlashCard;