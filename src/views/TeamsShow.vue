<template>
  <div class="teams-show">
    <!-- <h1>Show Team</h1> -->

    <!-- Dropdown select for season -->
    <select class="form-control" @change="changeSeasons($event)">
      <option value="" selected disabled>Choose Season</option>
      <option v-for="season in seasons">{{ season }}</option>
    </select>
    <!-- Free version of API only allows for selection of two seasons.  If I ever go with paid version then will make changes to add playoffs and more historical season data -->
    <br /><br />

    <h4>Season Highlights shown: {{ selectedSeason }}</h4>

    <!-- Dropdown select  -->

    <h1>{{ team.name }}</h1>
    <img :src="team.official_logo" alt="" />

    <div>
      <!-- Added a NCAAF if loop for future NCAA implementation -->
      <div v-if="team.league == 'NCAA'">
        <h5>Conference: {{ team.conference_name }}</h5>
        <h5>Games Played: {{ team.games_played }}</h5>
        <h5>Games Won: {{ team.games_won }}</h5>
        <h5>Games Lost: {{ team.games_lost }}</h5>
        <h5>Conference Wins: {{ team.conference_wins }}</h5>
        <h5>Conference Losses: {{ team.conference }}</h5>
      </div>
      <div v-else>
        <h5>Conference: {{ team.conference_name }}</h5>
        <h5>Division: {{ team.division_name }}</h5>
        <h5>Home Venue: {{ team.team_venue }}</h5>
        <h5>Games Played: {{ team.games_played }}</h5>
        <h5>Games Won: {{ team.games_won }}</h5>
        <h5>Games Lost: {{ team.games_lost }}</h5>
        <!-- NHL had unique stats -->
        <div v-if="team.league == 'NHL'">
          <h5>Overtime Wins: {{ team.overtime_wins }}</h5>
          <h5>Overtime Losses: {{ team.overtime_losses }}</h5>
          <h5>Shootout Wins: {{ team.shootout_wins }}</h5>
          <h5>Shootout Losses: {{ team.shootout_losses }}</h5>
        </div>
        <!-- NFL is the only league that allows for a -->
        <div v-else-if="team.league == 'NFL'">
          <h5>Games Tied: {{ team.games_tied }}</h5>
        </div>
        <h5>Conference Rank: {{ team.conference_rank }}</h5>
        <h5>Division Rank: {{ team.division_rank }}</h5>
      </div>
    </div>
    <br />

    <div v-for="article in team.articles">
      <img :src="article.url_image" alt="" />
      <!-- <h4>description: {{ article.description }}</h4> -->
      <h6>{{ article.source_name }}</h6>
      <h4>{{ article.title }}</h4>
      <a :href="`${article.url}`" target="_blank">{{ article.url }}</a>

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
      selectedSeason: "latest",
      seasons: ["latest", "2020-regular", "2019-regular", "2018-regular"],
    };
  },
  created: function() {
    axios
      .get(`/api/teams/${this.$route.params.id}`, {
        params: {
          season: this.selectedSeason,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.team = response.data;
      });

  },
  methods: {
    changeSeasons(event) {
      this.selectedSeason =
        event.target.options[event.target.options.selectedIndex].text;
      axios
        .get(`/api/teams/${this.$route.params.id}`, {
          params: {
            season: this.selectedSeason,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.team = response.data;
        });
    },
  },
};
</script>
