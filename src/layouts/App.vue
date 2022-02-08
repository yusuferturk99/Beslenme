<template>
  <div>
    <the-navbar></the-navbar>
    <div>
      <transition name="fade">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";

export default {
  name: "AppLayout",
  components: {
    TheNavbar,
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>