<template>
  <div class="users-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Update User Information</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="user.name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="user.email" />
      </div>
      <!-- Create a submit button for username and email change -->
      <!-- <input type="submit" class="btn btn-primary" value="Submit" /> -->
      <br />

      <div v-for="team in teams">
        <input
          type="checkbox"
          :id="team.id"
          :value="team.id"
          v-model="checkedTeams"
        />
        <label :for="team.id">{{ team.name }}</label>
        <!-- <p>{{ team.name }}</p> -->
      </div>
      <br />
      <!-- Test Code: Hide the list below for production -->
      <span>Checked names: {{ checkedTeams }}</span
      ><br />
      <!-- Look at submit button team changes only -->
      <input type="submit" class="btn btn-primary" value="Submit" />
      <router-link :to="`/users/${user.id}`">
        <button>Cancel</button></router-link
      >
    </form>
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
    axios.get("/api/users/id").then((response) => {
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
        .patch("/api/users/id", params)
        .then((response) => {
          this.$router.push("/users/:id");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
