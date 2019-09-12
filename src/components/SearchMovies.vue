<template>
  <div class="searchform">
    <h4>Find by Title</h4>
    <div class="form-group">
      <input type="text" class="form-control" id="title" required v-model="title" name="title">
    </div>
 
    <div class="btn-group">
      <button v-on:click="searchMovies" class="btn btn-success">Search</button>
    </div>

    <ul class="search-result">
      <li v-for="(movie, index) in movies" :key="index">
        <h6>{{movie.title}} ({{movie.title}})</h6>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "search-movie",
  data() {
    return {
      title: "",
      movies: [],
    };
  },
  methods: {
    /* eslint-disable no-console */
    searchMovies() {
      http
        .get("/movie/" + this.title)
        .then(response => {
          this.movies = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getAccessToken(){
      http
        .post("/oauth/token", {
          'grant_type': 'password',
          'username' : 'mobven',
          'password' : 'mobven'
        })
        .then(response => {
          this.token = response.access_token;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>