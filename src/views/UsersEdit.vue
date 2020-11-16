<template>
  <div class="users-edit">
    <!-- Contact Area -->
    <section class="contact-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="get-in-touch">
              <div class="sec-title">
                <h5>EDIT INFORMATION</h5>
              </div>
              <!-- Edit Name & Email -->
              <div class="contact-form">
                <form id="ajax-contact" method="post" action="send.php">
                  <div class="row">
                    <div class="col-md-6 ">
                      <form v-on:submit.prevent="submit()">
                        <ul>
                          <li class="text-danger" v-for="error in errors">
                            {{ error }}
                          </li>
                        </ul>
                        <div class="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="user.name"
                          />
                        </div>
                        <div class="form-group">
                          <label>Email:</label>
                          <input
                            type="email"
                            class="form-control"
                            v-model="user.email"
                          />
                        </div>
                        <!-- Create a submit button for username and email change -->
                        <!-- <input type="submit" class="btn btn-primary" value="Submit" /> -->
                        <br />

                        <!-- Test Code: Hide the list below for production -->

                        <!-- Look at submit button team changes only -->
                        <input
                          type="submit"
                          class="btn btn-primary"
                          value="Submit"
                        />
                        <router-link :to="`/users/${user.id}`">
                          <button>Cancel</button></router-link
                        >
                      </form>
                    </div>
                  </div>
                  <div id="form-messages"></div>
                </form>
              </div>
            </div>
          </div>
          <!-- EDIT INFO END -->
        </div>
      </div>
    </section>
    <!-- End Contact Area -->

    <br />

    <!-- League/Team Select -->
    <section class="news-area2">
      <div class="container">
        <div class="row">
          <!-- NFL -->
          <div class="col-lg-3 col-md-0">
            <div class="int-news">
              <div class="sec-title">
                <h5>NFL</h5>
              </div>
              <div>
                <div class="int-item">
                  <div class="int-lg">
                    <img src="" alt="" class="img-fluid" />
                    <div class="int-layer"></div>
                  </div>
                  <div class="int-list d-flex" v-for="team in teams">
                    <div class="int-img"></div>
                    <div class="img-content">
                      <div v-if="team.league == 'NFL'">
                        <input
                          type="checkbox"
                          :id="team.id"
                          :value="team.id"
                          v-model="checkedTeams"
                        />
                        <label :for="team.id">{{ team.name }} </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- NFL end -->
          <!-- NBA -->
          <div class="col-lg-3 col-md-0">
            <div class="int-news">
              <div class="sec-title">
                <h5>NBA</h5>
              </div>
              <div>
                <div class="int-item">
                  <div class="int-lg">
                    <img src="" alt="" class="img-fluid" />
                    <div class="int-layer"></div>
                  </div>
                  <div class="int-list d-flex" v-for="team in teams">
                    <div class="int-img"></div>
                    <div class="img-content">
                      <div v-if="team.league == 'NBA'">
                        <input
                          type="checkbox"
                          :id="team.id"
                          :value="team.id"
                          v-model="checkedTeams"
                        />
                        <label :for="team.id">{{ team.name }} </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- NBA end -->
          <!-- NHL -->
          <div class="col-lg-3 col-md-0">
            <div class="int-news">
              <div class="sec-title">
                <h5>NHL</h5>
              </div>
              <div>
                <div class="int-item">
                  <div class="int-lg">
                    <img src="" alt="" class="img-fluid" />
                    <div class="int-layer"></div>
                  </div>
                  <div class="int-list d-flex" v-for="team in teams">
                    <div class="int-img"></div>
                    <div class="img-content">
                      <div v-if="team.league == 'NHL'">
                        <input
                          type="checkbox"
                          :id="team.id"
                          :value="team.id"
                          v-model="checkedTeams"
                        />
                        <label :for="team.id">{{ team.name }} </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- NHL End -->
          <!-- MLB -->
          <div class="col-lg-3 col-md-0">
            <div class="int-news">
              <div class="sec-title">
                <h5>MLB</h5>
              </div>
              <div>
                <div class="int-item">
                  <div class="int-lg">
                    <img src="" alt="" class="img-fluid" />
                    <div class="int-layer"></div>
                  </div>
                  <div class="int-list d-flex" v-for="team in teams">
                    <div class="int-img"></div>
                    <div class="img-content">
                      <div v-if="team.league == 'MLB'">
                        <input
                          type="checkbox"
                          :id="team.id"
                          :value="team.id"
                          v-model="checkedTeams"
                        />
                        <label :for="team.id">{{ team.name }} </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- MLB End -->
        </div>
        <span>Checked names: {{ checkedTeams }}</span>
        <br />
      </div>
    </section>
    <!-- End League/Team Select -->

    <!-- Adding password change back to form once I decide the way i want it implemented.  Dont want to create new teams just for password. -->
    <!-- <div class="form-group">
      <label>Password:</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <div class="form-group">
      <label>Password confirmation:</label>
      <input
        type="password"
        class="form-control"
        v-model="passwordConfirmation"
      />
    </div>
    <div class="form-group">
      <label>Old Password:</label>
      <input type="password" class="form-control" v-model="oldPassword" />
    </div> -->
    <!-- End of Password change -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      // name: "",
      // email: "",
      // password: "",
      // passwordConfirmation: "",
      // oldPassword: "",
      errors: [],
      teams: [],
      checkedTeams: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$parent.getUserId()}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
      this.checkedTeams = this.user.teams.map((team) => team.id);
    });
    axios.get("/api/teams").then((response) => {
      this.teams = response.data;
      console.log(response.data);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email,
        // password: this.password,
        // password_confirmation: this.passwordConfirmation,
        // old_password: this.oldPassword,
        team_ids: this.checkedTeams,
      };
      axios
        .patch(`/api/users/${this.$parent.getUserId()}`, params)
        .then((response) => {
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
`/api/teams/${this.$route.params.id}`
