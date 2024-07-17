<template>
  <div>
    <MainLayout>
        <!-- Full Forecast Main Content  -->
         <template #main>
            <!-- <h1>This is a card value, with id: {{ router.params.id }}</h1>
            <h2>Loading data, please wait</h2> -->
            <div class="flex justify-center">
             <!-- <img class="rounded-md" src="https://www.icegif.com/wp-content/uploads/hurricane-icegif-7.gif" alt=""> -->
            </div>
            <FullForecastCard :id="Number(router.params.id)"/>
         </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SquaresLoader from '@/components/animations/SquaresLoader.vue'
import { useRoute } from 'vue-router'
import FullForecastCard from '@/components/FullForecastCard.vue'
const router = useRoute();


</script>

<style scoped>

</style>