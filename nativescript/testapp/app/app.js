import Vue from "nativescript-vue";

import Home from "./components/Home";

Vue.registerElement("exoplayer", () => require("nativescript-exoplayer").Video);
Vue.config.silent = false;
new Vue({
    render: h => h("frame", [h(Home)])
}).$start();
