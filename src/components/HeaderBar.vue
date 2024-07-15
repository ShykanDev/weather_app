<template>
    <div class="z-40 w-full pt-3 pb-3 bg-white rounded-b-lg shadow-sm">
        <!-- container app name and loader -->
        <div class="flex items-center justify-center gap-1 ">
            <v-icon scale="1.5" name="io-partly-sunny-outline" />
            <h1 class="text-2xl font-poppins">Weathy App</h1>
            <v-icon class="duration-300 ease-in transtion-opacity" :style="storeSysValues.getIsTyping ? 'opacity:1' : 'opacity:0'" name="ri-loader-5-line" color="#00a0f6" animation="spin" />
                <TopHamMenu @click="toggleSideBar = !toggleSideBar" class="fixed top-0 right-0 z-50"/>
            </div>
            <!-- Side Bar -->
            <SideBar :toggleSideBar="toggleSideBar"/>
    </div>
</template>

<script lang="ts" setup>
import SideBar from '@/components/SideBar.vue'
import TopHamMenu from './TopHamMenu.vue';
import { ref } from 'vue';
import { SystemValuesStore } from '@/store/SystemValuesStore';

const storeSysValues = SystemValuesStore();

let toggleSideBar = ref(false);  // click on hamburger menu
</script>

<style scoped></style>
