<template>
    <div :class="sysColorStore.getBackgroundWhiteOrBlack"  class="fixed top-0 z-40 flex items-center justify-between w-full pt-3 pb-3 pl-4 pr-4 transition-colors duration-500 ease-out shadow-sm rounded-b-md">
        <!-- Lang Selector -->
         <LangSelector/>
        <!-- Container app name -->
        <div class="relative flex items-center justify-center gap-1 jus">
            <v-icon class="absolute -left-8 top-[1px]" scale="1.7" name="wi-day-cloudy" :color="sysColorStore.getWhiteOrBlackOnTheme" />
            <RouterLink :to="{ name: 'home' }">
                <h1 :class="sysColorStore.getTextWhiteOrBlack" class="text-2xl font-poppins">Weathy App</h1>
            </RouterLink>
        </div>
        <!-- Theme Switch -->
         <ToggleSwitch />
    </div>
</template>

<script lang="ts" setup>
import LangSelector from './LangSelector.vue';
import ToggleSwitch from './animations/ToggleSwitch.vue';
import { SystemColorsStore } from '@/store/SystemColorsStore';

const sysColorStore = SystemColorsStore();


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    /* transform: translateY(-5px); */
}
</style>
