import GboDatePicker from "./cotacao/components/date-picker.vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { vMaska } from "maska";

const app = createApp(App);

app.directive("maska", vMaska);
app.use(router).use(vuetify).component("gbo-date-picker", GboDatePicker).mount("#app");
