<template>
    <div class="flex justify-center cursor-pointer ">
        <div class="flex items-center w-11/12 p-1 transition-colors duration-100 ease-out bg-white rounded-b-sm shadow-sm hover:text-white hover:bg-blue-500 ">
            <h2 class="font-poppins" >{{ props.name }}, {{ props.region }}, {{props.country}}</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
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
</script>

<style scoped></style>