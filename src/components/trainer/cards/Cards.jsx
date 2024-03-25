import React, { useContext, useState} from 'react';
import './cards.scss';
import Card from '../card/Card';
import { MyContext } from '../../context/Сontext';



function FlashCard () {
  const [showTranslation,setShowTranslation] = useState(false);
  const [count,setCount] = useState(0);

  const {cards,currentCardId,setCurrentCardId,dictionarys,setDictionary,loading,error} = useContext(MyContext);
 
  
  const countWords = ()=>{
setCount((count)=> count+1);
  }
  
  

const knowCard=()=>{
 setCurrentCardId((currentCardId)=>(currentCardId< cards.length-1 ? currentCardId +1 : 0));
 setShowTranslation(false);
};

const nextCard =()=>{
  setCurrentCardId((currentCardId)=>(currentCardId< cards.length-1 ? currentCardId +1 : 0));
  setShowTranslation(false);
}

const dontKnowCard=()=>{
  setDictionary([...dictionarys,{
    id:( Math.random().toString(36)),
    lingua: Object.keys(cards[currentCardId])[1],
    word: cards[currentCardId].english,
    transcription: cards[currentCardId].transcription,
    translation: cards[currentCardId].russian
  }]);
  alert("Вы добавили новое слово в свой словарь ! ");
}


      return (
        <React.Fragment>
          <span className="counter-word">{currentCardId+1} / {cards.length}</span>
    <div className='game__box'>
{loading ? <img src="https://i.gifer.com/ZhKG.gif" className="loading"  alt="img"/> : error ? <p className='error'>{error}</p> :
<Card 
    showTranslation={showTranslation}
    setShowTranslation={setShowTranslation}
    data={cards[currentCardId]}
    countWords={countWords}
    />
 }
    </div>
    <div className='buttons'>
        <button type='button' onClick={dontKnowCard} className='btn'>Не знаю</button>
        <button type='button' onClick={nextCard} className='btn'>Пропустить</button>
        <button type='button' onClick={knowCard}  className='btn'>Знаю</button>
    </div>
    <p className='learned-words'> За эту тренировку вы выучили : {count} {count===1?"слово":""} {( count === 0||count > 4) ?"слов":""} {( count > 1 && count < 5 ) ?"слова":""} </p>
    </React.Fragment>
      );
    }
    
    export default  FlashCard;
