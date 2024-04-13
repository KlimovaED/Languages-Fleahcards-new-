import React, {  useEffect, useState} from 'react';
import './cards.scss';
import Card from '../card/Card';
import { inject,observer } from 'mobx-react';



const FlashCard = inject(['WordStore'])(observer(({WordStore})=>{
  useEffect(()=>{
    WordStore.getData();
  },[]);

  const [count,setCount] = useState(0);
 const cards = WordStore.cards;
 let index = WordStore.currentIndexId;
const loading = WordStore.loading;




  const countWords = ()=>{
setCount((count)=> count+1);
  }
 
  const setShowTranslation =()=>{
WordStore.showTranslation = true;
  }


      return (
        <React.Fragment>
          <span className="counter-word">{index+1} / {cards.length}</span>
    <div className='game__box'>
    {loading ? <img src="https://i.gifer.com/ZhKG.gif" className="loading"  alt="img"/> : WordStore.error ? <p className='error'>{WordStore.error}</p> :
<Card 
    showTranslation={WordStore.showTranslation}
    setShowTranslation={setShowTranslation}
    data={cards[index]}
    countWords={countWords}
    />
 }

    </div>
    <div className='buttons'>
        <button type='button' onClick={WordStore.dontKnow} className='btn'>Не знаю</button>
        <button type='button' onClick={WordStore.nextCard} className='btn'>Пропустить</button>
        <button type='button' onClick={WordStore.knowCard}  className='btn'>Знаю</button>
    </div>
    <p className='learned-words'> За эту тренировку вы выучили : {count} {count===1?"слово":""} {( count === 0||count > 4) ?"слов":""} {( count > 1 && count < 5 ) ?"слова":""} </p>
    </React.Fragment>
      );
    }));
    
    export default  FlashCard;

    /**/