<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
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
        <h3>Teams:</h3>
        <!-- Teams checkbox Method below -->
      </div>
      <div v-for="team in teams">
        <input
          type="checkbox"
          :id="team.id"
          :value="team.id"
          v-model="checkedTeams"
        />
        <label :for="team.id">{{ team.name }}</label>
      </div>
      <br />
      <!-- End team Checkbox method -->

      <!-- Sanity Check below, verify correct teams are being selected above.  Remove from final release -->
      <span>Checked Teams: {{ checkedTeams }}</span
      ><br />
      <!-- Sanity Check end -->

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
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
