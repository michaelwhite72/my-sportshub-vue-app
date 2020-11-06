import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UserTeamsIndex from "../views/UserTeamsIndex.vue";
import TeamsIndex from "../views/TeamsIndex.vue";
import TeamsShow from "../views/TeamsShow.vue";
import UsersShow from "../views/UsersShow.vue";
import UsersEdit from "../views/UsersEdit.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup, ',
    component: Signup
  },
  {
    path: '/login',
    name: 'login, ',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout, ',
    component: Logout
  },
  {
    path: '/user_teams',
    name: 'user-teams, ',
    component: UserTeamsIndex
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamsIndex
  },
  {
    path: '/teams/:id',
    name: 'teams-show',
    component: TeamsShow
  },
  {
    path: '/users/:id',
    name: 'users-show',
    component: UsersShow
  },
  {
    path: '/users/:id/edit',
    name: 'users-edit',
    component: UsersEdit
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
