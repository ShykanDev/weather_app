import { ref } from "vue";

class WeatherService {
    private current;
    private forecast;
    private autocomplete;
    private future;
    private marine;
    constructor(){
        this.current = ref([]);
        this.autocomplete = ref([]);
        this.forecast = ref([]);
        this.future = ref([]);
        this.marine = ref([]);
    }

    getCurrent(){
        return this.current;
    }
    getForecast(){
        return this.forecast;
    }
    getAutocomplete(){
        return this.autocomplete;
    }
    getFuture(){
        return this.future;
    }
    getMarine(){
        return this.marine;
    }

   async fetchCurrent(api_key:string,query:string,aqi='no'){
    try {
        const url =`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${query}&aqi=${aqi}&lang=es`
        const res = await fetch(url);
        const json = await res.json();
        this.current.value = json;
    } catch (error) {
        console.log(`Error retrieving current weather ${error}`);
    }
   }

   async fetchAutocomplete(api_key:string,query:string){
    try {
        const url =`http://api.weatherapi.com/v1/search.json?key=${api_key}&q=${query}&lang=es`
        const res = await fetch(url);
        const json = await res.json();
        this.autocomplete.value = json;
    } catch (error) {
        console.log(`Error retrieving autocomplete weather ${error}`);
    }
   }

   async fetchForecast(api_key:string,id:number, days=7, aqi='no', alerts='no'){
    try {
        const url =`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=id:${id}&days=${days}&aqui=${aqi}&alerts=${alerts}&lang=es`
        const res = await fetch(url);
        const json = await res.json();
        this.forecast.value = json;
    } catch (error) {
        console.log(`Error retrieving forecast weather ${error}`);
    }
   }
}



export default WeatherService;