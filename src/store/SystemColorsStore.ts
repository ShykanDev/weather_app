import { defineStore } from "pinia";


export const SystemColorsStore = defineStore("SystemColorStore", {
  state: () => ({
    isDarkMode: false,
    backgroundTheme: "from-sky-50 to-slate-50",
    backgroundWhiteOrBlack: "bg-white", 
    whiteOrBlackOnTheme: "black",
    textWhiteOrBlack: "text-black",
    textPlaceholderWhiteOrBlack: "placeholder-sky-800",
    textGrayOrWhite: "text-[#9CA3AF]",
    textWhiteOrBlue: "text-white",
    cardBackgroundWhiteOrBlack: "bg-white",
    cardWeatherBackgroundWhiteOrBlack: "bg-white",
    colorBlueOrWhite:"text-white", 
    colorCBlueOrWhite:"#0369A1",
    colorBlueOrWhiteOnTheme:"bg-[#003b71]",
    backgroundShadowAndBorder: "border-none shadow-xl"
  }),
  getters: {
    getIsDarkMode(): boolean {
      return this.isDarkMode;
    },
    getBackgroundTheme(): string {
      return this.backgroundTheme;
    },
    getBackgroundWhiteOrBlack(): string {
      return this.backgroundWhiteOrBlack;
    },
    getTextWhiteOrBlack(): string {
      return this.textWhiteOrBlack;
    },
    getTextGrayOrWhite(): string {
      return this.textGrayOrWhite;
    },
    getWhiteOrBlackOnTheme(): string {
      return this.whiteOrBlackOnTheme;
    },
    getCardBackgroundWhiteOrBlack(): string {
      return this.cardBackgroundWhiteOrBlack;
    },
    getColorBlueOrWhite(): string {
      return this.colorBlueOrWhite;
    },
    getCardWeatherBackgroundWhiteOrBlack(): string {
      return this.cardWeatherBackgroundWhiteOrBlack;
    },
    getTextWhiteOrBlue(): string {
      return this.textWhiteOrBlue;
    },
    getColorBlueOrWhiteOnTheme(): string {
      return this.colorBlueOrWhiteOnTheme;
    },
    getBackgroundShadowAndBorder(): string {
      return this.backgroundShadowAndBorder;
    },
    getColorCBlueOrWhite(): string {
      return this.colorCBlueOrWhite;
    },
    getTextPlaceholderWhiteOrBlack(): string {
      return this.textPlaceholderWhiteOrBlack;
    },

  },
  actions: {
    setIsDarkMode(): void {
      this.isDarkMode = !this.isDarkMode;
    },
    setLightMode(): void {
      this.setIsDarkMode();
      this.backgroundTheme = "from-sky-50 to-slate-50";
      this.backgroundWhiteOrBlack = "bg-white";
      this.textWhiteOrBlack = "text-black";
      this.textGrayOrWhite = "text-[#9CA3AF]";
      this.whiteOrBlackOnTheme = "black";
      this.cardBackgroundWhiteOrBlack = "bg-white";
      this.colorBlueOrWhite = "white";
      this.cardWeatherBackgroundWhiteOrBlack = "bg-white";
      this.textWhiteOrBlue = "text-white";
      this.colorBlueOrWhiteOnTheme = "bg-[#003b71]";
      this.backgroundShadowAndBorder = "border-none shadow-xl";
      this.colorCBlueOrWhite = "#0369A1";
      this.textPlaceholderWhiteOrBlack = "placeholder-sky-800";
    },
    setDarkMode(): void {
      this.setIsDarkMode();
      this.backgroundTheme = "from-sky-800 to-slate-900";
      this.backgroundWhiteOrBlack = "bg-[#00223e]";
      this.textWhiteOrBlack = "text-white";
      this.textGrayOrWhite = "text-white";
      this.whiteOrBlackOnTheme = "white";
      this.cardBackgroundWhiteOrBlack = "bg-[#003c6f]";
      this.colorBlueOrWhite = "#003b71";
      this.cardWeatherBackgroundWhiteOrBlack = "bg-[#022F54]";
      this.textWhiteOrBlue = "text-[#003b71]";
      this.colorBlueOrWhiteOnTheme = "bg-white";
      this.backgroundShadowAndBorder = "border border-solid shadow-lg border-sky-900 shadow-sky-950";
      this.colorCBlueOrWhite = "#F9F9F9";
      this.textPlaceholderWhiteOrBlack = "placeholder-slate-100";
    },
    setThemeMode(): void {
      if (!this.isDarkMode) {
        this.setDarkMode();
      } else {
        this.setLightMode();
      }
    },
  },
});
