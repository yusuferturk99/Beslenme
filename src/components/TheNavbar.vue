<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="black">
    <b-navbar-brand href="#"><router-link to="anasayfa"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nu5wPVq5sYfY0jttl3KyGCXc8Qbx0iEzLg&usqp=CAU" class="img"></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav-collapse" right>
        <b-nav-item href="#"><router-link to="anasayfa" class="b-nav-item">Anasayfa</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="erkek" class="b-nav-item">Erkek</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="kadin" class="b-nav-item">Kadın</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="ekstra" class="b-nav-item">Ekstra</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="$store.state.loggedIn">
        <b-nav-item v-model="showFirstName"></b-nav-item>
        <b-nav-item><router-link to="profil" class="b-nav-item">Profil</router-link></b-nav-item>
        <b-nav-item @click="signOut">Çıkış Yap</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item href="#" right><router-link to="girisyap" class="b-nav-item">Giriş Yap</router-link></b-nav-item>
        <b-nav-item href="#" right><router-link to="kayitol" class="b-nav-item">Kaydol</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import { BNavbar } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    // showName(data) {
    //   this.$store.dispatch('onSubmitRegister', data)
    // },
    signOut() {
      this.$store.commit('signOut')
    },
    setupFirebase() {
      this.$store.commit('setupFirebase')
    },
    showFirstName(){
      this.$store.commit('showFirstName')
      }
  },
  mounted() {
    this.setupFirebase();
  },
};
</script>

<style scoped>
.b-nav-item {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
}
.img {
  width: 70px;
  margin-left: 10px;
}
</style>