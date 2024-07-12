<template>
  <div class="bg-gradient-to-b from-sky-50 to-slate-50 min-h-dvh">
    <HeaderBar/>
    <h2 class="fixed bottom-0 right-0 z-30 inline-block pl-2 pr-2 mb-2 mr-3 rounded-full bg-slate-700 text-slate-100 ">{{ time }}</h2>
    <!-- Search Bar -->
    <div  class="mt-5">
      <input v-on:blur="handleBlur" @click="handleQuery" v-model="query" @input="handleQuery"
        class="w-5/6 p-1 text-2xl duration-500 shadow-md min-h-16 rounded-3xl focus:rounded-b-none transition-width focus:w-11/12 focus:outline-none "
        type="text" placeholder="New York">
    </div>
    <!-- Weather Card -->
    <div v-for="data in responseAutoComplete" :key="data.id">
      <AutoCompleteCard @click="handleCardClick(data.id)" v-if="query.length >= 1" :name="data.name" :country="data.country" :region="data.region"/>
  </div>
  <!-- List of Weather Cards -->
  <TransitionGroup name="slide-fade" tag="div">
    <div v-for="card in weatherCardsList" :key="card">
      <WeatherCard :weatherInfo="card" />
    </div>
  </TransitionGroup>
     <!-- temp button fot testing delete all cards -->
      <button class="pl-2 pr-2 mt-4 text-white bg-red-500 rounded-3xl font-poppins" @click="deleteAllCards ">Borrar todas las tarjetas</button>
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

// time to show at the top of the page only showing hours and minutes and not pm or am
const time = new Date().toLocaleTimeString('en-us', { timeStyle: 'short' });

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
import HeaderBar from '@/components/HeaderBar.vue';

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
const weatherCardsList = computed(() => storeWeatherSearchList.getWeatherCardSearchList.slice().reverse());

// delete all cards
const deleteAllCards = () => {
  storeWeatherSearchList.deleteAllCardsList();
}

// delete specific card
const deletCard = (id: number) => {
  storeWeatherSearchList.deleteCard(id);
}

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