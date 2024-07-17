<template>
    <div  @click="storeSysValues.setEditMode()" class="flex justify-center w-full mt-4">
        <div :style="{backgroundColor: storeSysValues.getEditMode ? '#009047' : '#b2b2b2'}" class="flex items-center justify-start w-12 h-6 pl-1 transition-all duration-500 ease-out rounded-full shadow-md">
            <div :style="{transform: storeSysValues.getEditMode ? 'translateX(20px)' : 'translateX(0px)' }" class="w-5 h-5 transition-all duration-500 ease-out bg-white rounded-full"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemValuesStore } from '@/store/SystemValuesStore';

const storeSysValues = SystemValuesStore();

</script>

<style scoped>

</style>