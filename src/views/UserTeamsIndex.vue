<template>
  <div class="user-teams">
    <!-- Web Ticker -->
    <section class="top-news">
      <div class="container">
        <div class="news-content">
          <div class="row">
            <div class="col-md-12">
              <div class="ticker d-flex">
                <div class="news-head">
                  <span>MY TEAMS<i class=""></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Web Ticker -->

    <!-- Slider Area 3 -->
    <section class="slider-area3">
      <div class="container">
        <div class="row"></div>
      </div>
    </section>
    <!-- End Slider Area 3 -->

    <!-- News Area -from Home2 -->
    <section class="news-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12" v-for="team in team_hash">
                <div class="pop-news">
                  <div class="sec-title">
                    <br />
                    <h5>
                      <router-link
                        href="#"
                        :src="team.logo"
                        :to="`/teams/${team.id}`"
                        >{{ team.name }}
                      </router-link>
                      <button
                        type="button"
                        class="btn btn-info"
                        data-toggle="collapse"
                        :data-target="'#schedule' + team.id"
                      >
                        Show Schedule
                      </button>
                    </h5>
                    <br />
                  </div>

                  <div class="popular-slider">
                    <div class="popular-item">
                      <div class="row">
                        <div
                          class="col-md-4"
                          v-for="scheduleItem in team.schedule"
                        >
                          <div :id="'schedule' + team.id" class="collapse">
                            <div class="pop-box">
                              <div class="img-content">
                                <ul class="list-unstyled list-inline">
                                  <li class="list-inline-item">
                                    {{ relativeDate(scheduleItem.start_time) }}
                                  </li>
                                  <div
                                    v-if="
                                      team.api_id === scheduleItem.home_team
                                    "
                                  >
                                    <li class="list-inline-item">
                                      HOME GAME
                                    </li>
                                  </div>
                                  <div
                                    v-if="
                                      team.api_id === scheduleItem.away_team
                                    "
                                  >
                                    <li class="list-inline-item">
                                      AWAY GAME
                                    </li>
                                  </div>
                                </ul>
                                <p>Home Team: {{ scheduleItem.home_team }}</p>
                                <p>Away Team: {{ scheduleItem.away_team }}</p>
                                <p>Broadcast: {{ scheduleItem.broadcast }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End News Area -->
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
      return moment(date).format("llll");
    },
    dateCompare: function(date) {
      return new Date();
    },
  },
};
</script>

<!-- Dropdown select example -->
<!-- <label for="cars">Choose a car:</label>

      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> -->
<!-- Dropdown select example -->
