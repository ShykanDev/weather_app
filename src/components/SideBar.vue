<template>
    <div>
        <!-- sidebar main container -->
        <div :style="{transform: storeSysValues.getSidebarExtended  ? 'translateX(0)' : 'translateX(100%)'}" class="fixed right-0 w-4/5 transition-transform duration-500 ease-out backdrop-blur-sm h-dvh top-14 ">
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