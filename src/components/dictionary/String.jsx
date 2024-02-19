import styles from './string.module.scss';
import React from 'react';

function String({data,removeString }){
    return( 
        <React.Fragment>
    <div key={data.id} className={styles.word__string}>
    <p className={styles.word}>{data.text.lingua}</p>
        <p className={styles.word}>{data.text.word}</p>
        <p className={styles.word}>{data.text.transcription}</p>
        <p className={styles.word}>{data.text.translation}</p>
        <button type='button' className={styles.btn__edit}>Редактировать</button>
        <button type='button' className={styles.btn__delete} onClick={() => removeString(data.id)}>Удалить</button>
    </div>
    <hr/>
    </React.Fragment>
    )
}

export default String;