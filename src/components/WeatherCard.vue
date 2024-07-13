<template>
    <div class="flex justify-center w-full mt-5 mb-5 bg-transparent">
            <div class="relative w-11/12 pt-4 overflow-auto bg-white bg-opacity-25 shadow-2xl min-w-8 rounded-2xl font-poppins backdrop-blur-sm bself-end">
            <!-- container city name and country -->
            <div class="flex justify-around ">
                <h2>{{props.weatherInfo.location.name}}</h2>
                <h3>{{ props.weatherInfo.location.country}}</h3>
            </div>
            <!-- container current weather -->
                <div class="flex flex-wrap items-center justify-evenly">
                    <img class="self-start w-20" :src="getLargeIconUrl(props.weatherInfo.current.condition.icon)">
                    <h3 class="text-[40px] font-medium ">{{ props.weatherInfo.current.temp_c }}°</h3>
                    <h3 class="pl-1 pr-1 mr-1 text-white bg-sky-700 rounded-2xl ">{{ props.weatherInfo.current.condition.text }}</h3>
                </div>
              <div>
                <!-- final container -->
            </div>
                <div class="relative flex items-center justify-center " v-if="props.weatherInfo.forecast.forecastday[0]">
                    <h3>Max: {{ props.weatherInfo.forecast.forecastday[0].day.maxtemp_c }}°</h3><v-icon scale="1.3" name="io-trending-up" />
                    <v-icon scale="1.3" name="la-grip-lines-vertical-solid" />
                    <h3 class=""><v-icon scale="1.3" name="io-trending-down" />Min: {{ props.weatherInfo.forecast.forecastday[0].day.mintemp_c}}°</h3>
                    <div @click="openMoreInfo" class="absolute bottom-0 right-0 z-40" > <DotMenu  /> </div>
                    <!-- <v-icon @click="openMoreInfo" class="absolute bottom-1 2 right-1" scale="1.3" name="md-morevert" /> -->
                </div>
            <MoreInfoCard class="transition-opacity duration-300 ease-out" :weatherInfo="props.weatherInfo" :style="toggleMoreInfo ? 'opacity:1' : 'opacity:0'" /> 
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import MoreInfoCard from '@/components/MoreInfoCard.vue'
import DotMenu from './DotMenu.vue';

const props = defineProps({
    weatherInfo:{
        required:true,
        type:Object
    }
})

const getLargeIconUrl = (iconUrl: string) => iconUrl.replace("64x64", "128x128"); // Function to get the large icon url from the small icon url

let toggleMoreInfo = ref(false); // Variable to show or hide MoreInfoCard component

const openMoreInfo = () => toggleMoreInfo.value = !toggleMoreInfo.value; // Function to open or close MoreInfoCard component based on the click on DotMenu
</script>

<style scoped></style>