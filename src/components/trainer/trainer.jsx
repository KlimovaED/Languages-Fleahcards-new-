import FlashCard from './Cards'
import './trainer.scss';
import React from 'react';

class Trainer extends React.Component {
  render(){
    return (
    <section id='trainer' className="trainer__container">
    <div className='selection-info'>
    <select className='lingua'>
      <option disabled selected>-- Выберите язык --</option>
      <option value="english">Английский</option>
      <option value="italian">Итальянский</option>
      <option value="french">Французский</option>
      <option value="chinese">Китайский</option>
      <option value="turkish">Турецкий</option>
    </select>
    </div>
    <div className='game__container'>
    <FlashCard />
    </div>
    </section>

    );
  }
  }
  
  export default Trainer;