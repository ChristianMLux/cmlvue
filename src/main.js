import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ContentArea from "@/components/ContentArea/ContentArea.vue";
import AllIosIcon from "vue-ionicons/dist/ionicons.js";

const app = createApp(App).use(router);
app.use(AllIosIcon);
app.component("content-area", ContentArea);
app.mount("#app");

//createApp(App).use(router).mount("#app");
