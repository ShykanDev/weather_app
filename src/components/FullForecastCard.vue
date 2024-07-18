<template>
    <div v-if="data" class="w-full font-poppins">
        <!-- full current -->
        <div class="p-2">
            <div class="w-full bg-white shadow-md min-h-40 rounded-xl">
                <!-- City and time -->
                <div>
                    <h1 class="mb-3 text-3xl font-semibold text-slate-600">{{ data.location.name }}, {{
                        data.location.country }} </h1>
                    <h2 class="inline-block pl-1 pr-1 mb-3 text-lg text-right text-black rounded-2xl">{{
                        data.location.localtime }}</h2>
                </div>

                <!-- Full current weather -->
                <div class="flex flex-wrap gap-3 pb-4 justify-evenly">
                    <div class="flex flex-col items-center">
                        <h2 class="">{{ data.current.temp_c }}°C</h2>
                        <img :src="data.current.condition.icon" alt="">
                        <h2 class="inline-block pl-1 pr-1 text-white bg-sky-600 rounded-2xl">{{ data.current.condition.text }}</h2>
                    </div>
                    <div>
                        <h2 class="pl-1 pr-1 rounded-md bg-slate-100 text-slate-700">Wind: {{ data.current.wind_kph }} Kph</h2><v-icon name="bi-wind" scale="2.3" color="#14B8A6" />
                    </div>
                    <div>
                        <h2 class="pl-1 pr-1 rounded-md bg-slate-100 text-slate-600">Wind Degree: {{ data.current.wind_degree }}°</h2><v-icon name="gi-windsock" scale="2.3"
                            color="#ed6e00" />
                    </div>
                    <div>
                        <h2 class="pl-1 pr-1 rounded-md text-slate-700 bg-slate-100">Wind Direction: {{ data.current.wind_dir }}</h2><v-icon name="fa-compass" scale="2.3"
                            color="#004071" />
                    </div>
                    <div>
                        <h2 class="pl-1 pr-1 rounded-md text-slate-600 bg-slate-100">Humidity: {{ data.current.humidity }}%</h2><v-icon name="wi-humidity" scale="2.3"
                            color="#0dbefb" />
                    </div>
                    <div>
                        <h2 class="pl-1 pr-1 rounded-md bg-slate-100 text-slate-600">UV Index: {{ data.current.uv }}</h2><v-icon name="hi-sun" scale="2.3" color="#fb390d" />
                    </div>
                    <div>
                        <h2 class="pl-1 pr-1 mb-2 rounded-md bg-slate-100 text-slate-600">Feels Like: {{ data.current.feelslike_c }}°C</h2><v-icon name="io-body" scale="2.3"
                            color="#f7d2ff" />
                    </div>
                </div>
            </div>
        </div>

        <!-- vfor future days -->
         <div><h2 class="text-3xl font-semibold text-slate-600">Next Days</h2></div>
        <div class="flex gap-4 overflow-x-auto">
            <div v-for="day in data.forecast.forecastday" :key="day">
                <div class="flex flex-col items-center w-40 gap-3 pt-3 bg-white shadow-xl min-h-16 rounded-xl">
                    <div class="flex items-center">
                        <v-icon name="io-calendar-number" color="#7ac4ff" scale="1.6" />
                        <h2 class="inline-block pl-1 pr-1 rounded-md text-slate-600 bg-slate-100">{{ day.date }}</h2>
                    </div>
                    <div><img :src="day.day.condition.icon" alt="weather logo"><v-icon name="" color="#A9A9A9"
                            scale="1.6" /></div>
                    <div>
                        <h2>{{ day.day.condition.text }}</h2>
                    </div>
                    <div>
                        <h2>Max: {{ day.day.maxtemp_c }}°</h2><v-icon name="bi-thermometer-high" color="#FF4500"
                            scale="1.6" />
                    </div>
                    <div>
                        <h2>Min: {{ day.day.mintemp_c }}°</h2><v-icon name="bi-thermometer-low" color="#1E90FF"
                            scale="1.6" />
                    </div>
                    <div>
                        <h2>Avg: {{ day.day.avgtemp_c }}°</h2><v-icon name="bi-thermometer-half" color="#FFA500"
                            scale="1.6" />
                    </div>
                    <div>
                        <h2>Max Wind {{ day.day.maxwind_kph }}Kph</h2><v-icon name="gi-wind-slap" color="#285fff"
                            scale="1.6" />
                    </div>
                    <div>
                        <h2>SunRise: {{ day.astro.sunrise }}</h2><v-icon name="bi-sunrise" color="#FFD700" scale="1.6" />
                    </div>
                    <div>
                        <h2>SunSet: {{ day.astro.sunset }}</h2><v-icon name="bi-sunset" color="#FF8C00" scale="1.6" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import WeatherService from '@/services/WeatherService';
import { SystemValuesStore } from '@/store/SystemValuesStore';
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue';

const weatherService = new WeatherService();
const storeSysValues = SystemValuesStore();
const props = defineProps({
    id: {
        required: true,
        type: Number
    }
})

const api_key = 'd7576f684b9e4e6b88070938241707';
let data = ref();

const retrieveFullForecast = async (): Promise<any> => {
    await weatherService.fetchForecast(api_key, props.id)
    data.value = weatherService.getForecast().value;
    if (data.value) storeSysValues.setFullForecastDataLoaded(true);
}

onMounted(async () => retrieveFullForecast());

onBeforeUnmount(()=> storeSysValues.setFullForecastDataLoaded(false));
</script>

<style scoped></style>