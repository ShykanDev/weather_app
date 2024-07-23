<template>
    <div :class="SystemColorsStore().getTextWhiteOrBlack" class="font-medium">
        <h1 :class="SystemColorsStore().getTextWhiteOrBlack" class="animate-fade-up animate-once animate-duration-[5000ms] animate-ease-in-out font-poppins text-2xl text-center mb-3">Welcome to Weathy App!</h1>
        <h2 :class="SystemColorsStore().getTextWhiteOrBlack" class="animate-fade-up animate-once animate-duration-[5000ms] animate-ease-in-out font-poppins text-2xl text-center mb-3 animate-delay-1000">Start searching for a city or a country</h2>

    </div>
</template>

<script lang="ts" setup>
import { SystemColorsStore } from '@/store/SystemColorsStore';

</script>

<style scoped>

</style>