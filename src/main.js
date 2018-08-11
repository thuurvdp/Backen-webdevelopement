import Vue from "vue";
import VueSocketio from "vue-socket.io";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueSocketio, "http://localhost:3000/");

new Vue({
	render: h => h(App),
}).$mount("#app");
