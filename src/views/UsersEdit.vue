<template>
  <div class="users-edit">
    <h1>UPDATE USER</h1>

    <p>{{ user_info }}</p>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Update User Information</h1>
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
        <label>Teams:</label>
        <input type="text" class="form-control" v-model="teams" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user_info: {},
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      // team_ids: [],
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/users/1").then((response) => {
      console.log(response.data);
      this.user_info = response.data;
    });
  },
  // methods: {
  //   submit: function() {
  //     var params = {
  //       name: this.name,
  //       email: this.email,
  //       password: this.password,
  //       password_confirmation: this.passwordConfirmation,
  //       // team_ids: this.teams,
  //     };
  //     axios
  //       .post("/api/users", params)
  //       .then((response) => {
  //         this.$router.push("/login");
  //       })
  //       .catch((error) => {
  //         this.errors = error.response.data.errors;
  //       });
  //   },
  // },
};
</script>
