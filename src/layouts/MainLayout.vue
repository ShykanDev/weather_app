<template>
    <!-- header -->
    <div>
            <HeaderBar/>
    </div>
    <!-- main -->
        <div class="fixed top-0 left-0 right-0 -bottom-32 -z-50 bg-gradient-to-r from-slate-50 to-sky-50"></div><!--Main background -->
            <div class="pt-20">
                <slot name="main"></slot>
            </div>
</template>

<script lang="ts" setup>
import HeaderBar from '@/components/HeaderBar.vue';


</script>

<style scoped>

</style>