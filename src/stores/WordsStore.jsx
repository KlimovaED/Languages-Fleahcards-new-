import {  action, makeAutoObservable, observable, runInAction } from "mobx";



class WordStore {
    @observable cards = []
     currendIndexId = 0
     currendCard = this.cards[this.currendIndexId]
    loading = false

    constructor(){
       makeAutoObservable(this);
    }
    
  @action.bound getData =  () =>{
    this.loading = true;
    fetch("/api/words")
        .then(response =>{
           if(response.ok) {
     response.json()
    }else{
        throw new Error("Упс");
    }})
    .then(data => console.log(data))  
        .catch(error=>console.error(error))
    }
}
export default  WordStore;
