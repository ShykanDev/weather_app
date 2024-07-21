<template>
    <div class="flex justify-center w-full mt-5 mb-5 bg-transparent">
            <div :class="`${sysColorsStore.getCardWeatherBackgroundWhiteOrBlack} ${sysColorsStore.getTextWhiteOrBlack} ${sysColorsStore.getBackgroundShadowAndBorder}`" class="relative w-11/12 pt-4 overflow-auto transition-colors duration-150 ease-out rounded-2xl font-poppins"> 
            <!-- container city name and country -->
            <div class="flex justify-around ">
                <h2 @click="openFullForecast(props.weatherInfo.id)" :class="sysColorsStore.getTextWhiteOrBlack" class="text-lg font-medium underline cursor-pointer" >{{props.weatherInfo.location.name}}</h2>
                <h3>{{ props.weatherInfo.location.country}}</h3>
            </div>
            <!-- container current weather -->
                <div class="flex flex-wrap items-center justify-evenly">
                    <img class="self-start w-20" :src="getLargeIconUrl(props.weatherInfo.current.condition.icon)">
                    <h3 class="text-[40px] font-medium">{{ props.weatherInfo.current.temp_c }}°</h3>
                    <h3 :class="[sysColorsStore.getColorBlueOrWhiteOnTheme, sysColorsStore.getTextWhiteOrBlue]" class="pl-1 pr-1 mr-1 rounded-2xl">{{ props.weatherInfo.current.condition.text }}</h3>
                </div>
              <div>
                <!-- final container -->
            </div>
                <div class="relative flex flex-wrap items-center justify-center pr-3" v-if="props.weatherInfo.forecast.forecastday[0]">
                    <h3>Max: {{ props.weatherInfo.forecast.forecastday[0].day.maxtemp_c }}°</h3><v-icon scale="1.3" name="io-trending-up" />
                    <v-icon scale="1.3" name="la-grip-lines-vertical-solid" />
                    <h3 class=""><v-icon scale="1.3" name="io-trending-down" />Min: {{ props.weatherInfo.forecast.forecastday[0].day.mintemp_c}}°</h3>
                    <div @click="openMoreInfo" class="absolute bottom-0 right-0 z-40"> <DotMenu  /> </div>
                </div>
            <!-- <MoreInfoCard class="transition-opacity duration-300 ease-out" :weatherInfo="props.weatherInfo" :id="props.id" :style="{opacity: toggleMoreInfo ? 1 : 0, zIndex: toggleMoreInfo ? 1 : -10}" />  -->
             <Transition name="fade">
                 <MoreInfoCard v-show="toggleMoreInfo" class="transition-opacity duration-300 ease-out" :weatherInfo="props.weatherInfo" :id="props.id"  /> 
             </Transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import MoreInfoCard from '@/components/MoreInfoCard.vue'
import DotMenu from './animations/DotMenu.vue';
import { SystemValuesStore } from '@/store/SystemValuesStore';
import { useRouter } from 'vue-router';
import { SystemColorsStore } from '@/store/SystemColorsStore';

const storeSysValues = SystemValuesStore(); // Instance of SystemValuesStore

const props = defineProps({ //Props received from main result (all weather data)
    weatherInfo:{
        required:true,
        type:Object
    },
    id:{
        required:true,
        type:Number
    }
})

const getLargeIconUrl = (iconUrl: string) => iconUrl.replace("64x64", "128x128"); // Function to get the large icon url from the small icon url

let toggleMoreInfo = ref(false); // Variable to show or hide MoreInfoCard component R-E-P-L-A-C-E

const openMoreInfo = () => toggleMoreInfo.value = !toggleMoreInfo.value; // R-E-P-L-A-C-E Function to open or close MoreInfoCard component based on the click on DotMenu

const router = useRouter();
 // Open full forecast page on double click, if the user clicks on the dot menu it will not open the full forecast page
const openFullForecast = (id: number) => router.push({ name: 'fullForecast', params: { id: id } }); // Open full forecast page on double click, if the user clicks on the dot menu it will not open the full forecast page

const sysColorsStore = SystemColorsStore();

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: translateY(-5px); */
}
</style>