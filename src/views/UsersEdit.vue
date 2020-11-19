<template>
  <div class="users-edit">
    <!-- Contact Area -->
    <section class="contact-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="get-in-touch">
              <div class="sec-title">
                <br />
                <h5>EDIT INFORMATION</h5>
              </div>
              <!-- Edit Name & Email -->
              <div class="contact-form">
                <form id="ajax-contact" method="post" action="send.php">
                  <div class="row">
                    <div class="col-md-6 ">
                      <form v-on:submit.prevent="submit()">
                        <ul>
                          <li class="text-warning" v-for="error in errors">
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
                        <br />
                      </form>
                      <section class="about-us">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="about-box">
                                <a href="#" v-on:click="submit()">SUBMIT</a
                                >&nbsp;
                                <a href="#" v-on:click="changePassword()"
                                  >UPDATE PASSWORD</a
                                >&nbsp;
                                <a href="#" v-on:click="cancel()">CANCEL</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <!-- <div id="form-messages"></div> -->
                </form>
              </div>
            </div>
          </div>
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
        <!-- Sanity Check for checked teams -->
        <!-- <span>Checked names: {{ checkedTeams }}</span>
        <br /> -->
        <!-- Sanity Check End -->
      </div>
    </section>
    <!-- End League/Team Select -->

    <!-- Adding password change back to form once I decide the way i want it implemented.  Dont want to create new teams just for password. -->
    <dialog id="password-change">
      <form method="dialog">
        <h2>Password Change</h2>
        <p>(only updates if passwords match)</p>
        <br />
        <!-- <div class="form-group">
          <label>Old Password:</label>
          <input type="password" class="form-control" v-model="oldPassword" />
        </div> -->
        <div class="form-group">
          <ul>
            <li class="text-warning" v-for="error in errors">
              {{ error }}
            </li>
          </ul>
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
          <!-- Only makes update button visible if password and pwconf match, and PW is not null -->
          <button
            v-if="
              `${password}` === `${passwordConfirmation}` && `${password}` != ''
            "
            v-on:click="updatePassword()"
          >
            Update Password
          </button>
          <button>
            Cancel
          </button>
        </div>
      </form>
    </dialog>
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
      password: "",
      passwordConfirmation: "",
      oldPassword: "",
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
    cancel: function() {
      this.$router.push(`/users/${this.$parent.getUserId()}`);
    },
    changePassword: function() {
      console.log("Change PW button works");
      document.querySelector("#password-change").showModal();
    },
    updatePassword: function() {
      console.log("Update Password button works");
      var params = {
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        // old_password: this.oldPassword,
      };
      axios
        .patch(`/api/users/${this.$parent.getUserId()}`, params)
        .then((response) => {
          // Currenly pushing to UserShow, but may want to LOGOUT instead
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
