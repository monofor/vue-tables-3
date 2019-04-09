import Vue from "vue";
import Pagination from "vue-pagination-2";
import { ServerTable, ClientTable } from "../compiled/index.js";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

Vue.use(ClientTable, {}, false, "bootstrap4", "default");
Vue.use(ServerTable, {}, false, "bootstrap4", "default");
Vue.component("pagination", Pagination);

window.Vue = Vue;

new Vue({
  el: "#app",
  render(createElement) {
    return createElement(App);
  }
});
