<template>
    <!-- header -->
    <div>
            <HeaderBar/>
    </div>
    <!-- main -->
        <div :style="{opacity: sysColorsStore.getIsDarkMode ? 0 : 1, zIndex: sysColorsStore.getIsDarkMode ? -49 : -50}" class="fixed top-0 left-0 right-0 transition-opacity duration-300 ease-out -bottom-32 bg-gradient-to-l from-sky-100 to-slate-50"></div><!--Main background white -->
        <div :style="{opacity: sysColorsStore.getIsDarkMode ? 1 : 0, zIndex: sysColorsStore.getIsDarkMode ? -50 : -49}" class="fixed top-0 left-0 right-0 transition-opacity duration-300 ease-in-out -bottom-32 bg-gradient-to-l from-sky-900 to-slate-950"></div> <!--Main background dark -->
            <div class="pt-16">
                <slot name="main"></slot>
            </div>
</template>

<script lang="ts" setup>
import HeaderBar from '@/components/HeaderBar.vue';
import { SystemColorsStore } from '@/store/SystemColorsStore';

const sysColorsStore = SystemColorsStore();


</script>

<style scoped>

</style>