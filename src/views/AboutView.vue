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
      <AutoCompleteCard @click="handleCardClick(data)" v-if="query.length >= 1" :name="data.name"
        :country="data.country" :region="data.region"> </AutoCompleteCard>
    </div>
    <!-- List of Weather Cards -->
     <div v-for="card in weatherCardsList" :key="card.id">
       <WeatherCard />
     </div>
     <!-- temp button fot testing delete all cards -->
      <button @click="deleteAllCards">Delete</button>
  </div>
</template>

<script lang="ts" setup>
import AutoCompleteCard from '@/components/AutoCompleteCard.vue';
import IAutocompleteCountry from '@/Interfaces/IAutoCompleteCountry';
import WeatherService from '@/services/WeatherService';
import WeatherCard from '@/components/WeatherCard.vue';
import { computed, Ref, ref } from 'vue';

// api key
const api_key = ref('258e43a114834b64b6f23707241007');

// import WeatherService for api calls
const weatherService = new WeatherService();

// date to show at the top of the page
const date = new Date().toLocaleString('en-us', { dateStyle: 'full' });

// user values
const query = ref('');

//  timeout for api call 
let timeout = setTimeout(() => {
  console.log(query.value);
}, 500);

// list of queries from the user that will be shown as a list of cards 
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
const handleCardClick = (data: object) => {
  if (data) {
    console.log(data);
    storeWeatherSearchList.addCard(data)
    query.value = ""
    responseAutoComplete.value = []
  }
}

// list of weather cards when user click on query result
const weatherCardsList = computed(() => storeWeatherSearchList.getWeatherCardSearchList);
console.log(weatherCardsList);

// delete all cards
const deleteAllCards = () => {
  storeWeatherSearchList.deleteAllCardsList();
}



</script>
