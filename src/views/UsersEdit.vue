<template>
  <div class="users-edit">
    <!-- Contact Area -->
    <section class="contact-area">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="get-in-touch">
              <div class="sec-title">
                <h5>EDIT INFORMATION</h5>
              </div>
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
                        <h4>NFL</h4>
                        <div v-for="team in teams">
                          <div v-if="team.league == 'NFL'">
                            <input
                              type="checkbox"
                              :id="team.id"
                              :value="team.id"
                              v-model="checkedTeams"
                            />
                            <label :for="team.id">{{ team.name }}</label>
                          </div>
                        </div>
                        <br />
                        <h4>NBA</h4>
                        <div v-for="team in teams">
                          <div v-if="team.league == 'NBA'">
                            <input
                              type="checkbox"
                              :id="team.id"
                              :value="team.id"
                              v-model="checkedTeams"
                            />
                            <label :for="team.id">{{ team.name }}</label>
                          </div>
                        </div>
                        <br />
                        <h4>MLB</h4>
                        <div v-for="team in teams">
                          <div v-if="team.league == 'MLB'">
                            <input
                              type="checkbox"
                              :id="team.id"
                              :value="team.id"
                              v-model="checkedTeams"
                            />
                            <label :for="team.id">{{ team.name }}</label>
                          </div>
                        </div>
                        <br />
                        <h4>NHL</h4>
                        <div v-for="team in teams">
                          <div v-if="team.league == 'NHL'">
                            <input
                              type="checkbox"
                              :id="team.id"
                              :value="team.id"
                              v-model="checkedTeams"
                            />
                            <label :for="team.id">{{ team.name }}</label>
                          </div>
                        </div>
                        <!-- Test Code: Hide the list below for production -->
                        <span>Checked names: {{ checkedTeams }}</span
                        ><br />
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
                    <div class="col-md-6"></div>
                    <div class="col-md-12"></div>
                    <div class="col-md-12"></div>
                  </div>
                  <div id="form-messages"></div>
                </form>
              </div>
            </div>
          </div>
          <!-- EDIT INFO END -->
          <!-- CONTACT INFO BLOCK - TEAM SELECT -->

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
                        src="https://images.unsplash.com/photo-1590372447928-33080a2b401a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                <div class="col-md-12">
                  <div class="social"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- CONTACT INFO - TEAM SELECT END -->
        </div>
      </div>
      <div id="map"></div>
    </section>
    <!-- End Contact Area -->

    <br />
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
