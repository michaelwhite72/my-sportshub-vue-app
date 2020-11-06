<template>
  <div class="teams">
    <h1>All Teams</h1>
    <!-- <h4>click on a team for more information</h4> -->

    <!-- <p>{{ teams }}</p> -->
    <h4>NFL</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NFL'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
      </div>
    </div>
    <br />
    <h4>NBA</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NBA'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
      </div>
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
