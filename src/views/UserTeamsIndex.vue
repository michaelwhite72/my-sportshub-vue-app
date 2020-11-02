<template>
  <div class="user-teams">
    <h1>My Teams</h1>

    <p>{{ team_hash }}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      team_hash: [],
    };
  },
  created: function() {
    axios.get("/api/user_teams").then((response) => {
      console.log(response.data);
      this.team_hash = response.data;
    });
  },
};
</script>
