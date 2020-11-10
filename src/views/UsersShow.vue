<template>
  <div class="users-show">
    <h1>User Information</h1>

    <h3>Name: {{ user.name }}</h3>
    <h3>Email: {{ user.email }}</h3>
    <h4>Favorite Teams</h4>
    <div v-for="team in user.teams">
      <p>{{ team.name }}</p>
    </div>
    <router-link :to="`/users/${user.id}/edit`">
      <button>Update</button></router-link
    >
    <button v-on:click="deleteUser()">Delete</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$parent.getUserId()}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    deleteUser: function() {
      if (confirm("Are you sure you want to delete this user?")) {
        axios.delete(`/api/users/${this.user.id}`).then((response) => {
          console.log("success", response.data);
          this.$router.push("/Logout");
        });
      }
    },
  },
};
</script>
