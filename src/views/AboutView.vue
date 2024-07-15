<template>
  <div class="pt-16 bg-gradient-to-r from-slate-50 to-sky-50 h-lvh">
    <!-- top bar and side bar container -->
     <div>
       <HeaderBar class="fixed top-0"/>
     </div>
     <!-- current time -->
    <h2 class="fixed bottom-0 right-0 z-50 inline-block pl-2 pr-2 mb-2 mr-3 rounded-full bg-slate-700 text-slate-100 ">{{ time }}</h2>
    <!-- Search Bar -->
    <div  class="w-full " >
      <input  @click="handleQuery" v-model="query" @input="handleQuery" class="w-5/6 p-1 text-2xl text-center duration-500 shadow-md min-h-16 rounded-2xl focus:rounded-b-none transition-width focus:w-11/12 focus:outline-none " type="text" placeholder="Buscar">
    </div>
    <!-- Loader Circle -->
     <Transition name="fade">
       <div v-if="isLoading" class="flex justify-center mt-4">
         <LoaderCircle />
        </div>
      </Transition>
    <!-- Autocomlete List Cards -->
    <div  v-for="data in responseAutoComplete" :key="data.id">
      <AutoCompleteCard class="z-30" @click="handleCardClick(data.id)" v-if="query.length >= 1" :name="data.name" :country="data.country" :region="data.region"/>
  </div>
  <!-- List of Weather Cards -->
  <TransitionGroup name="slide-fade" tag="div"><div v-for="card in weatherCardsList" :key="card"><WeatherCard :weatherInfo="card" /></div></TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import AutoCompleteCard from '@/components/AutoCompleteCard.vue';
import IAutocompleteCountry from '@/Interfaces/IAutoCompleteCountry';
import WeatherService from '@/services/WeatherService';
import WeatherCard from '@/components/WeatherCard.vue';
import LoaderCircle from '@/components/LoaderCircle.vue';
import { computed,  Ref, ref } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import { WeatherCardSearchListStore } from '@/store/WeatherCardSearchListStore'; 
import { SystemValuesStore } from '@/store/SystemValuesStore';

const api_key = ref('258e43a114834b64b6f23707241007'); // API Key for the weather api
const weatherService = new WeatherService(); // instance of the weather service class

const date = new Date().toLocaleString('en-us', { dateStyle: 'full' }); // date to show at the top of the page

const time = new Date().toLocaleTimeString('en-us', { timeStyle: 'short' }); // time to show at the top of the page only showing hours and minutes and not pm or am

const query = ref(''); // query that user types in the search bar

//  timeout for api call 
let timeout = setTimeout(() => {
  console.log(query.value);
}, 500);

let responseAutoComplete: Ref<Array<IAutocompleteCountry>> = ref([]); // list of queries from the user that will be shown as a list of cards once the user click on the query result

  const storeSysValues = SystemValuesStore();

// When the user types in the search bar it will run the fetchAutocomplete function to get the results from the api and display them in the card component
const handleQuery = () => {
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
const handleCardClick = async(id: number) => { // Handle fetching and storing weather forecast data based on card click events.
  isLoading.value = true; // Set the loader variable to true to show the loader until the data is fetched
  if (id) {
    try {
      responseAutoComplete.value = [] // Clear the responseAutoComplete value when a new card is clicked
      query.value = "" // Clear the query value
      await weatherService.fetchForecast(api_key.value, id) // Fetch the forecast data for the clicked card
      const weatherForecast =  weatherService.getForecast();
      storeWeatherSearchList.addCard(weatherForecast.value);    // Once the data is fetched store it in the WeatherCardSearchListStore
      isLoading.value = false; // Set the loader variable to false to hide the loader once the data is finally fetched
    } catch (error) {
      console.log(`Error retrieving forecast weather ${error}`); // if there is an error log the error
    }
  }
}

// list of weather cards when user click on query result
const weatherCardsList = computed(() => storeWeatherSearchList.getWeatherCardSearchList.slice().reverse());

</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  /* transform: translateY(-5px); */
}

</style>