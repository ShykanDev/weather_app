<template>
    <div class="relative flex justify-center cursor-pointer">
        <div :class="`${sysColorsStore.getCardBackgroundWhiteOrBlack}  ${sysColorsStore.getTextWhiteOrBlack}`" class="flex items-center w-11/12 p-1 transition-colors duration-100 ease-out rounded-b-sm shadow-md">
            <h2 class="text-xl font-poppins"><v-icon :color="sysColorsStore.getColorCBlueOrWhite" scale="1.5" name="md-locationon-twotone" /> {{ props.name }} {{ props.region }}, {{props.country}}</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemColorsStore } from '@/store/SystemColorsStore';
import { defineProps } from 'vue';
const props = defineProps({
    name:{
        required:true,
        type:String
    },
    region:{
        required:true,
        type:String
    },
    country:{
        required:true,
        type:String
    }
})

const sysColorsStore = SystemColorsStore();
</script>

<style scoped></style>