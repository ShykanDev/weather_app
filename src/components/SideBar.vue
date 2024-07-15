<template>
    <div>
        <!-- sidebar main container -->
        <div :style="{transform: props.toggleSideBar ? 'translateX(0)' : 'translateX(100%)'}" class="fixed right-0 w-4/5 transition-transform duration-500 ease-out bg-white h-dvh top-14 -z-10 ">
            <h1>SideBar</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {  defineProps, ref, watch } from 'vue';

// let toggleSideBarComputed = ref(false); 
// props for toggle side bar
const props = defineProps({
    toggleSideBar: {
        type: Boolean,
        required: true
    }
})

</script>

<style scoped>

</style>