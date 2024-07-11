<template>
  <div class="bg-gradient-to-b from-indigo-100 to-blue-200 min-h-dvh">
    <!-- Date -->
    <div class="pt-4 text-2xl font-poppins">
      <h1>{{ date }}</h1>
    </div>
    <!-- Search Bar -->
    <div  class="mt-5">
      <input v-on:blur="handleBlur" @click="handleQuery" v-model="query" @input="handleQuery"
        class="w-2/4 p-1 duration-500 shadow-md min-h-11 rounded-xl focus:rounded-b-none transition-width focus:w-11/12 focus:outline-none "
        type="text" placeholder="New York">
    </div>
    <!-- Weather Card -->
    <div v-for="data in responseAutoComplete" :key="data.id">
      <!-- CardComponent -->
      <AutoCompleteCard @click="handleCardClick(data.id)" v-if="query.length >= 1" :name="data.name"
        :country="data.country" :region="data.region"> </AutoCompleteCard>
    </div>
    <!-- List of Weather Cards -->
     <div v-for="card in weatherCardsList" :key="card.id">
       <WeatherCard :weatherInfo="card" />
     </div>
     <!-- temp button fot testing delete all cards -->
      <button class="pl-2 pr-2 text-white bg-red-500 rounded-3xl font-poppins" @click="deleteAllCards ">Delete all cards </button>
  </div>
</template>

<script lang="ts" setup>
import AutoCompleteCard from '@/components/AutoCompleteCard.vue';
import IAutocompleteCountry from '@/Interfaces/IAutoCompleteCountry';
import WeatherService from '@/services/WeatherService';
import WeatherCard from '@/components/WeatherCard.vue';
import { computed, Ref, ref } from 'vue';

// Api Stuff
const api_key = ref('258e43a114834b64b6f23707241007');
const weatherService = new WeatherService();

// date to show at the top of the page
const date = new Date().toLocaleString('en-us', { dateStyle: 'full' });

// user query value
const query = ref('');

//  timeout for api call 
let timeout = setTimeout(() => {
  console.log(query.value);
}, 500);

// list of queries from the user that will be shown as a list of cards once the user click on the query result
let responseAutoComplete: Ref<Array<IAutocompleteCountry>> = ref([]);

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
// when user blur the input it will hide the list of cards
const handleBlur = () => console.log("blur trigger");


// importing weather store
import { WeatherCardSearchListStore } from '@/store/WeatherCardSearchListStore';

// WeatherCardSearchListStore
const storeWeatherSearchList = WeatherCardSearchListStore();

// When the user clicks on the card it will show the id of the country
const handleCardClick = async(id: number) => {
  if (id) {
   await weatherService.fetchForecast(api_key.value, id)
  const weatherForecast =  weatherService.getForecast();
    storeWeatherSearchList.addCard(weatherForecast.value);    
    query.value = ""
    responseAutoComplete.value = []
  }
}

// list of weather cards when user click on query result
const weatherCardsList = computed(() => storeWeatherSearchList.getWeatherCardSearchList);

// delete all cards
const deleteAllCards = () => {
  storeWeatherSearchList.deleteAllCardsList();
}

//TODO: fix the blur function by adding a new variable that handles the blur event 
// DID: added the function getForecast from the weather service,


</script>
