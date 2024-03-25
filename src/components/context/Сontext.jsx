import { createContext, useEffect ,useState} from "react";

export const MyContext = createContext();

 export const ContextProvider =({children})=>{
    const [dictionarys,setDictionary] =useState([]);
    let [cards,setCards] = useState([]);
    const[currentCardId,setCurrentCardId] = useState(0);
    const [loading,setLoading] =useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
            fetch('/api/words')
            .then((response)=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error("Упс")
            }}
            )
            .then((response)=> {setCards(response)
            setLoading(false)})
            .catch(error=> setError(error))
    },[]);

    

    return(
        <MyContext.Provider value={{cards,dictionarys,setDictionary,currentCardId,setCurrentCardId,loading,error}}>
            {children}
        </MyContext.Provider>
    )
};

