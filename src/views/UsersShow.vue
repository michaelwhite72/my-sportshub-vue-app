<template>
  <div class="users-show">
    <h1>User Information</h1>

    <p>{{ user }}</p>
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
};
</script>
