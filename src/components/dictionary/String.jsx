import styles from './string.module.scss';
import React, { useState } from 'react';

function String({data,removeString, onChange}){
    

    const [edit,setEdit] =useState(false);



 const handleEdit = ()=>{
setEdit(!edit);
    }


    return( 
        <React.Fragment>
    <div key={data.id} className={styles.word__string}>
        {edit ? 
            <React.Fragment>
        <p className={styles.word}>{data.text.lingua}</p>
        <input  type="text"className={styles.word__edit} value={data.text.word} onChange={(e)=> { onChange({
            ...data.text, word: e.target.value,
        })}}  />
        <input type="text" className={styles.word__edit} value={data.text.transcription} onChange={(e)=> { onChange({
            ...data.text, transcription: e.target.value,
        })}} />
        <input  type="text" className={styles.word__edit} value={data.text.translation}  onChange={(e)=> { onChange({
            ...data.text,translation: e.target.value,
        })}}/>
        <button type='button' className={styles.btn__edit} onClick={()=> handleEdit(false)} >Сохранить</button>
        <button type='button' className={styles.btn__delete}  >Отменить</button>
        {console.log(data)};
        </React.Fragment>
        : 
    (<React.Fragment>
    <p className={styles.word}>{data.text.lingua}</p>
        <p className={styles.word}>{data.text.word}</p>
        <p className={styles.word}>{data.text.transcription}</p>
        <p className={styles.word}>{data.text.translation}</p>
        <button type='button' className={styles.btn__edit} onClick={handleEdit} > { edit ? "Сохранить" : "Редактировать"}</button>
        <button type='button' className={styles.btn__delete} onClick={() => removeString(data.id)}>Удалить</button>
        </React.Fragment>
        )}
    </div>
    <hr/>
    </React.Fragment>
    )



}

export default String;