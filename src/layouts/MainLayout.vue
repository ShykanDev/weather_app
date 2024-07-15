<template>
    <!-- header -->
    <div>
        <HeaderBar />
    </div>
    <!-- main -->
     <div>
        <slot name="main">

        </slot>
     </div>
</template>

<script lang="ts" setup>
import HeaderBar from '@/components/HeaderBar.vue';


</script>

<style scoped>

</style>