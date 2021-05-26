<template>
  <div class="login-box">
    <form>
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="pressed">
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg"
            aria-labelledby=""
            
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control form-control-lg"
            aria-labelledby=""
            
          />
        </div>
        <div class="login-signup-btn">
          <label id="signUp-btn">
            Need An Account? Click Here to
            <router-link to="/register">register.</router-link>
          </label>
          <button
            type="submit"
            class="btn btn-dark btn-lg btn-block"
            id="register-btn"
          >
            Login
          </button>
        </div>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
    </form>
  </div>
</template>

<style lang="scss">

@import "@/styles/Login.scss";

</style>

<script>
import firebase from "firebase";
require("firebase/auth");

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "Home" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
