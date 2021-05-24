<template>
  <div>
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed">
        <router-link to="/"><img src="tv.jpg" class="logo" ></router-link>
        </p>
      <p id="banner-profile-empty-space"></p>
      <p id="settings">Settings</p>
    </section>

    <section class="info-about-user">
      <div class="user-profile-pic/generic-info"></div>
      <div class="user-profile-pic">Profile Picture</div>
      <div class="generic-info">
        <div id="user-following-followers">
          <p id="user-following">Following</p>
          <p id="user-followers">Followers</p>
        </div>
        <p id="user-username-n-bio">Username and Bio</p>
      </div>
    </section>

    <section class="user-banner-posts">
      <div class="user-posts/likes"></div>
      <p id="user-public-post">Public Posts</p>
      <p id="user-private-post">Private Posts</p>
      <p id="user-liked-post">Liked Posts</p>
    </section>

    <section class="user-posts">
      <div class="user-post-column">
        <div id="user-actual-posts">
          Post
          <div id="post-settings-with-empty-space">
            <p id="post-settings-empty-space"></p>
            <p id="post-settings-button">...</p>
          </div>
          <div id="post-picture"></div>
          <div id="post-likes">
            <b-icon variant="danger" icon="heart"></b-icon> Likes
          </div>
        </div>
      </div>

      <div class="user-post-column">
        <div id="user-actual-posts">
          Post
          <div id="post-settings-with-empty-space">
            <p id="post-settings-empty-space"></p>
            <p id="post-settings-button">...</p>
          </div>
          <div id="post-picture"></div>
          <div id="post-likes">
            <b-icon variant="danger" icon="heart"></b-icon> Likes
          </div>
        </div>
      </div>

      <div class="user-post-column-2">
        <div id="user-actual-posts">
          Post
          <div id="post-settings-with-empty-space">
            <p id="post-settings-empty-space"></p>
            <p id="post-settings-button">...</p>
          </div>
          <div id="post-picture"></div>
          <div id="post-likes">
            <b-icon variant="danger" icon="heart"></b-icon> Likes
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

@import "@/styles/_variables.scss";
@import "@/styles/Profile.scss";

</style>
