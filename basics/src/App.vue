<template>
  <div id="app">
    <top-header></top-header>
      <div id="nav">
        <router-link to="/" >Logo</router-link> |
        <router-link to="/login" v-if="!loggedIn">Login </router-link> |
        <router-link to="/secret"> Secret </router-link> |
        <router-link to="/profile" v-if="loggedIn"> Profile </router-link> |
       <router-link to="/profileOther"> Profile2 </router-link>
    
      </div>
    <router-view />
  </div>
</template>

<script> 

import firebase from "firebase/app";
import TopHeader from "./components/Top-Header"
export default {
  components: {'top-header': TopHeader},
  mounted(){
    this.getUserStatus();
  },
  methods:{
    getUserStatus(){
      this.loggedIn = firebase.auth().currentUser
      console.log(this.loggedIn);
    }
  },
  data() {
    
    return {
      loggedIn: false
    };
  }
}
</script>

<style lang="scss">

@import "@/styles/App.scss";

</style>