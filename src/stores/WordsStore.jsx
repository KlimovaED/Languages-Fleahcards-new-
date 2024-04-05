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
}
export default  WordStore;
