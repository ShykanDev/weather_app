import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia();
import './assets/index.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { MdDeleteforeverTwotone, MdMorevert,BiCalendarFill,FaTemperatureLow,WiHumidity,WiDayWindy,MdBoy,BiCloudsFill,BiDropletHalf,HiSolidClock,BiSunset,BiSunrise,LaGripLinesVerticalSolid,IoTrendingUp,IoTrendingDown,IoPartlySunnyOutline,GiEarthAmerica,MdLocationonTwotone                  } from 'oh-vue-icons/icons';
addIcons(MdDeleteforeverTwotone, MdMorevert,BiCalendarFill,FaTemperatureLow,WiHumidity,WiDayWindy,MdBoy,BiCloudsFill,BiDropletHalf,HiSolidClock,BiSunset,BiSunrise,LaGripLinesVerticalSolid,IoTrendingUp,IoTrendingDown,IoPartlySunnyOutline,GiEarthAmerica,MdLocationonTwotone                 );
            


const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);
app.use(pinia);
app.mount("#app");
