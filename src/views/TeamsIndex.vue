<template>
  <div class="teams">
    <!-- Category Area - ( from Category 2 Page)-->
    <section class="category1-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="row">
              <!-- NFL  -->
              <div class="col-md-6">
                <div class="category-box">
                  <img
                    src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"
                    alt=""
                    class="img-fluid"
                  />
                  <!-- <h6>
                    <a href=""
                      >These sentences are selected from various online news.</a
                    >
                  </h6>
                  <ul class="list-unstyled list-inline tag-dat">
                    <li class="list-inline-item">International</li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul> -->
                  <div v-for="team in teams">
                    <div v-if="team.league == 'NFL'">
                      <!-- Option 1 for team name view - link -->
                      <h5 style="text-align:center">
                        <router-link href="#" :to="`/teams/${team.id}`"
                          >{{ team.name }}
                        </router-link>
                      </h5>
                      <br />
                    </div>
                    <!-- Option 2: SHows the team name as a Hyperlink - Check view when them included   --------     
                 <a :href="`/teams/${team.id}`">{{ team.name }}</a> -->
                  </div>
                </div>
              </div>
              <!-- end NFL -->
              <!-- NBA  -->
              <div class="col-md-6">
                <div class="category-box">
                  <img
                    src="https://gwg.ng/wp-content/uploads/2020/08/NBA.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <!-- <h6>
                    <a href=""
                      >These sentences are selected from various online news.</a
                    >
                  </h6>
                  <ul class="list-unstyled list-inline tag-dat">
                    <li class="list-inline-item">International</li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul> -->
                  <div v-for="team in teams">
                    <div v-if="team.league == 'NBA'">
                      <h5 style="text-align:center">
                        <router-link href="#" :to="`/teams/${team.id}`"
                          >{{ team.name }}
                        </router-link>
                      </h5>
                      <br />
                    </div>
                    <!-- Option 2: SHows the team name as a Hyperlink - Check view when them included   --------     
                 <a :href="`/teams/${team.id}`">{{ team.name }}</a> -->
                  </div>
                </div>
              </div>
              <!-- end NBA -->
              <!-- MLB  -->
              <div class="col-md-6">
                <div class="category-box">
                  <img
                    src="https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2018/03/major_league_baseball_logo-300x182.png"
                    alt=""
                    class="img-fluid"
                  />
                  <!-- <h6>
                    <a href=""
                      >These sentences are selected from various online news.</a
                    >
                  </h6>
                  <ul class="list-unstyled list-inline tag-dat">
                    <li class="list-inline-item">International</li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul> -->
                  <div v-for="team in teams">
                    <div v-if="team.league == 'MLB'">
                      <!-- Option 1 for team name view - link -->
                      <h5 style="text-align:center">
                        <router-link href="#" :to="`/teams/${team.id}`"
                          >{{ team.name }}
                        </router-link>
                      </h5>
                      <br />
                    </div>
                    <!-- Option 2: SHows the team name as a Hyperlink - Check view when them included   --------     
                 <a :href="`/teams/${team.id}`">{{ team.name }}</a> -->
                  </div>
                </div>
              </div>
              <!-- end MLB -->
              <!-- NHL  -->
              <div class="col-md-6">
                <div class="category-box">
                  <img
                    src="http://www.pngall.com/wp-content/uploads/2/NHL-PNG-Images.png"
                    alt=""
                    class="img-fluid"
                  />
                  <!-- <h6>
                    <a href=""
                      >These sentences are selected from various online news.</a
                    >
                  </h6>
                  <ul class="list-unstyled list-inline tag-dat">
                    <li class="list-inline-item">International</li>
                    <li class="list-inline-item">February 11, 2019</li>
                  </ul> -->
                  <div v-for="team in teams">
                    <div v-if="team.league == 'NHL'">
                      <h5 style="text-align:center">
                        <router-link href="#" :to="`/teams/${team.id}`"
                          >{{ team.name }}
                        </router-link>
                      </h5>
                      <br />
                    </div>
                    <!-- Option 2: SHows the team name as a Hyperlink - Check view when them included   --------     
                 <a :href="`/teams/${team.id}`">{{ team.name }}</a> -->
                  </div>
                </div>
              </div>
              <!-- end NHL -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Category Area -->
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
