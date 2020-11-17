<template>
  <div class="users-show">
    <!-- From About Us Page -->
    <!-- About Area -->
    <section class="about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sec-top text-center">
              <h4>User Information</h4>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="about-box">
              <h4>
                Hello <span>{{ user.name }}</span>
              </h4>

              <h3>Email: {{ user.email }}</h3>
              <br />
              <a :href="`/users/${user.id}/edit`">UPDATE</a>
              <a href="#" v-on:click="deleteUser()">DELETE</a>
              <br />
              <br />
              <br />

              <h4>YOUR TEAMS</h4>
              <div v-for="team in user.teams">
                <h5>{{ team.name }}</h5>
                <br />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="about-img">
              <img
                src="https://images.unsplash.com/photo-1485400031595-976c74cf4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
        axios
          .delete(`/api/users/${this.$parent.getUserId()}`)
          .then((response) => {
            console.log("success", response.data);
            this.$router.push("/Logout");
          });
      }
    },
  },
};
</script>
