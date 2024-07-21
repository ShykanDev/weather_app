<template>
    <div class="">
        <h1>This is an online page</h1>
        <h2>{{ status }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from 'vue';
import { onMounted, ref } from 'vue';

const status = ref('Verificando estado de conexión...');

const updateOnlineStatus = () => {
    status.value = navigator.onLine ? '¡Conectado!' : 'Sin conexión';
};
onMounted(() => {
    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
});


</script>

<style scoped></style>