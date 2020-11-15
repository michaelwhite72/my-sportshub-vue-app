<template>
  <div class="user-teams">
    <!-- Slider Area 2 -- (From Home3 page)-->
    <section class="slider-area2">
      <div class="container">
        <div class="row">
          <!-- My Teams Column -->
          <div class="col-lg-4 col-md-12">
            <div class="row">
              <div class="col-md-12"></div>
              <div class="col-md-12">
                <div class="tab-widget">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#recent"
                        >My Teams</a
                      >
                    </li>
                  </ul>
                  <!-- Team panes -->
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="recent"
                      role="tabpanel"
                    >
                      <div v-for="team in team_hash" class="rec-item d-flex">
                        <div class="rec-img">
                          <a href="#"
                            ><router-link tag="h3" :to="`/teams/${team.id}`"
                              >{{ team.name }}
                            </router-link></a
                          >
                          <img :src="team.logo" alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Team panes end-->
                </div>
              </div>
            </div>
          </div>
          <!-- My Teams end -->

          <!-- Game Times -->
          <div class="col-lg-8 ">
            <div class="owl-slider owl-carousel"></div>
            <div class="pop-news2">
              <div class="row">
                <div v-for="team in team_hash" class="col-md-6">
                  <div v-for="schedule in team.schedule">
                    <div class="pop-box">
                      <div class="pop-img">
                        <!-- <a href="#"
                          ><img :src="team.logo" alt="" class="img-fluid"
                        /></a> -->
                        <h4>Week: {{ schedule.week }}</h4>
                        <p>Team: {{ team.name }}</p>
                        <p>
                          Game Time: {{ relativeDate(schedule.start_time) }}
                        </p>
                        <p>Home Team: {{ schedule.home_team }}</p>
                        <p>Away Team: {{ schedule.away_team }}</p>
                        <p>Broadcast: {{ schedule.broadcast }}</p>
                      </div>
                      <div class="img-content">
                        <!-- <p>
                          <a href=""
                            >These sentences are selected from various online
                            news....</a
                          >
                        </p> -->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- SANITY CHECK WINDOW BELOW -->
                <div class="col-md-6">
                  <div class="pop-box">
                    <div class="pop-img">
                      <a href="#"
                        ><img
                          src="images/popular-2.jpg"
                          alt=""
                          class="img-fluid"
                      /></a>
                    </div>
                    <div class="img-content">
                      <p>
                        <a href=""
                          >These sentences are selected from various online
                          news....</a
                        >
                      </p>
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">FOOD</li>
                        <li class="list-inline-item">September 24, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- END OF SANITY CHECK -->
              </div>
            </div>
          </div>
          <!-- Game Times End -->
        </div>
      </div>
    </section>
    <!-- End Slider Area 2 -->

    <h1>My Teams</h1>
    <!-- 
    <p>{{ team_hash }}</p> -->

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
        <h3>_____________________Next________________________</h3>
      </div>
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
