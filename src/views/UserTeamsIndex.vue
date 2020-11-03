<template>
  <div class="user-teams">
    <h1>My Teams</h1>
    <!-- 
    <p>{{ team_hash }}</p> -->

    <div v-for="team in team_hash">
      <h2>TEAM: {{ team.name }}</h2>
      <p>LOGO:</p>
      <p>LEAGUE: {{ team.league }}</p>
      <!-- <p>{{ team.schedule[1].broadcast }}</p> -->
      <div v-for="schedule in team.schedule">
        <p>Week: {{ schedule.week }}</p>
        <p>Game Time: {{ schedule.start_time }}</p>
        <p>Home Team: {{ schedule.home_team }}</p>
        <p>Away Team: {{ schedule.away_team }}</p>
        <p>Broadcast: {{ schedule.broadcast }}</p>
      </div>
    </div>
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
      console.log(response.data[0]["name"]);
    });
  },
};
</script>
