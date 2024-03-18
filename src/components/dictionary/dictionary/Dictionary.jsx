import React from "react";
import styles from "./dictionaty.module.scss";
import { useState} from "react";
import { useEffect } from "react";
import String from "../string/String";



function Dictionary(){
  const [datas, setDatas] = useState([]);
  const [words,setWords]= useState({ lingua:'',word:'',
  transcription:'',
  translation:''});

const getDates = async()=>{
try{
  await fetch("http://localhost:3001/words")
  .then(response => response.json())
  .then(data => setDatas(data));
}catch(error){
  console.log(error);
}
}

useEffect(()=>{
getDates();
},[]);

const saveData = async()=>{
await fetch("http://localhost:3001/words",{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    id:( Math.random().toString(36)),
    lingua: words.lingua,
      word: words.word,
      transcription: words.transcription,
      translation: words.translation
  }),
});
//getDates();
}


    const onChangeInputs =(e)=>{
      const value = e.target.value;
      setWords({
        ...words,[e.target.name]:value
      });
    }


 const onSubmitForm = (event) =>{
  event.preventDefault();
  let hasError = false; 
  if(words.word===""||words.lingua ===""||words.transcription ===""||words.translation ==="" ){
   hasError = true;
  }
  if(!hasError){
    saveData();
  }
 }

 const handleChangeString = async (nextString) =>{
  const newStr = datas.map((data) => 
    data.id === nextString.id ? nextString : data);
  setDatas(newStr);
 }


 const removeString = async (id) =>{
  //setDatas(datas.filter((data)=>data.id !== id));

  await fetch("http://localhost:3001/words/" + id,{
    method:'DELETE',});
    getDates();

 }

    return (
      <section id="dictionary" className={styles.dictionary__container}>
        <h1 className={styles.dictionary__title}>Словарь</h1>
        <div  className={styles.dictionary__content}>
          <form onSubmit={onSubmitForm} name="formWords" className={styles.dictionary__inputs} autoComplete="off">
            <select className={styles.lingua} name="lingua" onChange={onChangeInputs} value={words.lingua} >
              <option value="" disabled>-- Выберите язык --</option>
              <option value="english">Английский</option>
              <option value="italian">Итальянский</option>
              <option value="french">Французский</option>
              <option value="chinese">Китайский</option>
              <option value="turkish">Турецкий</option>
            </select>
            <input
            name="word"
            value={words.word}
            onChange={onChangeInputs}
              className={styles.word}
              placeholder="Введите слово"
              type="text"
            />
            <input
            value={words.transcription}
            name="transcription"
            onChange={onChangeInputs}
              className={styles.transcription}
              type="text"
              placeholder="Введите транскрипцию"
            />
            <input
            value={words.translation}
            onChange={onChangeInputs}
            name="translation"
              className={styles.translation}
              type="text"
              placeholder="Введите перевод"
            />
            <button className={styles.btn__save} type="submit">
              Сохранить
            </button>
            <button className={styles.btn__reset} type="reset">
              Удалить
            </button>
          </form>
          <div id="dictionary__result" className={styles.result}>
            {
            datas.map((data)=>{
                return(
                  <String
                  data={data}
                  key={data.id}
                  onChange={handleChangeString}
                  removeString={removeString}/>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }



export default Dictionary;
