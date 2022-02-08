import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import AppLayout from './layouts/App.vue'
import PublicLayout from './layouts/Public.vue'
// import TheAuthorized from './components/TheAuthorized.vue'
// import firebase from 'firebase'
import TheProfile from './components/TheProfile.vue'
import TheLogin from './components/TheLogin.vue'
import TheRegistration from './components/TheRegistration.vue'
import CalculateMan from "./components/CalculateMan.vue"
import CalculateWoman from "./components/CalculateWoman.vue"
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/anasayfa', meta: {
        requiresAuth: false
    }},
    {name: 'anasayfa', path: '/anasayfa', component: AppLayout, children: [{path: "", component: HomePage}], meta: {
        requiresAuth: false
    }},
    {path: '/ekstra', name: 'ekstra', component: () => import('./components/TheAuthorized.vue'), meta: {
            pageTitle: 'Yetkili Kişiler Girebilir',
            rule: 'Yetki',
            requiresAuth: true
        }
    },
    {name: '/profil', path: '/profil', component: AppLayout, children: [{path: "", component: TheProfile}], meta: {
        requiresAuth: false
    }},
    {name: '/girisyap', path: '/girisyap', component: PublicLayout, children: [{path: "", component: TheLogin}], meta: {
        requiresAuth: false
    }},
    {path: '/kayitol', component: PublicLayout, children: [{path: "", component: TheRegistration}], meta: {
        requiresAuth: false
    }},
    {path: '/erkek', component: AppLayout, children: [{path: "", component: CalculateMan}], meta: {
        requiresAuth: false
    }},
    {path: '/kadin', component: AppLayout, children: [{path: "", component: CalculateWoman}], meta: {
        requiresAuth: false
    }},
    {path: '*', component: AppLayout, children: [{path: "", component: NotFound}], meta: {
        requiresAuth: false
    }},
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })


  
  export default router  