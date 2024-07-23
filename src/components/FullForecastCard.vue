<template>
    <Transition name="slide">
        <div v-if="data">
            <RouterLink v-if="data" :to="{ name: 'home' }">
                <div :class="sysColorsStore.getTextWhiteOrBlack" class="flex items-center"><v-icon
                        name="bi-arrow-left-square" scale="1.3" />
                    <p>{{ $t('fullForecast.backToHome') }}</p>
                </div>
            </RouterLink>
        </div>
    </Transition>
    <Transition name="fade">
        <div v-if="data" class="w-full font-poppins">
            <!-- full current -->
            <div class="p-2 overflow-x-auto pb-9">
                <div :class="`${sysColorsStore.getCardWeatherBackgroundWhiteOrBlack} ${sysColorsStore.getBackgroundShadowAndBorder}`"
                    class="flex flex-col w-full transition-colors duration-300 ease-out shadow-sm min-h-40 rounded-xl">
                    <!-- City and time -->
                    <div>
                        <h1 :class="sysColorsStore.getTextWhiteOrBlack" class="mb-3 text-3xl font-semibold sm:text-4xl">
                            {{ data.location.name }}, {{
                                data.location.country }} </h1>
                    </div>

                    <!-- Full current weather -->
                    <div class="flex flex-col flex-wrap gap-3 pb-4 justify-evenly">
                        <div :class="sysColorsStore.getTextWhiteOrBlack" class="flex flex-col items-center">
                            <h2 class="text-2xl">{{ data.current.temp_c }}°C</h2>
                            <img :src="data.current.condition.icon" alt="">
                            <h2 :class="[sysColorsStore.getColorBlueOrWhiteOnTheme, sysColorsStore.getTextWhiteOrBlue]"
                                class="inline-block pl-1 pr-1 text-lg rounded-2xl">{{
                                    data.current.condition.text }}</h2>
                        </div>
                        <div class="flex justify-evenly sm:flex-col ">
                            <!-- first section -->
                            <div :class="sysColorsStore.getTextWhiteOrBlack"
                                class="flex flex-col justify-evenly sm:justify-around sm:flex sm:flex-row">
                                <div>
                                    <h2 class="pl-1 pr-1 text-sm rounded-md">{{ $t('fullForecast.wind')
                                        }}:
                                        {{ data.current.wind_kph }}kph</h2><v-icon name="bi-wind" scale="2.3"
                                        color="#14B8A6" />
                                </div>
                                <div>
                                    <h2 class="pl-1 pr-1 text-sm rounded-md">{{
                                        $t('fullForecast.windDegree')
                                    }}: {{ data.current.wind_degree }}°</h2><v-icon name="gi-windsock" scale="2.3"
                                        color="#ed6e00" />
                                </div>
                                <div>
                                    <h2 class="pl-1 pr-1 text-sm rounded-md ">{{
                                        $t('fullForecast.windDirection') }}: {{ data.current.wind_dir }}</h2><v-icon
                                        name="fa-compass" scale="2.3" :color="sysColorsStore.getColorWhiteOrBlueOnTheme" />
                                </div>
                            </div>

                            <!-- second section -->
                            <div :class="sysColorsStore.getTextWhiteOrBlack"
                                class="flex flex-col justify-evenly sm:justify-around sm:flex sm:flex-row">
                                <div>
                                    <h2 class="pl-1 pr-1 text-sm rounded-md">{{
                                        $t('fullForecast.humidity')
                                    }}: {{ data.current.humidity }}%</h2><v-icon name="wi-humidity" scale="2.3"
                                        color="#0dbefb" />
                                </div>
                                <div>
                                    <h2 class="pl-1 pr-1 text-sm rounded-md">{{
                                        $t('fullForecast.uvIndex')
                                    }}: {{ data.current.uv }}</h2><v-icon name="hi-sun" scale="2.3"
                                        color="#fb390d" />
                                </div>
                                <div>
                                    <h2 class="pl-1 pr-1 mb-2 text-sm rounded-md">{{
                                        $t('fullForecast.feelsLike') }}: {{ data.current.feelslike_c }}°C</h2><v-icon
                                        name="io-body" scale="2.3" :color="sysColorsStore.getColorWhiteOrBlueOnTheme" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- vfor future days -->
            <div>
                <h2 :class="sysColorsStore.getTextWhiteOrBlack" class="text-2xl font-semibold pb-3">{{
                    $t('fullForecast.nextDays.nextDays') }}:</h2>
            </div>
            <div class="flex gap-4 overflow-x-auto">
                <div v-for="day in data.forecast.forecastday.slice(1)" :key="day">
                    <div :class="`${sysColorsStore.getCardWeatherBackgroundWhiteOrBlack} ${sysColorsStore.getBackgroundShadowAndBorder} ${sysColorsStore.getTextWhiteOrBlack}`"
                        class="flex flex-col items-center w-40 gap-3 pt-3 shadow-xl sm:w-52 min-h-16 rounded-xl">
                        <div class="flex items-center">
                            <v-icon name="io-calendar-number" :color="sysColorsStore.getColorWhiteOrBlueOnTheme" scale="1.5" />
                            <h2 class="inline-block pl-1 pr-1 text-base leading-tight rounded-md ">{{
                                day.date.split('-').reverse().join('/') }}</h2>
                        </div>
                        <div><img :src="day.day.condition.icon" alt="weather logo"><v-icon name="" color="#A9A9A9"
                                scale="1.9" /></div>
                        <div>
                            <h2 :class="[sysColorsStore.getColorBlueOrWhiteOnTheme, sysColorsStore.getTextWhiteOrBlue]" class="inline-block pl-2 pr-2 m-1 rounded-2xl">{{
                                day.day.condition.text }}</h2>
                        </div>
                        <div>
                            <h2>{{ $t('fullForecast.nextDays.max') }}: {{ day.day.maxtemp_c }}°</h2><v-icon
                                name="bi-thermometer-high" color="#FF4500" scale="1.9" />
                        </div>
                        <div>
                            <h2>{{ $t('fullForecast.nextDays.min') }}: {{ day.day.mintemp_c }}°</h2><v-icon
                                name="bi-thermometer-low" color="#1E90FF" scale="1.9" />
                        </div>
                        <div>
                            <h2>{{ $t('fullForecast.nextDays.avg') }}: {{ day.day.avgtemp_c }}°</h2><v-icon
                                name="bi-thermometer-half" color="#FFA500" scale="1.9" />
                        </div>
                        <div>
                            <h2>{{ $t('fullForecast.nextDays.maxWind') }}: {{ day.day.maxwind_kph }}Kph</h2><v-icon
                                name="gi-wind-slap" color="#008fff" scale="1.9" />
                        </div>
                        <div>
                            <h2>{{ $t('fullForecast.nextDays.sunrise') }}: {{ day.astro.sunrise }}</h2><v-icon
                                name="bi-sunrise" color="#FFD700" scale="1.9" />
                        </div>
                        <div>
                            <h2>{{ $t('fullForecast.nextDays.sunset') }}: {{ day.astro.sunset }}</h2><v-icon
                                name="bi-sunset" color="#FF8C00" scale="1.9" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import WeatherService from '@/services/WeatherService';
import { SystemColorsStore } from '@/store/SystemColorsStore';
import { SystemValuesStore } from '@/store/SystemValuesStore';
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

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
    await weatherService.fetchForecast(api_key, props.id,SystemValuesStore().getCurrentLang)
    data.value = weatherService.getForecast().value;
    if (data.value) storeSysValues.setFullForecastDataLoaded(true);
}

const sysColorsStore = SystemColorsStore();

onMounted(async () => retrieveFullForecast());

onBeforeUnmount(() => storeSysValues.setFullForecastDataLoaded(false));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-70px);
}
</style>