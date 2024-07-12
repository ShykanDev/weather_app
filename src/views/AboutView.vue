<template>
  <div class="pt-16 bg-gradient-to-b from-sky-50 to-slate-50 min-h-dvh">
    <HeaderBar/>
    <h2 class="fixed bottom-0 right-0 z-30 inline-block pl-2 pr-2 mb-2 mr-3 rounded-full bg-slate-700 text-slate-100 ">{{ time }}</h2>
    <!-- Search Bar -->
    <div  class="mt-5">
      <input  @click="handleQuery" v-model="query" @input="handleQuery"
      class="w-5/6 p-1 text-2xl text-center duration-500 shadow-md min-h-16 rounded-3xl focus:rounded-b-none transition-width focus:w-11/12 focus:outline-none "
      type="text" :placeholder="placeholderValue">
    </div>
    <!-- Loader Circle -->
    <div v-if="isLoading" class="flex justify-center mt-4">
      <LoaderCircle />
    </div>
    <!-- Autocomlete List Cards -->
    <div  v-for="data in responseAutoComplete" :key="data.id">
      <AutoCompleteCard @click="handleCardClick(data.id)" v-if="query.length >= 1" :name="data.name" :country="data.country" :region="data.region"/>
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
import { UserPreferencesStore } from '@/store/UserPreferencesStore';

const api_key = ref('258e43a114834b64b6f23707241007'); // API Key for the weather api
const weatherService = new WeatherService(); // instance of the weather service class

const date = new Date().toLocaleString('en-us', { dateStyle: 'full' }); // date to show at the top of the page

const time = new Date().toLocaleTimeString('en-us', { timeStyle: 'short' }); // time to show at the top of the page only showing hours and minutes and not pm or am

const query = ref(''); // the query that the user types in the search bar

//  timeout for api call 
let timeout = setTimeout(() => {
  console.log(query.value);
}, 500);

let responseAutoComplete: Ref<Array<IAutocompleteCountry>> = ref([]); // list of queries from the user that will be shown as a list of cards once the user click on the query result

// When the user types in the search bar it will run the fetchAutocomplete function to get the results from the api and display them in the card component
const handleQuery = () => {
  if (query.value != "") {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      await weatherService.fetchAutocomplete(api_key.value, query.value);
      const finalData = weatherService.getAutocomplete();
      (query.value.length >= 1) ? responseAutoComplete.value = finalData.value : responseAutoComplete.value = [];
    }, 400)
  }
}

const storeWeatherSearchList = WeatherCardSearchListStore(); // WeatherCardSearchListStore

let isLoading = ref(false); // Loader variable to show or hide loader for handleCardClick function
const handleCardClick = async(id: number) => { // Handle fetching and storing weather forecast data based on card click events.
  isLoading.value = true; // Set the loader variable to true to show the loader until the data is fetched
  if (id) {
    try {
      console.log(id);
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
let placeholderValue = ref('');
const initialPlaces = ref(['Paris', 'Colombia', 'Tokyo', 'Mexico City', 'London', 'Rio de Janeiro']);
const initialPlacesId = ref([803267, 502209, 3125553, 3247379,2801268,287907]); //same places but these values are their respective id

const addInitialCards = () => {
    for (let i = 0; i < initialPlacesId.value.length; i++) {
        setTimeout((index:number) => {
            handleCardClick(initialPlacesId.value[index]);
            placeholderValue.value = initialPlaces.value[index];
        }, 1900 * i, i);
    }
    setTimeout(() => {
        placeholderValue.value = 'Search place...'; // Esto se ejecutará después de los setTimeout
          userPreference.setIsFirstRun(false);
    }, 1900 * initialPlacesId.value.length); // Asegúrate de que esto se ejecute después de todos los setTimeout
}

const userPreference = UserPreferencesStore();

(userPreference.getFirstRun) ? addInitialCards() : placeholderValue.value = 'Search place...';// If is user first run will load the addInitialCards function otherwise the place holder value will be 'Search place'


</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

</style>