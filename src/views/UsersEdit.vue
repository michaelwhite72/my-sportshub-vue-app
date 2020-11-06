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

      <div class="form-group" v-for="team in user.teams">
        <label>{{ team.name }}</label>
        <input type="checkbox" class="form-control" v-model="team.name" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <br />

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
      // team_ids: [],
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$parent.getUserId()}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
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
        // team_ids: this.teams,
      };
      axios
        .patch(`/api/users/${this.$parent.getUserId()}`, params)
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
