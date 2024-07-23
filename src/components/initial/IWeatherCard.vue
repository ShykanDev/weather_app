<template>
    <div class="flex justify-center w-full mt-5 mb-5 bg-transparent">
        <div :class="`${sysColorsStore.getCardWeatherBackgroundWhiteOrBlack} ${sysColorsStore.getTextWhiteOrBlack} ${sysColorsStore.getBackgroundShadowAndBorder}`" class="relative min-w-80 w-11/12 pt-4 overflow-auto transition-colors duration-150 ease-out rounded-2xl font-poppins">
            <!-- container city name and country -->
            <div class="flex justify-around">
                <h2 :class="sysColorsStore.getTextWhiteOrBlack" class="text-lg font-medium underline cursor-pointer">{{ props.locationName }}</h2>
                <h3>{{ props.countryName }}</h3>
            </div>
            <!-- container current weather -->
            <div class="flex flex-wrap items-center justify-evenly">
                <img class="self-start w-20" src="https://openweathermap.org/img/wn/01d@2x.png">
                <h3 class="text-[40px] font-medium">{{props.temperature}}°</h3>
                <h3 :class="[sysColorsStore.getColorBlueOrWhiteOnTheme, sysColorsStore.getTextWhiteOrBlue]" class="pl-1 pr-1 mr-1 rounded-2xl">{{props.weatherConditionEs}}</h3>
            </div>
            <!-- container max and min -->
            <div class="relative flex flex-wrap items-center justify-center pr-3">
                <h3>Max: 30°</h3><v-icon scale="1.3" name="io-trending-up" />
                <v-icon scale="1.3" name="la-grip-lines-vertical-solid" />
                <h3><v-icon scale="1.3" name="io-trending-down" />Min: 20°</h3>
                <div  class="absolute bottom-0 right-0 z-10"> <DotMenu /> </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SystemColorsStore } from '@/store/SystemColorsStore';
import DotMenu from '../animations/DotMenu.vue';
import { defineProps } from 'vue';

const sysColorsStore = SystemColorsStore();
const props = defineProps({
        locationName: {
            type: String,
            required: true,
            default: 'Beijing'
        },
        countryName: {
            type: String,
            required: true,
            default: 'China'
        },
        weatherIconUrl: {
            type: String,
            required: true,
            default: 'https://openweathermap.org/img/wn/01d@2x.png'
        },
        temperature: {
            type: Number,
            required: true,
            default: 20
        },
        weatherConditionEs: {
            type: String,
            required: true,
            default: 'Soleado'
        },
        weatherConditionEn: {
            type: String,
            required: false,
            default: 'Sunny'
        },
        maxTemperature: {
            type: Number,
            required: true,
            default: 30
        },
        minTemperature: {
            type: Number,
            required: true,
            default: 20

        }
})        

</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>


<style scoped>

</style>