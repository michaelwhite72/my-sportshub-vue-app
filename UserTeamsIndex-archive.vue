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
                  <span>SCHEDULE<i class="fa fa-caret-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Web Ticker -->
    <!-- Slider Area 2 -->
    <section class="slider-area2">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-6 col-md-6">
            <!-- Big Pics -->
            <!-- <div class="owl-slider owl-carousel">
              <div class="slider-content">
                <img src="images/slider-4.jpg" alt="" class="img-fluid" />
                <div class="slider-layer">
                  <p>
                    <a href="">Big picture 1</a>
                  </p>
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">SPORTS</li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul>
                </div>
              </div>
              <div class="slider-content">
                <img src="images/slider-5.jpg" alt="" class="img-fluid" />
                <div class="slider-layer">
                  <p>
                    <a href="">Big Picture 2.</a>
                  </p>
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">SPORTS</li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul>
                </div>
              </div>
            </div> -->
            <!-- Big Pics End -->
            <!-- AREA FOR TEAM(S) SCHEDULE(S) -->
            <div class="pop-news2">
              <div class="row">
                <!-- <div v-for="team in team_hash"></div> -->
                <div class="col-md-4" v-for="team in team_hash">
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
                      <p></p>
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">FMIKE</li>
                        <li class="list-inline-item">September 24, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pop-box">
                    <div class="pop-img">
                      <a href="#"
                        ><img
                          src="images/popular-3.jpg"
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
                <div class="col-md-4">
                  <div class="pop-box">
                    <div class="pop-img">
                      <a href="#"
                        ><img
                          src="images/popular-4.jpg"
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
                <div class="col-md-6">
                  <div class="pop-box">
                    <div class="pop-img">
                      <a href="#"
                        ><img
                          src="images/popular-6.jpg"
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
                <div class="col-md-6">
                  <div class="pop-box">
                    <div class="pop-img">
                      <a href="#"
                        ><img
                          src="images/popular-7.jpg"
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
                <div class="col-md-6">
                  <div class="pop-box">
                    <div class="pop-img">
                      <a href="#"
                        ><img
                          src="images/popular-8.jpg"
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
              </div>
            </div>
            <!-- AREA FOR TEAM SCHEDULE END -->
          </div>
          <!-- My Teams Column (planned) -->
          <div class="col-lg-4 col-md-3">
            <div class="latest-nws">
              <div class="sec-title">
                <h5>MY TEAMS<i class="fa fa-caret-down"></i></h5>
              </div>
              <div class="lt-box">
                <div class="lt-img">
                  <a href="#"
                    ><img src="images/popular-5.jpg" alt="" class="img-fluid"
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
              <div class="lt-box">
                <div class="lt-img">
                  <a href="#"
                    ><img src="images/popular-1.jpg" alt="" class="img-fluid"
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
              <div class="lt-box">
                <div class="lt-img">
                  <a href="#"
                    ><img src="images/popular-10.jpg" alt="" class="img-fluid"
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
              <div class="lt-box">
                <div class="lt-img">
                  <a href="#"
                    ><img src="images/popular-12.jpg" alt="" class="img-fluid"
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
          </div>
          <!-- My Teams column end (planned) -->
        </div>
      </div>
    </section>
    <!-- End Slider Area 2 -->

    <!-- First Version -->
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
                  <br />
                  <ul class="nav nav-tabs" role="tablist">
                    <h3>My Teams</h3>
                    <!-- <li class="nav-item">
                      <h4 href="#recent">My Teams</h4>
                    </li> -->
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
          <div class="col-md-6 col-md-offset-3 text center ">
            <div class="owl-slider owl-carousel"></div>
            <div class="pop-news2">
              <div class="row">
                <div v-for="team in team_hash">
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
                <!-- <div class="col-md-6">
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
                </div> -->
                <!-- END OF SANITY CHECK -->
              </div>
            </div>
          </div>
          <!-- Game Times End -->
        </div>
      </div>
    </section>
    <!-- End Slider Area 2 -->
    <!-- end of frist versions -->
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
