<template>
    <div class="">
        <div class="flex items-center transition-colors ">
            <v-icon name="io-language" :color="sysColorStore.getWhiteOrBlackOnTheme" scale="1" />
            <select v-model="$i18n.locale" @change="SystemValuesStore().setCurrentLang($i18n.locale)" :class="[sysColorStore.getBackgroundWhiteOrBlack, sysColorStore.getTextWhiteOrBlack]" class="transition-colors duration-500 ease-out"  name="" id="">
                <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">{{ lang.toUpperCase() }}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SystemColorsStore } from '@/store/SystemColorsStore';
import { SystemValuesStore } from '@/store/SystemValuesStore';

const sysColorStore = SystemColorsStore();
</script>

<style scoped></style>