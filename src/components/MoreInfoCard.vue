<template>
    <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-around w-full font-sans font-semibold bg-opacity-60 backdrop-blur-md">
        <div class="relative flex justify-around w-full">
            <div class="flex-col"><v-icon scale="1.7" color="#FFA500" name="bi-sunrise" /><h3>{{ props.weatherInfo.forecast.forecastday[0].astro.sunrise }}</h3></div>
            <div class="flex-col"><v-icon scale="1.7" color="#FF5733" name="bi-sunset" /><h3>{{ props.weatherInfo.forecast.forecastday[0].astro.sunset }}</h3></div>
            <v-icon @click="storeWeatherSearchList.deleteCard(props.id)"  class="fixed top-1 right-1" name="md-deleteforever-round" color="#ff658a" scale="1.3" />
        </div>

        <div class="flex w-full pr-6 justify-evenly">
            <div class="flex-col "><v-icon scale="1.7" color="#00BFFF" name="bi-droplet-half" /><h3>{{ props.weatherInfo.current.humidity }}%</h3></div> 
            <div class="flex-col "><v-icon scale="1.7" color="#87CEEB" name="md-boy" /><h3> {{$t('mainView.moreInfoCard.realFeel')}} {{ props.weatherInfo.current.feelslike_c }}°</h3></div>
            <div class="flex-col "><v-icon scale="1.7" color="" name="wi-day-windy" /><h3> {{ props.weatherInfo.current.wind_kph }} km/h</h3></div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { WeatherCardSearchListStore } from '@/store/WeatherCardSearchListStore';
import { defineProps } from 'vue';

const storeWeatherSearchList = WeatherCardSearchListStore();

const props = defineProps({
    weatherInfo:{
        required:true,
        type:Object
    },
    id:{
        required:true,
        type:Number
    }
})
</script>

<style scoped></style>