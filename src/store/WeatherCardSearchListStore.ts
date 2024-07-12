import { defineStore } from "pinia"

export const WeatherCardSearchListStore = defineStore("weatherCardSearchList", {
   state: ()=> {
       return{
           weatherCardSearchList: [] as any[],
       }    
   },
    actions: {
        addCard(item: any):void{
            this.weatherCardSearchList.push(item)
        },
        deleteCard(item: any):void{
            this.weatherCardSearchList.slice(this.weatherCardSearchList.indexOf(item), 1);
        },
        deleteAllCardsList():void{
            this.weatherCardSearchList = []
        }
    },
    getters:{
        getWeatherCardSearchList():Array<any> {
            return this.weatherCardSearchList
        }
    },
    persist:true
})
