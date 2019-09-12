import Vue from "vue";
import Router from "vue-router";
import SearchMovies from "./components/SearchMovies.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/search",
      name: "search",
      component: SearchMovies
    }
  ]
});