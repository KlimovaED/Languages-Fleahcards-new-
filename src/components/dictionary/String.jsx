import styles from './string.module.scss';
import React, { useState } from 'react';

function String({data,removeString }){

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
        <input  type="text"className={styles.word__edit} placeholder={data.text.word} />
        <input type="text" className={styles.word__edit} placeholder={data.text.transcription}/>
        <input  type="text" className={styles.word__edit} placeholder={data.text.translation}/>
        <button type='button' className={styles.btn__edit} >Сохранить</button>
        <button type='button' className={styles.btn__delete}>Отменить</button>
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