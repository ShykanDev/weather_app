import { defineStore } from "pinia";
export const UserPreferencesStore = defineStore("userPreferences", {
  state: () => {
    return {
      darkMode: false,
      isFirstRun: true,
    };
  },
  actions: {
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode;
    },
    setIsFirstRun(isFirstRun: boolean) {
      this.isFirstRun = isFirstRun;
    },
  },
  getters: {
   getFirstRun():boolean{
     return this.isFirstRun
   }
  },
  // persist:true
});
