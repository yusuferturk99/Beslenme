import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './index'
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import { BSidebar } from 'bootstrap-vue'
import { SidebarPlugin } from 'bootstrap-vue'
import { BNavbar } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)


const firebaseConfig = {
  apiKey: "AIzaSyDIz6lpukIk7JpHEIbRe0sfjIVFOtT0Cts",
  authDomain: "beslenme-70322.firebaseapp.com",
  databaseURL: "https://beslenme-70322.firebaseio.com",
  projectId: "beslenme-70322",
  storageBucket: "beslenme-70322.appspot.com",
  messagingSenderId: "1015710356771",
  appId: "1:1015710356771:web:f2af195ce997f1777d6896"
};

firebase.initializeApp(firebaseConfig);

Vue.use(NavbarPlugin)

Vue.component('b-navbar', BNavbar)

Vue.use(SidebarPlugin)

Vue.component('b-sidebar', BSidebar)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// push the user /girisyap page if not signed in, otherwise let the user in entering /ekstra page
router.beforeEach((to, from, next) => {
  if (to.path === '/girisyap' && firebase.auth().currentUser) {
    next('/ekstra')
  } else if (to.path === '/ekstra' && !firebase.auth().currentUser) {
    next('/girisyap')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/girisyap' && firebase.auth().currentUser) {
    next('/profil')
  } else if (to.path === '/profil' && !firebase.auth().currentUser) {
    next('/girisyap')
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
