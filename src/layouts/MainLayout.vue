<template>
    <!-- header -->
    <div>
            <HeaderBar/>
    </div>
    <!-- main -->
        <div class="bg-gradient-to-r from-slate-50 to-sky-50 h-svh">
            <div class="pt-20">
                <slot name="main"></slot>
            </div>
        </div><!--Main background -->
</template>

<script lang="ts" setup>
import HeaderBar from '@/components/HeaderBar.vue';


</script>

<style scoped>

</style>