<template>
  <div class="teams-show">
    <!-- Breadcrumb Area -->
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-box">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <!-- Dropdown select for season -->
                  <select class="form-control" @change="changeSeasons($event)">
                    <option value="" selected disabled>Choose Season</option>
                    <option v-for="season in seasons">{{ season }}</option>
                  </select>
                  <!-- Free version of API only allows for selection of two seasons.  If I ever go with paid version then will make changes to add playoffs and more historical season data -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Breadcrumb Area -->

    <!-- Category Area -->
    <section class="category1-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12">
                <div class="category-box-lg">
                  <img :src="team.official_logo" alt="" class="img-fluid" />
                  <h6>
                    <a href="">{{ team.name }}</a>
                  </h6>
                  <ul class="list-unstyled list-inline tag-dat">
                    <li class="list-inline-item">
                      Season: {{ selectedSeason }}
                    </li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul>
                  <p>
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
                  </p>
                  <ul class="list-unstyled list-inline red-com">
                    <li class="list-inline-item">
                      <a href="#"
                        >Read More <i class="fa fa-angle-right"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href=""><i class="fa fa-commenting-o"></i> (09)</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div v-for="article in team.articles" class="col-md-12">
                <div class="category-box2 d-flex">
                  <div class="cat-img">
                    <a href="#"
                      ><img
                        id="team-show-article-img"
                        :src="article.url_image"
                        alt=""
                    /></a>
                  </div>
                  <div class="img-content">
                    <h6>
                      <a href="">{{ article.title }}</a>
                    </h6>
                    <ul class="list-unstyled list-inline tag-dat">
                      <li class="list-inline-item">
                        {{ article.source_name }}
                      </li>
                      <li class="list-inline-item">February 11, 2019</li>
                    </ul>
                    <p>{{ article.description }}</p>

                    <a :href="`${article.url}`" target="_blank"
                      >Read More <i class="fa fa-angle-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Category Area -->
  </div>
</template>

<style>
#team-show-article-img {
  width: 260px;
  height: 169px;
}
</style>

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
