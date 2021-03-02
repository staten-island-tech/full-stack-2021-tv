<template>
  <section class="home-page">
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed"></p>
      <p id="banner-profile-empty-space"></p>
      <p id="settings"></p>
    </section>

    <section class="feed">
      <div class="post">
        <div class="post-button">...</div>
      </div>
      <i id= "likes" class="fas fa-heart"></i>
      <div class="description">
        <router-link to="/ProfileOther" class="username"> Name : </router-link>
        <p class="caption">caption</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-banner-profile {
  height: 6rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#logo-for-feed {
  width: 5%;
  border: 2px solid;
}

#banner-profile-empty-space {
  width: 90%;
  border: 2px solid;
  border-left: none;
}

#settings {
  width: 5%;
  border: 2px solid;
  border-left: none;
}

.feed {
  width: 90%;
  border: 1px solid;
  height: 50rem;
  margin: auto;
}

.post {
  border: 1px solid;
  height: 30rem;
  margin: 1rem;
  margin-bottom: 0;
}

.post-button {
  float: right;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  border: 1px solid;
  text-align: center;
  border-top: none;
  border-right: none;
}

.description {
  height: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 2px;
  padding-top: 0rem;
}
.username {
  font-size: 1.5rem;
}

.caption {
  font-size: 1.2rem;
  display: inline-block;
}
</style>
