<template>
  <div class="teams">
    <h1>All Teams</h1>
    {{ nfl }}
    <!-- <h4>click on a team for more information</h4> -->
    <h4>NFL</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NFL'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
        <!-- SHows the team name as a Hyperlink - Check view when them included        
        <a :href="`/teams/${team.id}`">{{ team.name }}</a> 
        -->
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
      nfl: ["dallas"],
      nba: [],
      mlb: [],
      nhl: [],
      ncaaf: [],
    };
  },
  created: function() {
    axios.get("/api/teams").then((response) => {
      console.log(response.data);
      this.teams = response.data;
      // test functionality (11/10)
      this.nfl = response.data.map((team) => {
        if (team.league === "NFL") {
          return team.name;
        }
      });
      // end test (11/10)
    });
  },
};
</script>
