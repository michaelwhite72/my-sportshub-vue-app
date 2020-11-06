<template>
  <div class="teams-show">
    <!-- <h1>Show Team</h1> -->

    <h1>{{ team.name }}</h1>
    <img :src="team.official_logo" alt="" />

    <div>
      <h5>Conference: {{ team.conference_name }}</h5>
      <h5>Division: {{ team.division_name }}</h5>
      <h5>Home Venue: {{ team.team_venue }}</h5>
      <h5>Games Played: {{ team.games_played }}</h5>
      <h5>Games Won: {{ team.games_won }}</h5>
      <h5>Games Lost: {{ team.games_lost }}</h5>
      <h5>Games Tied: {{ team.games_tied }}</h5>
      <h5>Conference Rank: {{ team.conference_rank }}</h5>
      <h5>Division Rank: {{ team.division_rank }}</h5>
    </div>
    <br />

    <div v-for="article in team.articles">
      <h4>{{ article.title }}</h4>
      <h6>{{ article.source_name }}</h6>
      <img :src="article.url_image" alt="" />
      <h4>description: {{ article.description }}</h4>
      <h5>Article Link: {{ article.url }}</h5>
      <p></p>
      <br />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      team: {},
    };
  },
  created: function() {
    axios.get(`/api/teams/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.team = response.data;
    });
  },
};
</script>
