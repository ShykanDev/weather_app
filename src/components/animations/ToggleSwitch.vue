<template>
    <div  @click="sysColorsStore.setThemeMode()" class="flex justify-center">
        <div :style="{backgroundColor: sysColorsStore.getIsDarkMode ? '#f3f3f3' : '#2e2e2e'}" class="flex items-center justify-start w-[37px] h-5 pl-1 transition-all duration-500 ease-out rounded-full shadow-md">
            <div :style="{transform: sysColorsStore.getIsDarkMode ? 'translateX(12px)' : 'translateX(0px)' }" class="flex items-center transition-all duration-500 ease-out">
                <v-icon v-if="!sysColorsStore.getIsDarkMode" name="hi-solid-sun" color="white" scale="0.9"/>
                <v-icon v-else name="ri-moon-fill" color="black" scale="0.8"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemColorsStore } from '@/store/SystemColorsStore';

const sysColorsStore = SystemColorsStore();

</script>

<style scoped>

</style>