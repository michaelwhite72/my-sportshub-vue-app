<template>
  <!-- Slider Area 2 -->
  <section class="slider-area2">
    <div class="container">
      <div class="row">
        <!-- Latest News on right -->
        <div class="col-lg-3 col-md-0">
          <div class="latest-nws">
            <div class="sec-title">
              <h2>My Teams<i class=""></i></h2>
            </div>
            <br />
            <br />

            <div v-for="team in team_hash" class="lt-box">
              <div class="lt-img">
                <a href="#"
                  ><router-link tag="h3" :to="`/teams/${team.id}`"
                    >{{ team.name }}
                  </router-link></a
                >
                <img :src="team.logo" alt="" class="img-fluid" />
              </div>
              <div class="img-content">
                <!-- <p>
                    <a href=""
                      >These sentences are selected from various online
                      news....</a
                    >
                  </p> -->
                <!-- <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">FOOD</li>
                    <li class="list-inline-item">September 24, 2017</li> -->
                <!-- </ul> -->
              </div>
            </div>
          </div>
        </div>
        <!-- Latest News end -->
        <div class="col-lg-8 ">
          <div class="owl-slider owl-carousel"></div>
          <div class="pop-news2">
            <div class="row">
              <div class="col-md-6">
                <div class="pop-box">
                  <div class="pop-img">
                    <a href="#"
                      ><img src="images/popular-2.jpg" alt="" class="img-fluid"
                    /></a>
                  </div>
                  <div class="img-content">
                    <p>
                      <a href=""
                        >These sentences are selected from various online
                        news....</a
                      >
                    </p>
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">FOOD</li>
                      <li class="list-inline-item">September 24, 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pop-box">
                  <div class="pop-img">
                    <a href="#"
                      ><img src="images/popular-3.jpg" alt="" class="img-fluid"
                    /></a>
                  </div>
                  <div class="img-content">
                    <p>
                      <a href=""
                        >These sentences are selected from various online
                        news....</a
                      >
                    </p>
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">FOOD</li>
                      <li class="list-inline-item">September 24, 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pop-box">
                  <div class="pop-img">
                    <a href="#"
                      ><img src="images/popular-4.jpg" alt="" class="img-fluid"
                    /></a>
                  </div>
                  <div class="img-content">
                    <p>
                      <a href=""
                        >These sentences are selected from various online
                        news....</a
                      >
                    </p>
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">FOOD</li>
                      <li class="list-inline-item">September 24, 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pop-box">
                  <div class="pop-img">
                    <a href="#"
                      ><img src="images/popular-6.jpg" alt="" class="img-fluid"
                    /></a>
                  </div>
                  <div class="img-content">
                    <p>
                      <a href=""
                        >These sentences are selected from various online
                        news....</a
                      >
                    </p>
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">FOOD</li>
                      <li class="list-inline-item">September 24, 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pop-box">
                  <div class="pop-img">
                    <a href="#"
                      ><img src="images/popular-7.jpg" alt="" class="img-fluid"
                    /></a>
                  </div>
                  <div class="img-content">
                    <p>
                      <a href=""
                        >These sentences are selected from various online
                        news....</a
                      >
                    </p>
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">FOOD</li>
                      <li class="list-inline-item">September 24, 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pop-box">
                  <div class="pop-img">
                    <a href="#"
                      ><img src="images/popular-8.jpg" alt="" class="img-fluid"
                    /></a>
                  </div>
                  <div class="img-content">
                    <p>
                      <a href=""
                        >These sentences are selected from various online
                        news....</a
                      >
                    </p>
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">FOOD</li>
                      <li class="list-inline-item">September 24, 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Slider Area 2 -->
</template>
