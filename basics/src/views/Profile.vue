<template>
  <div>
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed">Logo</p>
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
        <div id="user-actual-posts">Post
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
  font-size: 0.75rem;
}

#banner-profile-empty-space {
  width: 90%;
  border: 2px solid;
  border-left: none;
}

#settings {
  width: 5%;
  border: 2px solid;
  border-left: 0px;
  font-size: 0.75rem;
}

.info-about-user {
  height: 30rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.user-profile-pic {
  height: 25rem;
  width: 35%;
  margin: auto;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
  font-size: 0.75rem;
}

.generic-info {
  height: 25rem;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#user-following-followers {
  height: 55%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#user-following {
  height: 95%;
  width: 50%;
  margin: 1rem;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
  font-size: 0.75rem;
}

#user-followers {
  height: 95%;
  width: 50%;
  margin: auto;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
  font-size: 0.75rem;
}

#user-username-n-bio {
  height: 45%;
  //width: 10rem;
  margin: auto;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
  font-size: 0.75rem;
}

.user-banner-posts {
  height: 10rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#user-public-post {
  width: 33.3%;
  border: 2px solid;
  font-size: 0.75rem;
}

#user-private-post {
  width: 33.3%;
  border: 2px solid;
  border-left: none;
  font-size: 0.75rem;
}

#user-liked-post {
  width: 33.4%;
  border: 2px solid;
  border-left: none;
  font-size: 0.75rem;
}

.user-posts {
  height: 25rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.user-post-column-1 {
  height: 25rem;
  width: 33.3%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-post-column-2 {
  height: 25rem;
  width: 33.4%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#user-actual-post {
  height: 33.3%;
  width: 33.3%;
  margin: auto;
  display: flex;
  align-items: center;
  //border-radius: 0.25rem;
  border: 2px solid;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
}

#post-settings-with-empty-space{
  height: 5%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#post-settings-empty-space{
  width: 90%;
  border: none;
}

#post-settings-button{
  width: 10%;
  border: 2px solid;
  border-right: none;
  font-size: 0.5rem;
}

#post-picture{
  height: 85%;
}

#post-likes{
  height: 10%;
  border: 2px solid;
  border-bottom: none;
  font-size: 0.75rem;
}
</style>
