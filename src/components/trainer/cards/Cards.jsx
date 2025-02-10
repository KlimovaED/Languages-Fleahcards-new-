import React, { useEffect, useState} from 'react';
import './cards.scss';
import Card from '../card/Card';


function FlashCard ({words}) {
const [dictionarys,setDictionary] =useState([]);
  const[currentCardId,setCurrentCardId] = useState(0);
  const[currentCard, setCurrentCard] = useState(null);
  const [showTranslation,setShowTranslation] = useState(false);
  const [count,setCount] = useState(0);

  const countWords = ()=>{
setCount((count)=> count+1);
  }

  useEffect(()=>{
      if (words && words.length > 0) {
          setCurrentCard(words[currentCardId] || null);
      }
  },[words,currentCardId])

const knowCard=()=>{
 setCurrentCardId((currentCardId)=>(currentCardId< words.length-1 ? currentCardId +1 : 0));
 setShowTranslation(false);
};

const nextCard =()=>{
  setCurrentCardId((currentCardId)=>(currentCardId< words.length-1 ? currentCardId +1 : 0));
  setShowTranslation(false);
}

const dontKnowCard=()=>{
try{
  fetch("http://localhost:3001/words",{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    id:( Math.random().toString(36)),
    lingua: currentCard.lingua,
      word: currentCard.word,
      transcription: currentCard.transcription,
      translation: currentCard.translation
  }),
})
alert("Вы добавили новое слово в свой словарь ! ");
}catch(error){
  console.log(error.message);
  alert("Произошла ошибка при добавлении...")
}
}

      return (
          <>
          {words.length > 0 ?
                  <React.Fragment>
            <span className="counter-word">{currentCardId+1} / {words.length}</span>
    <div className='game__box'>
        {currentCard && currentCard.word && (
      <Card 
      showTranslation={showTranslation}
      setShowTranslation={setShowTranslation}
      data={currentCard}
      countWords={countWords}
      />
        )}
    </div>
    <div className='buttons'>
        <button type='button' onClick={dontKnowCard} className='btn'>Не знаю</button>
        <button type='button' onClick={nextCard} className='btn'>Пропустить</button>
        <button type='button' onClick={knowCard}  className='btn'>Знаю</button>
    </div>
    <p className='learned-words'> За эту тренировку вы выучили : {count} {count===1?"слово":""} {( count === 0||count > 4) ?"слов":""} {( count > 1 && count < 5 ) ?"слова":""} </p>
    </React.Fragment> :
              <div>
                  Пока нет данных
              </div>
          }
          </>
      );
    }
    
    export default  FlashCard;
