<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmitRegister">
        <label for="email">Email</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input type="email" id="email" v-model="$store.state.email"></b-form-input>
        </b-input-group>
        <label for="password">Şifre</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input :type="$store.state.type" id="password" v-model="$store.state.password"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-dark"><b-icon-eye-fill @click="showPassword"></b-icon-eye-fill></b-button>
          </b-input-group-append>
        </b-input-group>
        <label for="confirm-password">Tekrar Şifre Giriniz</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input :type="$store.state.type1" id="confirm-password" v-model="$store.state.confirmPassword"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-dark"><b-icon-eye-fill @click="showPassword1"></b-icon-eye-fill></b-button>
          </b-input-group-append>
        </b-input-group>
        <!-- <b-input-group class="mb-3 mt-3">
          <b-form-input :type="$store.state.type" id="password" v-model="$store.state.password"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-dark"><b-icon-eye-fill @click="showPassword"></b-icon-eye-fill></b-button>
          </b-input-group-append>
        </b-input-group> -->
        <!-- <div class="input">
          <label for="password">Şifre</label>
          <input
                  :type="type"
                  id="password"
                  v-model="password"><button style="font-size: 11px" @click="showPassword">{{ btnText }}</button>
        </div>
        <div class="input">
          <label for="confirm-password">Tekrar Şifre Giriniz</label>
          <div style="">
          <input
                  :type="type1"
                  id="confirm-password"
                  v-model="confirmPassword"
                  style="display: inline-block"><button style="font-size: 11px; display: inline-block" @click="showPassword1">{{ btnText1 }}</button></div>
        </div> -->
        <!-- <label for="first-name">İsim</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input type="name" id="first-name" v-model="$store.state.firstName"></b-form-input>
        </b-input-group>
        <label for="last-name">Soyisim</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input type="name" id="last-name" v-model="$store.state.lastName"></b-form-input>
        </b-input-group> -->
                <div class="input">
          <label for="first-name">İsim</label>
          <input
                  type="name"
                  id="first-name"
                  v-model="$store.state.firstName">
        </div>
        <div class="input">
          <label for="last-name">Soyisim</label>
          <input
                  type="name"
                  id="last-name"
                  v-model="$store.state.lastName">
        </div>
        <div class="submit">
          <button @click="register" type="submit">Gönder</button>
          <button @click="postUserData" type="submit">Gönder</button>
        </div>
      </form>
      <p style="color: red;" v-show="$store.state.arePasswordsSame" >Şifre kutucuklarındaki şifreler aynı değil.</p>
      <p>
        <router-link to="/anasayfa">Anasayfa</router-link>'ya dön.
      </p>
      <p>
        Hesabınız var mı? <router-link to="/girisyap">Giriş yapın!</router-link>
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    },
    methods: {
      onSubmitRegister () {
        const formData = {
          email: this.$store.state.email,
          password: this.$store.state.password,
          confirmPassword: this.$store.state.confirmPassword,
          firstname: this.$store.state.firstName,
          lastname: this.$store.state.lastName,
        }
        console.log(formData)
      },
      showPassword() {
       if(this.$store.state.type === "password") {
          this.$store.state.type = 'text'
          this.$store.state.btnText = 'Şifreyi gösterme'
       } else {
          this.$store.state.type = "password"
          this.$store.state.btnText = 'Şifreyi göster'
       }
     },
     showPassword1() {
       if(this.$store.state.type1 === 'password') {
          this.$store.state.type1 = 'text'
          this.$store.state.btnText1 = 'Şifreyi gösterme'
       } else {
          this.$store.state.type1 = 'password'
          this.$store.state.btnText1 = 'Şifreyi göster'
       }
     },
     register () {
       this.$store.commit('register')
    },
    postUserData () {
      this.$http.post('https://beslenme-70322-default-rtdb.firebaseio.com/users.json', {
        firstname: this.$store.state.firstName,
        lastname: this.$store.state.lastName,
      }).then(function(data){
        console.log(data);
      })
    },
  }
}
</script>

<style scoped>
  .signup-form {
    width: 350px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>