<template>
  <div class="teams">
    <h1>All Teams</h1>

    <!-- <p>{{ teams }}</p> -->

    <div v-for="team in teams">
      <h3>Team: {{ team.name }}</h3>
      <p>League: {{ team.league }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      teams: [],
    };
  },
  created: function() {
    axios.get("/api/teams").then((response) => {
      console.log(response.data);
      this.teams = response.data;
    });
  },
};
</script>
