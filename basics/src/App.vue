<template>
  <div id="app">
    <top-header></top-header>
      <div id="nav">
        <router-link to="/">Logo</router-link> |
        <router-link to="/login">Login </router-link> |
        <router-link to="/about">Profile </router-link> |
        <router-link to="/secret"> Secret </router-link>

      </div>
    <router-view />
  </div>
</template>

<script> 
import TopHeader from "./components/Top-Header"
export default {
  components: {'top-header': TopHeader}
}
</script>

<style lang="scss">

</style>
