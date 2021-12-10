import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
