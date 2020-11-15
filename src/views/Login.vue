<template>
  <div class="login">
    <!-- Slider Area 3 -->
    <section class="slider-area3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 slider-fix">
            <div class="owl-slider owl-carousel">
              <div class="slider-content">
                <img
                  src="https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  class="img-fluid"
                />
                <div class="slider-layer">
                  <form v-on:submit.prevent="submit()">
                    <h1>Login</h1>
                    <ul>
                      <li class="text-danger" v-for="error in errors">
                        {{ error }}
                      </li>
                    </ul>
                    <div class="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                      />
                    </div>
                    <div class="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="password"
                      />
                    </div>
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="Submit"
                    />
                    <router-link to="/Signup">
                      <button>New User</button></router-link
                    >
                  </form>
                </div>
              </div>
              <div class="slider-content">
                <img src="" alt="" class="img-fluid" />
                <div class="slider-layer">
                  <p>
                    <a href=""></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 sidebar-fix">
            <div class="slider-sidebar">
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid"
              />
              <div class="sidebar-layer"></div>
            </div>
            <div class="slider-sidebar">
              <img
                src="https://images.unsplash.com/photo-1449356669056-f1c1e6e56b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid"
              />
              <div class="sidebar-layer"></div>
            </div>
          </div>
          <div class="col-md-3 sidebar-fix2">
            <div class="slider-sidebar">
              <img
                src="https://images.unsplash.com/photo-1546897134-ccace13b9608?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid"
              />
              <div class="sidebar-layer"></div>
            </div>
            <div class="slider-sidebar">
              <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="img-fluid"
              />
              <div class="sidebar-layer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Slider Area 3 -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/user_teams");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
