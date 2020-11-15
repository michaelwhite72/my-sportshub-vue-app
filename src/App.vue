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
                  <i class="fa fa-calendar"></i>{{ Date() }}
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
          <div class="col-md-3">
            <div class="f-about">
              <img src="images/f-logo.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectet adipisicing elit. Saepe
                porro neque a nam nulla quos atque.
              </p>
              <ul class="list-unstyled f-contact">
                <li>
                  <i class="fa fa-map-marker"></i>795 South Park Avenue, CA
                  94107
                </li>
                <li><i class="fa fa-envelope"></i>enquery@domain.com</li>
                <li><i class="fa fa-phone"></i>+1 908 875 7678</li>
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
          <div class="col-md-3">
            <div class="f-service">
              <div class="sec-title">
                <h5>Services</h5>
              </div>
              <ul class="list-unstyled service-list">
                <li>
                  <a href=""><i class="fa fa-angle-right"></i>Advertisement</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-angle-right"></i>Work for us</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-angle-right"></i>Post a deal</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-angle-right"></i>Agreements</a>
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-angle-right"></i>Sms subscription</a
                  >
                </li>
                <li>
                  <a href=""><i class="fa fa-angle-right"></i>Conference</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-angle-right"></i>Donate us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="f-post">
              <div class="sec-title">
                <h5>Latest Post</h5>
              </div>
              <div class="post-box d-flex">
                <div class="post-img">
                  <a href=""><img src="images/post1.jpg" alt=""/></a>
                </div>
                <div class="post-con">
                  <p><a href="#">Lorem ipsum dolor sit...</a></p>
                  <span>Feb 11, 2019</span>
                </div>
              </div>
              <div class="post-box d-flex">
                <div class="post-img">
                  <a href=""><img src="images/post2.jpg" alt=""/></a>
                </div>
                <div class="post-con">
                  <p><a href="#">Lorem ipsum dolor sit...</a></p>
                  <span>Feb 11, 2019</span>
                </div>
              </div>
              <div class="post-box d-flex">
                <div class="post-img">
                  <a href=""><img src="images/post3.jpg" alt=""/></a>
                </div>
                <div class="post-con">
                  <p><a href="#">Lorem ipsum dolor sit...</a></p>
                  <span>Feb 11, 2019</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="f-newsltr">
              <div class="sec-title">
                <h5>Newsletter</h5>
              </div>
              <form class="news-letter" action="#">
                <input
                  type="text"
                  name="name"
                  value=""
                  placeholder="Your name"
                />
                <input
                  type="text"
                  name="email"
                  value=""
                  placeholder="Your email address"
                />
                <button type="button" name="button">Register</button>
              </form>
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
  },
};
</script>
