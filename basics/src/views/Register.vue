<template>
    <div class="register-box">
        <div v-if= "error" class= "error">{{error.message}}</div>
        <form @submit.prevent = "pressed">
            <h1 class= "register-title">Register</h1>
            <div class="form-group">
                <label>Email address</label>
                <input type="email"  v-model = "email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Username</label>
                <input type="username" v-model = "username" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model = "password" class="form-control form-control-lg" />
            </div>
            <div class = "register-signup-btn">
            <label id = "login-btn"> Have An Account? Click Here to <router-link to= "/login">login.</router-link> </label>
            <button type="submit" class="btn btn-dark btn-lg btn-block" id ="register-btn">Register</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">

@import "@/styles/Register.scss";
  
</style>

<script>
import firebase from 'firebase'
require('firebase/auth')

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "Home" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>