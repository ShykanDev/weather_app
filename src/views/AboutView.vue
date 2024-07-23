<template>
  <div class="">
    <MainLayout>
      <template #main>
        <div class="pb-20 overflow-x-hidden">
          <!-- Search Bar -->
          <div class="relative w-full">
            <input @click="handleQuery" v-model="query" @input="handleQuery"
              :class="`${sysColorsStore.getCardBackgroundWhiteOrBlack} ${sysColorsStore.getTextPlaceholderWhiteOrBlack}  ${sysColorsStore.getTextWhiteOrBlack} `"
              class="w-5/6 p-1 text-2xl text-center duration-500 shadow-md min-h-16 rounded-2xl focus:rounded-b-none transition-width focus:w-11/12 focus:outline-none"
              type="text" :placeholder="$t('mainView.placeholder')">
            <!-- Loader Circle -->
            <Transition name="fade-up">
              <div v-if="isLoading" class="absolute top-1 right-[10%] ">
                <LoaderCircle />
              </div>
            </Transition>
          </div>
          <!-- Autocomlete List Cards -->
          <div v-for="data in responseAutoComplete" :key="data.id">
            <AutoCompleteCard @click="handleCardClick(data.id)" v-if="query.length >= 1" :name="data.name"
              :country="data.country" :region="data.region" />
          </div>
          <!-- Main Message  -->
          <Transition name="fade-up">
            <div class="absolute left-[5%] right-[5%] translate-x[-50%] flex flex-col "
              v-if="query.length < 1 && storeWeatherSearchList.getWeatherCardSearchList.length < 1">
              <MainMessage />
            </div>
          </Transition>
          <div class="fixed bottom-0 left-0 right-0">
          <!-- List of Weather Cards Demo to Left -->
          <div class="overflow-auto scrollbar-hide w-[950%] ">
            <div class="flex pt-5 pb-5 animate-toLeft120 gap-3">
              <div v-for="data in SimulatedDataStore().getSimulatedWeatherData" :key="data.locationName"> 
                <IWeatherCard :countryName="data.countryName" :locationName="data.locationName"  :temperature="data.temperature" :weatherConditionEs="data.weatherConditionEs" :weatherConditionEn="data.weatherConditionEn" :maxTemperature="data.maxTemperature" :minTemperature="data.minTemperature" />
              </div>
            </div>
          </div>
          <!-- List of Weather Cards Demo to Right -->
          <div class="overflow-auto scrollbar-hide w-[918%] ">
            <div class="flex pt-5 pb-5 animate-toRight120 gap-3">
              <div v-for="data in SimulatedDataStore().getSimulatedWeatherData2" :key="data.locationName"> 
                <IWeatherCard :countryName="data.countryName" :locationName="data.locationName"  :temperature="data.temperature" :weatherConditionEs="data.weatherConditionEs" :weatherConditionEn="data.weatherConditionEn" :maxTemperature="data.maxTemperature" :minTemperature="data.minTemperature" />
              </div>
            </div>
          </div>
          </div>
          <!-- List of Weather Cards -->
          <TransitionGroup name="slide-fade" tag="div">
            <div v-for="(card, id) in storeWeatherSearchList.getWeatherCardSearchList" :key="card">
              <WeatherCard :weatherInfo="card" :id="id" />
            </div>
          </TransitionGroup>

        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import AutoCompleteCard from '@/components/AutoCompleteCard.vue';
import IAutocompleteCountry from '@/Interfaces/IAutoCompleteCountry';
import WeatherService from '@/services/WeatherService';
import WeatherCard from '@/components/WeatherCard.vue';
import LoaderCircle from '@/components/animations/LoaderCircle.vue';
import { Ref, ref } from 'vue';
import { WeatherCardSearchListStore } from '@/store/WeatherCardSearchListStore';
import { SystemValuesStore } from '@/store/SystemValuesStore';
import MainLayout from '@/layouts/MainLayout.vue';
import { SystemColorsStore } from '@/store/SystemColorsStore';
import MainMessage from '@/components/MainMessage.vue';
import IWeatherCard from '@/components/Initial/IWeatherCard.vue';
import { SimulatedDataStore } from '@/store/SimulatedDataStore';

const api_key = ref('d7576f684b9e4e6b88070938241707'); // API Key for the weather api
const weatherService = new WeatherService(); // instance of the weather service class

const query = ref(''); // query that user types in the search bar

//  timeout for api call 
let timeout = setTimeout(() => {
  console.log(query.value);
}, 500);

let responseAutoComplete: Ref<Array<IAutocompleteCountry>> = ref([]); // list of queries from the user that will be shown as a list of cards once the user click on the query result

const storeSysValues = SystemValuesStore();

// When the user types in the search bar it will run the fetchAutocomplete function to get the results from the api and display them in the card component
const handleQuery = (): void => {
  if (query.value != "") {
    storeSysValues.setIsTyping(true);
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      await weatherService.fetchAutocomplete(api_key.value, query.value);
      const finalData = weatherService.getAutocomplete();
      (query.value.length >= 1) ? responseAutoComplete.value = finalData.value : responseAutoComplete.value = []; // Clear the responseAutoComplete value when a new card is clicked
      storeSysValues.setIsTyping(false);
    }, 400)
  }
}

const storeWeatherSearchList = WeatherCardSearchListStore(); // WeatherCardSearchListStore

let isLoading = ref(false); // Loader variable to show or hide loader for handleCardClick function
const handleCardClick = async (id: number): Promise<void> => { // Handle fetching and storing weather forecast data based on card click events.
  isLoading.value = true; // Set the loader variable to true to show the loader until the data is fetched
  console.log(SystemValuesStore().getCurrentLang);

  if (id) {
    try {
      responseAutoComplete.value = [] // Clear the responseAutoComplete value when a new card is clicked
      query.value = "" // Clear the query value
      await weatherService.fetchForecast(api_key.value, id, SystemValuesStore().getCurrentLang) // Fetch the forecast data for the clicked card
      const weatherForecast = weatherService.getForecast();
      storeWeatherSearchList.addCard(weatherForecast.value, id);    // Once the data is fetched store it in the WeatherCardSearchListStore
      isLoading.value = false; // Set the loader variable to false to hide the loader once the data is finally fetched
    } catch (error) {
      console.log(`Error retrieving forecast weather ${error}`); // if there is an error log the error
    }
  }
}

const sysColorsStore = SystemColorsStore();


</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: translateY(-5px); */
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(2px);
}
</style>