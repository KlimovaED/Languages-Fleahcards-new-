import React from "react";
import styles from "./dictionaty.module.scss";
import { useState,useEffect,useContext} from "react";
import String from "../string/String";
import { MyContext } from '../../context/Сontext';





function Dictionary(){
  const [formError, setFormError] = useState({ input1: false, input2: false, input3: false,input4:false });
  const [datas, setDatas] = useState([]);
  const [words,setWords]= useState({ lingua:'',word:'',transcription:'',translation:''});
  const [loading,setLoading]= useState(false);
  const [error,setError] = useState(null);
  const {dictionarys} = useContext(MyContext);
  

console.log(datas);


useEffect(()=>{
setDatas(dictionarys)
},[dictionarys]);

const saveData = ()=>{
setLoading(true);
try{
fetch("http://localhost:3001/words",{
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
}catch(error){
  setError(error);
}
//getDates();
}

const onChangeInputs =(e)=>{
      const value = e.target.value;
      setWords({
        ...words,[e.target.name]:value
      });
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
  if(words.word===""||words.lingua ===""||words.transcription ===""||words.translation ==="" ){
    hasError = true;
    }
  if(hasError === true){
    setFormError({ input1:words.lingua ==="",input2: words.word === "", input3: words.transcription === "", input4: words.translation === "" });
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
 

  }

    return (
      <section id="dictionary" className={styles.dictionary__container}>
        <h1 className={styles.dictionary__title}>Словарь</h1>
        <div  className={styles.dictionary__content}>
          <form onSubmit={onSubmitForm}  name="formWords" className={styles.dictionary__inputs} autoComplete="off">
            <select className={`${styles.lingua} ${formError.input1? styles.error : null}`} name="lingua" onChange={onChangeInputs} value={words.lingua} >
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
              className={`${styles.word} ${formError.input2? styles.error : null}`}
              placeholder="Введите слово"
              type="text"
            />
            <input
            value={words.transcription}
            name="transcription"
            onChange={onChangeInputs}
              className={`${styles.transcription} ${formError.input3? styles.error : null}`}
              type="text"
              placeholder="Введите транскрипцию"
            />
            <input
            value={words.translation}
            onChange={onChangeInputs}
            name="translation"
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
          {loading ? 
          <img src="https://i.gifer.com/ZhKG.gif" className={styles.loading__img}  alt="img"/>
            : error ? <p className={styles.error__message}>Ошибка загрузки данных ...</p>: 
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
}
        </div>
      </section>
    );
  }



export default Dictionary;
