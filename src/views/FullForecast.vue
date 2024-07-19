<template>
  <div>
    <MainLayout>
      <!-- Full Forecast Main Content  -->
      <template #main>
        <div class="flex justify-center">
            <LoaderCircle v-if="!SystemValuesStore().getFullForecastDataLoaded"/>
        </div>
        <FullForecastCard  :id="Number(router.params.id)"  />
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import FullForecastCard from '@/components/FullForecastCard.vue'
import LoaderCircle from '@/components/animations/LoaderCircle.vue'
import { SystemValuesStore } from '@/store/SystemValuesStore';
const router = useRoute();


</script>

<style scoped></style>