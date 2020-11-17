<template>
  <div id="app">
    <!-- Top Bar -->
    <section class="top-bar" id="btt">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="bar-left">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <i class="fa fa-calendar"></i>{{ relativeDate(Date()) }}
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-cloud"></i>Kyle, TX, 76°F
                </li>
                <!-- <li class="list-inline-item"><a href="">Advertise</a></li>
                <li class="list-inline-item"><a href="">Write Us</a></li>
                <li class="list-inline-item"><a href="">About</a></li>
                <li class="list-inline-item"><a href="">Contact</a></li> -->
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bar-social text-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-google-plus"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-rss"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Top Bar -->
    <!-- Menu Area -->
    <section class="menu-area">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="main-menu">
              <ul class="list-unstyled list-inline">
                <!-- <li class="list-inline-item">
                  <router-link to="/">Home</router-link>
                </li> -->
                <li v-if="isLoggedIn()" class="list-inline-item">
                  <router-link to="/user_teams">Home</router-link>
                </li>
                <li class="list-inline-item">
                  <router-link to="/teams">All Teams</router-link>
                </li>
                <li v-if="!isLoggedIn()" class="list-inline-item">
                  <router-link to="/Login">Login </router-link>
                </li>
                <li v-if="!isLoggedIn()" class="list-inline-item">
                  <router-link to="/Signup">New User</router-link>
                </li>
                <li v-if="isLoggedIn()" class="list-inline-item">
                  <router-link :to="`/users/${getUserId()}`">
                    Show User Info</router-link
                  >
                </li>
                <li v-if="isLoggedIn()" class="list-inline-item">
                  <router-link to="/Logout"> Logout</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="clock text-right">
              <span id="dg-clock"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Menu Area -->
    <!-- Mobile Menu -->
    <section class="mobile-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mobile-menu">
              <nav id="dropdown">
                <a href=""><img src="" alt=""/></a>
                <ul class="list-unstyled">
                  <li></li>
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link to="/user_teams">My Teams</router-link>
                  </li>
                  <li>
                    <router-link to="/teams">All Teams</router-link>
                  </li>
                  <li v-if="!isLoggedIn()">
                    <router-link to="/Login">Login </router-link>
                  </li>
                  <li v-if="!isLoggedIn()">
                    <router-link to="/Signup">New User</router-link>
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link to="/Logout"> Logout</router-link>
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link :to="`/users/${getUserId()}`">
                      Show User Info</router-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Mobile Menu -->

    <router-view />
    <!-- Footer Area -->
    <footer class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="f-about">
              <img
                src="https://alcalde.texasexes.org/wp-content/uploads/2013/01/Tower_MarshaMiller.jpg"
                alt=""
              />
              <p>
                This application was created to provide the average fan a
                location to view the select their favorite sports team(s), and
                have quick access viewing of the schedule, stats, and latest
                news in one convenient location.
              </p>
              <ul class="list-unstyled f-contact">
                <li><i class="fa fa-map-marker"></i>Kyle, TX 78740</li>
                <li><i class="fa fa-envelope"></i>mwhite7372@gmail.com</li>
                <li><i class="fa fa-phone"></i>not available</li>
              </ul>
              <ul class="list-unstyled list-inline f-social">
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-google-plus"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-rss"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="f-service">
              <div class="sec-title">
                <h5>Current leagues</h5>
              </div>
              <ul class="list-unstyled service-list">
                <li>
                  <a href="https://www.nfl.com/" target="_blank"
                    ><i class="fa fa-angle-right"></i>National Football League
                  </a>
                </li>
                <li>
                  <a href="https://www.nba.com/" target="_blank"
                    ><i class="fa fa-angle-right"></i>National Basketball League
                  </a>
                </li>
                <li>
                  <a href="https://www.nhl.com/" target="_blank"
                    ><i class="fa fa-angle-right"></i>National Hockey League
                  </a>
                </li>
                <li>
                  <a href="https://www.mlb.com/" target="_blank"
                    ><i class="fa fa-angle-right"></i>Major League Baseball
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="f-service">
              <div class="sec-title">
                <h5>Coming Soon</h5>
              </div>
              <ul class="list-unstyled service-list">
                <li>
                  <a
                    href="https://www.ncaa.com/sports/football/fbs/"
                    target="_blank"
                    ><i class="fa fa-angle-right"></i>NCAA Football (FBS)</a
                  >
                </li>
                <li>
                  <a href="https://www.mls.com/" target="_blank"
                    ><i class="fa fa-angle-right"></i>Major League Soccer
                    (MLS)</a
                  >
                </li>
                <li>
                  <a href="https://www.premierleague.com/" target="_blank"
                    ><i class="fa fa-angle-right"></i>Premier League Soccer</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-12">
            <div class="f-menu d-flex justify-content-between">
              <a href="">About Us</a>
              <a href="">Archives</a>
              <a href="">Terms & Condition</a>
              <a href="">Privacy Policy</a>
              <a href="">Rss</a>
              <a href="">Apps</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer Area -->
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: function() {
    return {};
  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    dateCompare: function(date) {
      return new Date();
    },
  },
};
</script>
