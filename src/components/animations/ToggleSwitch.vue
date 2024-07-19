<template>
    <div  @click="storeSysValues.setIsDarkMode" class="flex justify-center">
        <div :style="{backgroundColor: storeSysValues.getIsDarkMode ? '#f3f3f3' : '#2e2e2e'}" class="flex items-center justify-start w-[37px] h-5 pl-1 transition-all duration-500 ease-out rounded-full shadow-md">
            <div :style="{transform: storeSysValues.getIsDarkMode ? 'translateX(12px)' : 'translateX(0px)' }" class="flex items-center transition-all duration-500 ease-out">
                <v-icon v-if="!storeSysValues.getIsDarkMode" name="hi-solid-sun" color="white" scale="0.9"/>
                <v-icon v-else name="ri-moon-fill" color="black" scale="0.8"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemValuesStore } from '@/store/SystemValuesStore';

const storeSysValues = SystemValuesStore();

</script>

<style scoped>

</style>