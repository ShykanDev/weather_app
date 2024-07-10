import { defineStore } from "pinia"

export const WeatherCardSearchListStore = defineStore("weatherCardSearchList", {
   state: ()=> {
       return{
           weatherCardSearchList: [] as any[],
       }    
   },
    actions: {
        addCard(item: any) {
            this.weatherCardSearchList.push(item)
        }
    },
    getters:{
        getWeatherCardSearchList():Array<any> {
            return this.weatherCardSearchList
        }
    }
})
