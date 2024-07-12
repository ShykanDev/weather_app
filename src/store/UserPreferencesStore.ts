import { defineStore } from "pinia"
export const UserPreferencesStore = defineStore("userPreferences", {
    state: () => {
        return {
            darkMode: false,
            isFirstRun: true
        }
    }
})