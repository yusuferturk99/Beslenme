import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    normalKalori: Number,
    çokKalori: Number,
    azKalori: Number,
    loggedIn: false,
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    arePasswordsSame: false,
    type: 'password',
    type1: 'password',
    type2: 'password',
    btnText: 'Şifreyi Göster',
    btnText1: 'Şifreyi Göster',
  },
  getters: {
    
  },
  mutations: {
    showFirstName(state, payload) {
      firebase.database().ref('users/' + payload.uid).once('value').then(function(snapshot) {
        state.firstName = snapshot.val().firstName
      })
    },
    signOut(state) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "anasayfa" });
        });
          state.loggedIn = false;
    },
      setupFirebase(state) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          state.loggedIn = true;
        } else {
          // No user is signed in.
          state.loggedIn = false;
          console.log("signed out");
        }
      });
    },
    login (state) {
      firebase.auth().signInWithEmailAndPassword(state.email, state.password).then(
      user => {
          state.loggedIn = true;
          alert("Your have entered your account!");
          console.log(user.data);
          // this.$router.replace({ name: "anasayfa" });
      },
      err => {
          state.loggedIn = false;
          alert(err);
      });
    },
    register (state) {
      if (this.password !== this.confirmPassword) {
        setTimeout(() => {
          state.arePasswordsSame = true
          state.loggedIn = false;
        },);
        setTimeout(() => {
          state.arePasswordsSame = false
          state.loggedIn = false;
        }, 5000);
      } else {
           firebase
           .auth()
           .createUserWithEmailAndPassword(state.email, state.password)
           .then(
           user => {
               alert("Your account has been created!");
               console.log(user.data);
           },
           err => {
               state.loggedIn = false;
               alert(err);
           });
         }
       },
  },
  actions: {
  
  }
})