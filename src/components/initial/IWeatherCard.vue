<template>
    <div class=" mt-5 mb-5 bg-transparent">
        <div :class="`${sysColorsStore.getCardWeatherBackgroundWhiteOrBlack} ${sysColorsStore.getTextWhiteOrBlack} ${sysColorsStore.getBackgroundShadowAndBorder}`" class="relative w-[80vw] pt-4 overflow-auto transition-colors duration-150 ease-out rounded-2xl font-poppins ">
            <!-- container city name and country -->
            <div class="flex justify-around">
                <h2 :class="sysColorsStore.getTextWhiteOrBlack" class=" md:text-3xl font-medium underline cursor-pointer">{{ props.locationName }}</h2>
                <h3 class="md:text-3xl">{{ props.countryName }}</h3>
            </div>
            <!-- container current weather -->
            <div class="flex flex-wrap items-center justify-evenly">
                <h3 class="text-[40px] font-medium">{{props.temperature}}°</h3>
                <h3 :class="[sysColorsStore.getColorBlueOrWhiteOnTheme, sysColorsStore.getTextWhiteOrBlue]" class="pl-1 pr-1 mr-1 rounded-2xl md:text-xl">{{ translatedWeatherCondition}}</h3>
            </div>
            <!-- container max and min -->
            <div class="relative flex flex-wrap items-center justify-center pr-3">
                <h3 class="md:text-lg">Max {{props.maxTemperature}}°</h3><v-icon scale="1.3" name="io-trending-up" />
                <v-icon scale="1.3" name="la-grip-lines-vertical-solid" />
                <h3 class="md:text-lg">
                <v-icon scale="1.3" name="io-trending-down" />Min {{props.minTemperature}}°</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SystemColorsStore } from '@/store/SystemColorsStore';
import { SystemValuesStore } from '@/store/SystemValuesStore';
import { computed, defineProps } from 'vue';

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

const translatedWeatherCondition = computed(() =>SystemValuesStore().getCurrentLang === 'es' ? props.weatherConditionEs : props.weatherConditionEn);
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>
