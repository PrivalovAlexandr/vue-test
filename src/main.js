// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import { createPinia, setActivePinia } from "pinia";
import VueCompositionAPI from "@vue/composition-api";

import "@/assets/css/tailwind.css";
import "@/assets/css/transition.css";

Vue.config.productionTip = false;
const pinia = createPinia();
setActivePinia(pinia);

Vue.use(VueCompositionAPI);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    pinia,
    components: { App },
    render: h => h(App)
});
