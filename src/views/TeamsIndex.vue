<template>
  <div class="teams">
    <h1>All Teams</h1>
    <!-- {{ nfl }} -->
    <!-- <h4>click on a team for more information</h4> -->
    <h4>NFL</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NFL'">
        <!-- Option 1 for team name view - link -->
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>

        <!-- Option 2: SHows the team name as a Hyperlink - Check view when them included   --------     
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
    <br />
    <h4>MLB</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'MLB'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
      </div>
    </div>
    <br />
    <h4>NHL</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NHL'">
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
      // Possible refactor for DRY(11/10)  - But creates two loops for each data objext (ie nfl, nhl, etc)
      //
      // this.nfl = response.data.map((team) => {
      //   if (team.league === "NFL") {
      //     return team.name;
      //   }
      // });
      //
      // end test (11/10)
    });
  },
};
</script>
