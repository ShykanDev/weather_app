import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia(); pinia.use(piniaPluginPersistedstate);
import './assets/index.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { MdDeleteforeverTwotone, MdMorevert,BiCalendarFill,FaTemperatureLow,WiHumidity,WiDayWindy,MdBoy,BiCloudsFill,BiDropletHalf,HiSolidClock,BiSunset,BiSunrise,LaGripLinesVerticalSolid,IoTrendingUp,IoTrendingDown,IoPartlySunnyOutline,GiEarthAmerica,MdLocationonTwotone,RiLoader5Line, RiEditLine,MdDeleteforeverRound,OiDiffRemoved, GiWindsock,FaCompass,BiWind, HiSun,IoBody,BiCalendarMinusFill,BiThermometerLow,BiThermometerHigh,BiThermometerHalf,GiWindSlap, IoCalendarNumber,IoEarth, HiSolidSun, RiMoonFill,IoLanguage,BiArrowLeftSquare,WiDayCloudy,RiLoader3Fill                     } from 'oh-vue-icons/icons';
addIcons(MdDeleteforeverTwotone, MdMorevert,BiCalendarFill,FaTemperatureLow,WiHumidity,WiDayWindy,MdBoy,BiCloudsFill,BiDropletHalf,HiSolidClock,BiSunset,BiSunrise,LaGripLinesVerticalSolid,IoTrendingUp,IoTrendingDown,IoPartlySunnyOutline,GiEarthAmerica,MdLocationonTwotone,RiLoader5Line, RiEditLine,MdDeleteforeverRound,OiDiffRemoved, GiWindsock,FaCompass,BiWind, HiSun,IoBody,BiCalendarMinusFill,BiThermometerLow,BiThermometerHigh,BiThermometerHalf,GiWindSlap, IoCalendarNumber,IoEarth, HiSolidSun, RiMoonFill,IoLanguage,BiArrowLeftSquare,WiDayCloudy,RiLoader3Fill                );
import { createI18n } from 'vue-i18n'            
import { messages } from './lang/messages'
const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: messages
})
const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);
app.use(pinia);
app.use(i18n);

app.mount("#app");
