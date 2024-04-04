import {  action, makeAutoObservable, observable, } from "mobx";



class WordStore {
    @observable cards = []
    @observable  currentIndexId = 0
    @observable dictionary = []
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
        this.dictionary.push(this.cards[this.currentIndexId]);
        console.log(this.dictionary);
    });

}
export default  WordStore;
