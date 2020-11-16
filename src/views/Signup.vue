<template>
  <div class="signup">
    <!-- Contact Area -->
    <section class="contact-area">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="get-in-touch">
              <div class="sec-title">
                <h5>NEW USER SIGNUP</h5>
              </div>
              <div class="contact-form">
                <form v-on:submit.prevent="submit()">
                  <h1>Signup</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <label>Name:</label>
                    <input type="text" class="form-control" v-model="name" />
                  </div>
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                  <div class="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password confirmation:</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="passwordConfirmation"
                    />
                  </div>

                  <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
              </div>
            </div>
          </div>

          <!-- Right side contact info  -->
          <div class="col-md-5">
            <div class="contact-info">
              <!-- <div class="sec-title">
                <h5>Contact Info</h5>
              </div> -->

              <div class="row">
                <div class="col-md-12">
                  <div class="contact-box d-flex">
                    <div class="contact-content">
                      <img
                        src="https://images.unsplash.com/photo-1590502178797-a7ed0833a02f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="contact-box d-flex"></div>
                </div>
                <div class="col-md-12">
                  <div class="contact-box d-flex">
                    <img
                      src="https://images.unsplash.com/photo-1568377304536-1799f397d261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right side end -->
        </div>
      </div>
    </section>
    <!-- End Contact Area -->
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      teams: [],
      checkedTeams: [],
    };
  },
  created: function() {
    axios.get("/api/teams").then((response) => {
      console.log(response.data);
      this.teams = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        team_ids: this.checkedTeams,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
