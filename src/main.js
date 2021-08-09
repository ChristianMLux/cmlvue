import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ContentArea from "@/components/ContentArea/ContentArea.vue";

const app = createApp(App).use(router);

app.component("content-area", ContentArea);
app.mount("#app");

//createApp(App).use(router).mount("#app");
