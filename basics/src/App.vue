<template>
  <div id="app">
    <top-header></top-header>
      <div id="nav">
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

@import "@/styles/App.scss";

</style>