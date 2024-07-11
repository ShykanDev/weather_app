<template>
    <div class="flex justify-center w-full mt-5 mb-5 bg-transparent">
        <div class="w-11/12 pt-4 overflow-auto bg-white shadow-2xl bg-opacity-55 min-w-8 rounded-2xl font-poppins backdrop-blur-md ">
            <div class="flex justify-around ">
                <h2>{{props.weatherInfo.location.name}}</h2>
                <h3>{{ props.weatherInfo.location.country}}</h3>
            </div>
            <div class="flex justify-evenly">
                <div class="flex items-center ">
                    <img class="min-w-11" :src="props.weatherInfo.current.condition.icon">
                </div>
              <div>
                <div class="flex items-center justify-between gap-3 ">
                    <h3 class="text-[40px] font-medium ">{{ props.weatherInfo.current.temp_c }}°</h3>
                    <h3 class="pl-1 pr-1 text-white bg-orange-500 rounded-2xl whitespace-nowrap">{{ props.weatherInfo.current.condition.text }}</h3>
                </div>
                <div class="flex items-center ">
                    <h3 class="font-bold">Wind: {{ props.weatherInfo.current.wind_kph }}</h3>
                    <div class="w-[2px] h-[14px] mr-1 ml-1 bg-orange-500"></div>
                    <h3>Humidity: {{ props.weatherInfo.current.humidity }}</h3>
                </div>
              </div>
            </div>
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