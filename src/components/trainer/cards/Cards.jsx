import React, { useEffect, useState} from 'react';
import './cards.scss';
import Card from '../card/Card';
import wordJSON from '../words.json';



function FlashCard () {
const [dictionarys,setDictionary] =useState([]);
const [cards,setCards] = useState(wordJSON);
  const[currentCardId,setCurrentCardId] = useState(0);
  const[currentCard, setCurrentCard] = useState({});
  const [showTranslation,setShowTranslation] = useState(false);
  const [count,setCount] = useState(0);


  const countWords = ()=>{
setCount((count)=> count+1);
  }
  
  

  useEffect(()=>{
    setCurrentCard(cards[currentCardId]);
  },[cards,currentCardId])

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
    lingua: currentCard.lingua,
    word: currentCard.word,
    transcription: currentCard.transcription,
    translation: currentCard.translation
  }]);
  console.log(dictionarys);
}

      return (
        <React.Fragment>
          <span className="counter-word">{currentCardId+1} / {cards.length}</span>
    <div className='game__box'>
      <Card 
      showTranslation={showTranslation}
      setShowTranslation={setShowTranslation}
      data={currentCard}
      countWords={countWords}
      />
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