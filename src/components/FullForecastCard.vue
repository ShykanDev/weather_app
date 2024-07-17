<template>
    <div class="w-full font-poppins">
        <!-- full current -->
    <div class="p-2">
         <div class="w-full bg-white shadow-md min-h-40 rounded-xl">
            <!-- City and time -->
            <div>
                <h1 class="mb-3 text-3xl font-semibold text-slate-600">Tizayuca, Mexico</h1>
                <h2 class="inline-block pl-1 pr-1 mb-3 text-lg text-right text-black rounded-2xl">2024-07-17 5:33</h2>
            </div>
            <!-- Full current weather -->
             <div class="flex flex-wrap gap-3 pb-4 justify-evenly" >
                <div><h2 class="text-3xl font-medium">23.9°C</h2></div>
                <div class="flex flex-col items-center"><h2 class="inline-block pl-1 pr-1 text-lg font-medium text-white bg-sky-600 rounded-2xl">Sunny</h2><img src="https://openweathermap.org/img/wn/01d.png" alt=""></div>
                <div><h2>Wind: 2.5 Kph</h2><v-icon name="bi-wind" scale="1.9" color="#0094d0"/></div>
                <div><h2>Wind Degree: 180°</h2><v-icon name="gi-windsock" scale="1.9" color="#ed6e00" /></div>
                <div><h2>Wind Direction: WSW</h2><v-icon name="fa-compass" scale="1.9" color="#004071" /></div>
                <div><h2>Humidity: 60%</h2><v-icon name="wi-humidity" scale="1.9" color="#0dbefb" /></div>
                <div><h2>UV Index: 1.0</h2><v-icon name="hi-sun" scale="1.9" color="#fb390d" /></div>
                <div><h2>Feels Like: 23.9 °C</h2><v-icon name="io-body" scale="1.9" color="#dea1ff" /></div>
             </div>
         </div>
    </div>

        <!-- vfor future days -->
        <div>
            <div class="flex flex-col items-center w-40 gap-3 shadow-md bg-slate-50 min-h-16 rounded-xl">
                <div><h2>2024-07-18</h2><v-icon name="bi-calendar-minus-fill"/></div>
                <div><img src="https://openweathermap.org/img/wn/01d.png" alt=""><v-icon name=""/></div>
                <div><h2>Partly Cloudy</h2></div>
                <div><h2>Max: 23.9°</h2><v-icon name="bi-thermometer-high"/></div>
                <div><h2>Min: 13.6°</h2><v-icon name="bi-thermometer-low"/></div>
                <div><h2>Avg: 17.5°</h2><v-icon name="bi-thermometer-half"/></div>
                <div><h2>Max Wind 9.7 Kph</h2><v-icon name="gi-wind-slap"/></div>
                <div><h2>SunRise: 5:33</h2><v-icon name="bi-sunrise"/></div>
                <div><h2>SunSet: 6:26</h2><v-icon name="bi-sunset"/></div>
        </div>
    </div>

    </div>
</template>

<script lang="ts" setup>
import WeatherService from '@/services/WeatherService';
import { defineProps, onMounted, ref } from 'vue';
const weatherService = new WeatherService();

const props = defineProps({
    id:{
       required:true,
        type:Number
    }
})


const api_key = '258e43a114834b64b6f23707241007';
let data = ref();
const retrieveFullForecast = async():Promise<any> => {
    await weatherService.fetchForecast(api_key,props.id)
   data.value = weatherService.getForecast().value;
   console.log(data.value);
   
   
}

// onMounted(async()=> retrieveFullForecast());
</script>

<style scoped>

</style>