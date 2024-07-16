<template>
    <div>
        <!-- sidebar main container -->
        <div :style="{transform: storeSysValues.getSidebarExtended  ? 'translateX(0)' : 'translateX(100%)'}" class="fixed right-0 w-4/5 transition-transform duration-500 ease-out bg-blue-400 h-dvh top-14 ">
            <h1>SideBar</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemValuesStore } from '@/store/SystemValuesStore';


const storeSysValues = SystemValuesStore();
</script>

<style scoped>

</style>