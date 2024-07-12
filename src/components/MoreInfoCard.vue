<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-around w-full bg-white bg-opacity-85 backdrop-blur-sm ">
        <div class="flex justify-around w-full">
            <div class="flex-col"><v-icon scale="1.2" name="bi-sunrise" /><h3>{{ props.weatherInfo.forecast.forecastday[0].astro.sunrise }}</h3></div>
            <div class="flex-col"><v-icon scale="1.2" name="bi-sunset" /><h3>{{ props.weatherInfo.forecast.forecastday[0].astro.sunset }}</h3></div>
        </div>
        <div class="flex w-full justify-evenly">
            <div class="flex-col "><v-icon scale="1.2" name="bi-droplet-half" /><h3>{{ props.weatherInfo.current.humidity }}%</h3></div> 
            <div class="flex-col "><v-icon scale="1.2" name="md-boy" /><h3>Real Feel: {{ props.weatherInfo.current.feelslike_c }}°</h3></div>
            <div class="flex-col "><v-icon scale="1.2" name="wi-day-windy" /><h3> {{ props.weatherInfo.current.wind_kph }} km/h</h3></div>
            <div></div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    weatherInfo:{
        required:true,
        type:Object
    }
})
</script>

<style scoped></style>