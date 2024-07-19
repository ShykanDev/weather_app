<template>
    <div class="fixed top-0 z-40 flex items-center justify-between w-full pt-3 pb-3 pl-4 pr-4 bg-white rounded-b-lg shadow-sm">
        <!-- Lang Selector -->
         <LangSelector/>
        <!-- Container app name -->
        <div class="relative flex items-center justify-center gap-1 jus">
            <v-icon class="absolute -left-8" scale="1.5" name="io-partly-sunny-outline" />
            <RouterLink :to="{ name: 'about' }">
                <h1 class="text-2xl font-poppins">Weathy App</h1>
            </RouterLink>
        </div>
        <!-- Theme Switch -->
         <ToggleSwitch />
    </div>
</template>

<script lang="ts" setup>
import { Transition } from 'vue';
import { SystemValuesStore } from '@/store/SystemValuesStore';
import LangSelector from './LangSelector.vue';
import ToggleSwitch from './animations/ToggleSwitch.vue';

const storeSysValues = SystemValuesStore();


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
