<template>
  <div class="profile-other">
    <section class="other-banner-profile">
      <div class="other-profile"></div>
      <p id="logo-for-feed">
        <img src="tv.jpg" class="logo">
        <router-link to="/">Logo</router-link>
      </p>
      <p id="other-profile-empty-space"></p>
      <p id="settings">Settings</p>
    </section>

    <section class="info-about-other">
      <div class="other-profile-pic/generic-info"></div>
      <div class="other-profile-pic"></div>
      <div class="generic-info">
        <div id="other-following-followers">
          <p id="other-following">Following</p>
          <p id="other-followers">Followers</p>
        </div>
        <p id="other-username-n-bio">Username/bio</p>
      </div>
    </section>

    <section class="other-posts">
      <div class="other-post-column">
        <div id="other-actual-posts">
          Post
          <div id="post-settings-with-empty-space">
            <p id="post-settings-empty-space"></p>
            <p id="post-settings-button">...</p>
          </div>
          <div id="post-picture"></div>
          <div id="post-likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>
      </div>

      <div class="other-post-column">
        <div id="other-actual-posts">
          Post
          <div id="post-settings-with-empty-space">
            <p id="post-settings-empty-space"></p>
            <p id="post-settings-button">...</p>
          </div>
          <div id="post-picture"></div>
          <div id="post-likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>
      </div>

      <div class="other-post-column-2">
        <div id="other-actual-posts">
          Post
          <div id="post-settings-with-empty-space">
            <p id="post-settings-empty-space"></p>
            <p id="post-settings-button">...</p>
          </div>
          <div id="post-picture"></div>
          <div id="post-likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

@import "@/styles/ProfileOther.scss";

</style>
