import styles from './string.module.scss';
import React, { memo, useState } from 'react';

const String = memo(function String({data,removeString, onChange}){
    const [edit,setEdit] =useState(false);
    const [originalData, setOrigonalData] = useState(data);

    const handleEdit = ()=>{
    setOrigonalData(data);
    setEdit(true);
    }

    const saveEdit = async (id) => {
        setEdit(false);
        try {
            const updatedData = {
                english: data.english,
                transcription: data.transcription,
                russian: data.russian
            };
    
            console.log("Отправка данных на сервер:", updatedData);  // Для отладки
    
            const response = await fetch("/api/words/" +data.id+ "/update", {
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json',
                },
                body:  JSON.stringify({
            english: data.english,
            russian: data.russian,
            tags: data.tags,
            tags_json: data.tags_json,
            transcription: data.transcription,
        }),
            });
    
            if (response.ok) {
                const returnedData = await response.json();
            //   onChange(updatedData);
                console.log("Данные успешно обновлены:", returnedData);  // Для отладки
            } else {
                throw new Error("Не удалось обновить слово");
            }
        } catch (error) {
            console.error("Ошибка обновления:", error);  // Улучшенное логирование ошибок
        }
    }

    const handleCancel =(e)=>{
    onChange(originalData);
    setEdit(false);
    }



    return( 
        <React.Fragment>
    <div key={data.id} className={styles.word__string}>
        
        {edit ? 
            <React.Fragment>
        <p className={styles.word}>{data.lingua || Object.keys(data)[1]}</p>
        <input  type="text"className={styles.word__edit} value={data.english} onChange={(e)=> { onChange({
            ...data, english: e.target.value,
        })}}  />
        <input type="text" className={styles.word__edit} value={data.transcription} onChange={(e)=> { onChange({
            ...data, transcription: e.target.value,
        })}} />
        <input  type="text" className={styles.word__edit} value={data.russian}  onChange={(e)=> { onChange({
            ...data,russian: e.target.value,
        })}}/>
        <button type='button' className={styles.btn__edit} onClick={saveEdit} >Сохранить</button>
        <button type='button' className={styles.btn__delete} onClick={handleCancel} >Отменить</button>
        </React.Fragment>
        : 
    (<React.Fragment>
    <p className={styles.word}>{ data.lingua || Object.keys(data)[1]}</p>
        <p className={styles.word}>{data.english}</p>
        <p className={styles.word}>{data.transcription}</p>
        <p className={styles.word}>{data.russian}</p>
        <button type='button' className={styles.btn__edit} onClick={handleEdit} > { edit ? "Сохранить" : "Редактировать"}</button>
        <button type='button' className={styles.btn__delete} onClick={() => removeString(data.id)}>Удалить</button>
        </React.Fragment>
        )}
    </div>
    <hr/>
    </React.Fragment>
    )



})

export default String;