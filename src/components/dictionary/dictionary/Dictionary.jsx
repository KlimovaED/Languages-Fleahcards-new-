import React from "react";
import styles from "./dictionaty.module.scss";
import { useState} from "react";
import String from "../string/String";
import { inject, observer } from "mobx-react";



const Dictionary= inject(['WordStore'])(observer(({WordStore})=>{
  const [formError, setFormError] = useState({ input1: false, input2: false, input3: false,input4:false });
  const [string,setString]= useState({ lingua:'',transcription:'',english:'',russian:'',id:`${(Math.random() + 1).toString(36).substring(7)}`,tags:'', tags_json:''});
let dictionarys = WordStore.dictionarys;


 

const saveData = async()=>{
WordStore.AddCard(string);
WordStore.addString(string);

}

const onChangeInputs =(e)=>{
  const value = e.target.value;
  setString({
    ...string,[e.target.name]:value
  })
    }


  let hasError; 
  const onSubmitForm = (event) =>{
  event.preventDefault();
  hasError = false;
  validateForm();
  if(hasError===false){
    saveData();
  }
  }

 const validateForm =()=>{
  if(string.english===""||string.lingua ===""||string.transcription ===""||string.russian ==="" ){
    hasError = true;
    }
  if(hasError === true){
    setFormError({ input1:string.lingua ==="",input2: string.english === "", input3: string.transcription === "", input4: string.russian=== "" });
  }
 }



 const handleChangeString =  (nextString) =>{
 WordStore.updateString(nextString);

  }



  const removeString = async (id,index) =>{
  await fetch("/api/words/" + id + "/delete",{
    method:'POST',});
    WordStore.removeString(index);
  }

    return (
      <section id="dictionary" className={styles.dictionary__container}>
        <h1 className={styles.dictionary__title}>Словарь</h1>
        <div  className={styles.dictionary__content}>
          <form onSubmit={onSubmitForm}  name="formWords" className={styles.dictionary__inputs} autoComplete="off">
            <select className={`${styles.lingua} ${formError.input1? styles.error : null}`} name="lingua" onChange={onChangeInputs} value={string.lingua} >
              <option value="" disabled>-- Выберите язык --</option>
              <option value="english">Английский</option>
              <option value="italian">Итальянский</option>
              <option value="french">Французский</option>
              <option value="chinese">Китайский</option>
              <option value="turkish">Турецкий</option>
            </select>
            <input
            name="english"
            value={string.english}
            onChange={onChangeInputs}
              className={`${styles.word} ${formError.input2? styles.error : null}`}
              placeholder="Введите слово"
              type="text"
            />
            <input
            value={string.transcription}
            name="transcription"
            onChange={onChangeInputs}
              className={`${styles.transcription} ${formError.input3? styles.error : null}`}
              type="text"
              placeholder="Введите транскрипцию"
            />
            <input
            value={string.russian}
            onChange={onChangeInputs}
            name="russian"
              className={`${styles.translation} ${formError.input4? styles.error : null}`}
              type="text"
              placeholder="Введите перевод"
            />
            <button className={styles.btn__save}  type="submit">
              Сохранить
            </button>
            <button className={styles.btn__reset} type="reset">
              Удалить
            </button>
          </form>
          <div id="dictionary__result" className={styles.result}>
            {
            dictionarys.map((dictionary)=>{
                return(
                  <String
                  array = {WordStore.cards}
                  data={dictionary}
                  key={dictionary.id}
                  onChange={handleChangeString}
                  removeString={removeString}/>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }));



export default Dictionary;
