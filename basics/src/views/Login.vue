<template>
    <div class="login-box">
        <form>
            <h1 class= "login-title">Login</h1>
            <form @submit.prevent = "pressed">
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model= "email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model= "password" class="form-control form-control-lg" />
            </div>
            <div class = "login-signup-btn">
            <label id = "signUp-btn"> Need An Account? Click Here <router-link to= "/register">register.</router-link> </label>
            <button type="submit" class="btn btn-dark btn-lg btn-block" id ="register-btn">Login</button>
            </div>
            </form>
            <div class="error" v-if="error">{{error.message}}</div>
        </form>
    </div>
</template>

<style>
  .login-box {
    width: 90vh;
    margin: auto;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    padding: 2rem;
    margin-top: 8%;
  }
  
  .login-title {
    text-align: center;
  }

  .login-signup-btn{
    display: flex;
    flex-direction: row;
  }
  #login-btn {
    width: 40%;
  }
  #signUp-btn {
    width: 60%;
  }
</style>

<script>
import firebase from 'firebase'
require('firebase/auth')

    export default {
        data(){
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
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "secret" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
