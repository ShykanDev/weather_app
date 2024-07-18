<template>
    <div class="fixed top-0 z-40 w-full pt-3 pb-3 bg-white rounded-b-lg shadow-sm">
        <!-- Container app name and loader -->
        <div class="relative flex items-center justify-center gap-1">
            <v-icon scale="1.5" name="io-partly-sunny-outline" />
            <RouterLink :to="{name:'about'}">
                <h1 class="text-2xl font-poppins">Weathy App</h1>
            </RouterLink>
            <Transition name="fade">    
                <v-icon v-if="storeSysValues.getIsTyping" class="duration-300 ease-in transtion-opacity" name="ri-loader-5-line" color="#00a0f6" animation="spin" />
            </Transition>
            <TopHamMenu @click="storeSysValues.setSidebarExtended()" class="fixed top-0 right-0 z-50"/>
        </div>
            <!-- Side Bar -->
        </div>
            <SideBar/>
</template>

<script lang="ts" setup>
import SideBar from '@/components/SideBar.vue'
import TopHamMenu from './TopHamMenu.vue';
import { ref, Transition } from 'vue';
import { SystemValuesStore } from '@/store/SystemValuesStore';

const storeSysValues = SystemValuesStore();

let toggleSideBar = ref(false);  // click on hamburger menu

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  /* transform: translateY(-5px); */
}
</style>
