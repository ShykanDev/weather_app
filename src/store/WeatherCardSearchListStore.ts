import { defineStore } from "pinia"

export const WeatherCardSearchListStore = defineStore("weatherCardSearchList", {
   state: ()=> {
       return{
           weatherCardSearchList: [] as any[],
       }    
   },
    actions: {
        addCard(item: any, id:number):void{
            item.id = id
            this.weatherCardSearchList.unshift(item)
        },
        deleteCard(id:number):void{
            this.weatherCardSearchList.splice(id, 1);
        },
        deleteAllCardsList():void{
            this.weatherCardSearchList = []
        }
    },
    getters:{
        getWeatherCardSearchList():Array<any> {
            return this.weatherCardSearchList
        },
        getWeatherCardSearchListReverse():Array<any> {
            return this.weatherCardSearchList.reverse()
        }
    },
    // persist:true
})
