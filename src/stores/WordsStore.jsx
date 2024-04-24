import {  action, makeAutoObservable, observable, } from "mobx";



class WordStore {
    @observable cards = []
    @observable  currentIndexId = 0
    @observable dictionarys = []
    loading = true
    error  = null
    showTranslation = false
    

    constructor(){
        makeAutoObservable(this);
    }
    
    getData =  action(() =>{
  return fetch('/api/words')
        .then(response =>{
           if(response.ok) {
    return response.json()
    }else{
        throw new Error("Упс")
    }})
    .then(data => {
        this.cards = data;
        this.loading= false;})
       
        .catch(error=>{
            this.error = error ;
            this.loading= false;
        })
    });

    AddCard = action((string)=>{
        return fetch("api/words/add",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
            english: string.english,
            transcription: string.transcription,
            russian: string.russian,
            tags: "",
            tags_json: "",
        }),
      });
    });

    nextCard = action(()=>{
        this.currentIndexId =  this.currentIndexId < this.cards.length-1 ? this.currentIndexId+1 : 0;
        this.showTranslation= false;
    });

    knowCard = action(()=>{
        this.currentIndexId =  this.currentIndexId < this.cards.length-1 ? this.currentIndexId+1 : 0;
        this.showTranslation= false;
    });

    dontKnow = action(()=>{
        this.dictionarys.push(this.cards[this.currentIndexId]);
       return alert("Вы добавили новое слово в словарь !");
    });

    @action addString = (string) => {
        return this.dictionarys.push(string);
    }
    @action removeString = (index)=>{
    return this.dictionarys.splice(index, 1)
  }
    @action updateString=(nextString)=>{
        const nexStr= this.dictionarys.map((dictionary) => 
        dictionary.id === nextString.id ? nextString : dictionary);
        return this.dictionarys = nexStr;
  }

 
  
}
export default  WordStore;
