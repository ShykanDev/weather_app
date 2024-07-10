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
    getAForecast(){
        return this.forecast;
    }
    getFuture(){
        return this.future;
    }
    getMarine(){
        return this.marine;
    }

   async fetchCurrent(api_key:string,query:string,aqi='no'){
    try {
        const url =`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${query}&aqi=${aqi}`
        const res = await fetch(url);
        const json = await res.json();
        this.current.value = json;
    } catch (error) {
        console.log(`Error retrieving current weather ${error}`);
    }
   }

   async fetchAutocomplete(api_key:string,query:string){
    try {
        const url =`http://api.weatherapi.com/v1/search.json?key=${api_key}&q=${query}`
        const res = await fetch(url);
        const json = await res.json();
        this.autocomplete.value = json;
    } catch (error) {
        console.log(`Error retrieving autocomplete weather ${error}`);
    }
   }

}



export default WeatherService;