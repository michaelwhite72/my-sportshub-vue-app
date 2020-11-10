<template>
  <div class="user-teams">
    <h1>My Teams</h1>
    <!-- 
    <p>{{ team_hash }}</p> -->

    <!-- Dropdown select example -->
    <!-- <label for="cars">Choose a car:</label>

      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> -->
    <!-- Dropdown select example -->

    <div v-for="team in team_hash">
      <!-- <h2>{{ team.name }}</h2> -->
      <router-link tag="h3" :to="`/teams/${team.id}`"
        >{{ team.name }}
      </router-link>
      <img :src="team.logo" alt="" />
      <p>LOGO:</p>
      <p>LEAGUE: {{ team.league }}</p>
      <!-- <p>{{ team.schedule[1].broadcast }}</p> -->
      <div v-for="schedule in team.schedule">
        <h4>Week: {{ schedule.week }}</h4>
        <p>Game Time: {{ relativeDate(schedule.start_time) }}</p>
        <p>Home Team: {{ schedule.home_team }}</p>
        <p>Away Team: {{ schedule.away_team }}</p>
        <p>Broadcast: {{ schedule.broadcast }}</p>
        <p>___________________________________</p>
      </div>
      <h3>_____________________Next________________________</h3>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      team_hash: [],
    };
  },

  created: function() {
    axios.get("/api/user_teams").then((response) => {
      console.log(response.data);
      this.team_hash = response.data;
      console.log(response.data[0]["name"]);
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
