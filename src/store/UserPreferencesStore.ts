import { defineStore } from "pinia";
export const UserPreferencesStore = defineStore("userPreferences", {
  state: () => {
    return {
      darkMode: false,
      isFirstRun: true,
    };
  },
  actions: {
    setDarkMode(darkMode: boolean) { // set darkMode value
      this.darkMode = darkMode;
    },
    setIsFirstRun(isFirstRun: boolean) { // set isFirstRun value
      this.isFirstRun = isFirstRun;
    },
  },
  getters: {
   getFirstRun():boolean{ // return isFirstRun value
     return this.isFirstRun
   }
  },
  // persist:true
});
