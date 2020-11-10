<template>
  <div class="teams-show">
    <!-- <h1>Show Team</h1> -->

    <!-- Dropdown select example -->
    <!-- <select class="form-control" @change="getTeamSeason($event)">
      <option value="" selected disabled>Choose Season</option>
      <option
        v-for="season in seasons"
        :value="jobTitle.id"
        :key="jobTitle.id"
        >{{ jobTitle.name }}</option
      >
    </select> -->
    <!-- <br /><br />
    <p>
      <span>Selected job title: {{ selectedJobTitle }}</span>
    </p> -->
    <!-- Dropdown select example -->

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
      jobTitles: [
        { name: "Current" },
        { name: "2019-2020-regular" },
        { name: "2019-2020-Playoffs" },
        { name: "2018-2019-regular" },
      ],
    };
  },
  created: function() {
    // axios.get(`/api/teams/${this.$route.params.id}`).then((response) => {
    //   console.log(response.data);
    //   this.team = response.data;
    // });
    this.getTeamSeason();
  },
  methods: {
    getTeamSeason: function() {
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

----->Example for Season Select below <--------

<div id="app">
  <select class="form-control" @change="changeJobTitle($event)">
    <option value="" selected disabled>Choose</option>
    <option v-for="jobTitle in jobTitles" :value="jobTitle.id" :key="jobTitle.id">{{ jobTitle.name }}</option>
  </select>
  <br><br>
  <p><span>Selected job title: {{ selectedJobTitle  }}</span></p>
</div>

new Vue({ el: "#app", data: { jobTitles: [ { name: "Product designer", id: 1 },
{ name: "Full-stack developer", id: 2 }, { name: "Product manager", id: 3 }, {
name: "Senior front-end developer", id: 4 } ], selectedJobTitle: null },
methods: { changeJobTitle (event) { this.selectedJobTitle =
event.target.options[event.target.options.selectedIndex].text } } }) ----> end
of season else method example <-------

<label for="seasonView">Choose a season:</label>

<select name="seasonView" id="seasonView">
      <option value="latest">Latest</option>
      <option value="current">Current</option>
      <option value="2019-2020-regular">2019-2020-regular</option>
      <option value="2019-2020-playoffs">2019-2020-playoffs</option>
      <option value="2018-2019-regular">2019-2020-regular</option>
      <option value="2018-2019-playoffs">2019-2020-regular</option>
    </select>
