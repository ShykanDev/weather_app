<template>
    <div>
        <!-- sidebar main container -->
        <div :style="{transform: storeSysValues.getSidebarExtended  ? 'translateY(0)' : 'translateY(-105%)'}" class="fixed right-0 z-10 w-full transition-transform duration-500 ease-out bg-white rounded-bl-lg rounded-br-lg shadow-md h-44 top-14">
            <div @click="storeSysValues.setEditMode()" class="flex items-center justify-center gap-2"><h2 class="text-2xl font-poppins">Delete Card</h2><v-icon name="oi-diff-removed" color='red' scale="2" /></div>
            <div><h2>Time</h2></div>
            <div><h2></h2></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemValuesStore } from '@/store/SystemValuesStore';

const storeSysValues = SystemValuesStore();


</script>

<style scoped>

</style>