<template>
  <div id="login">
    <div class="login-form">
      <form @submit.prevent="onSubmitLogin">
        <label for="email">Email</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input type="email" id="email" v-model="$store.state.email"></b-form-input>
        </b-input-group>
        <label for="password">Şifre</label>
        <b-input-group class="mb-3 mt-3">
          <b-form-input :type="$store.state.type2" id="password" v-model="$store.state.password"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-dark"><b-icon-eye-fill @click="showPassword2"></b-icon-eye-fill></b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="submit">
          <button @click="login" type="submit">Gönder</button>
        </div>
      </form>
      <p><router-link to="/anasayfa">Anasayfa</router-link>'ya dön.</p>
      <p>
        Hesabınız yok mu? <router-link to="/kayitol">Kaydolun!</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    onSubmitLogin() {
      const formData = {
        email: this.$store.state.email,
        password: this.$store.state.password,
      };
      console.log(formData);
    },
    showPassword2() {
      if (this.$store.state.type2 === "password") {
        this.$store.state.type2 = "text";
        this.$store.state.btnText = "Şifreyi gösterme";
      } else {
        this.$store.state.type2 = "password";
        this.$store.state.btnText = "Şifreyi göster";
      }
    },
    login() {
      this.$store.commit("login");
    },
  },
};
</script>

<style scoped>
.login-form {
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

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
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