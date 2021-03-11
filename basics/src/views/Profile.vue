<template>
  <div>
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed"></p>
      <p id="banner-profile-empty-space"></p>
      <p id="settings"></p>
    </section>

    <section class="info-about-user">
      <div class="user-profile-pic/generic-info"></div>
      <div class="user-profile-pic"></div>
      <div class="generic-info">
        <div id="user-following-followers">
          <p id="user-following"></p>
          <p id="user-followers"></p>
        </div>
        <p id="user-username-n-bio"></p>
      </div>
    </section>

    <section class="user-banner-posts">
      <div class="user-posts/likes"></div>
      <p id="user-public-post"></p>
      <p id="user-private-post"></p>
      <p id="user-liked-post"></p>
    </section>

    <section class="user-posts">
      <div class="user-post-column">
        <div id="user-actual-posts">
          <p id="post-settings-button"></p>
          <p id="post-likes"></p>
        </div>
      </div>

      <div class="user-post-column">
        <div id="user-actual-posts">
          <p id="post-settings-button"></p>
          <p id="post-likes"></p>
        </div>
      </div>

      <div class="user-post-column-2">
        <div id="user-actual-posts">
          <p id="post-settings-button"></p>
          <p id="post-likes"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/Profile.scss";

</style>
