<template>
    <div class="">
        <div class="flex items-center">
            <v-icon name="io-language" scale="1" />
            <select v-model="$i18n.locale" class="bg-white" name="" id="">
                <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">{{ lang.toUpperCase() }}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>