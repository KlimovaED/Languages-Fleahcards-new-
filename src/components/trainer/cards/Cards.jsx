import React, {  useState} from 'react';
import './cards.scss';
//import Card from '../card/Card';
import { inject,observer } from 'mobx-react';



const FlashCard = inject(['WordStore'])(observer(({WordStore})=>{
const [dictionarys,setDictionary] =useState([]);
  const [showTranslation,setShowTranslation] = useState(false);
  const [count,setCount] = useState(0);


  const countWords = ()=>{
setCount((count)=> count+1);
  }
 


const knowCard=()=>{

};

const nextCard =()=>{

}

const dontKnowCard=()=>{

}

      return (
        <React.Fragment>
          <span className="counter-word">{+1} / {}</span>
    <div className='game__box'>
      
    </div>
    <div className='buttons'>
        <button type='button' onClick={dontKnowCard} className='btn'>Не знаю</button>
        <button type='button' onClick={nextCard} className='btn'>Пропустить</button>
        <button type='button' onClick={knowCard}  className='btn'>Знаю</button>
    </div>
    <p className='learned-words'> За эту тренировку вы выучили : {count} {count===1?"слово":""} {( count === 0||count > 4) ?"слов":""} {( count > 1 && count < 5 ) ?"слова":""} </p>
    </React.Fragment>
      );
    }));
    
    export default  FlashCard;

    /*<Card 
      showTranslation={showTranslation}
      setShowTranslation={setShowTranslation}
      data={currentCard}
      countWords={countWords}
      />*/