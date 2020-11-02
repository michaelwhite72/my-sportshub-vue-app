<template>
  <div class="teams">
    <h1>All Teams</h1>

    <p>{{ teams }}</p>
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
