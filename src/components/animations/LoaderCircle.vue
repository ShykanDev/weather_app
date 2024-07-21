<template>
    <div class="spinner"></div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.spinner {
   width: 15px;
   height: 15px;
   border-radius: 50%;
   border: 2px solid;
   border-color: #dbdbdb;
   border-right-color: #0078e9;
   animation: spinner-d3wgkg 0.6s infinite linear;
}

@keyframes spinner-d3wgkg {
   to {
      transform: rotate(1turn);
   }
}
</style>