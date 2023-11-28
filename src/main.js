import { createApp } from "vue";
import { Cell, IndexBar, IndexAnchor } from "vant";
import App from "./App.vue";

const app = createApp(App);
app.use(IndexBar);
app.use(IndexAnchor);
app.use(Cell);
app.mount("#app");
