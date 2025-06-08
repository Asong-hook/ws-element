import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import WsElement from "ws-element";

createApp(App).use(WsElement).mount("#app");
