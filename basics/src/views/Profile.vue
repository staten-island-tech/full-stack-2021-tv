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
          <p id="post-likes">Likes</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import settings_on_profile_modal from '../components/Modals-for-Profile';

export default {
  components: {
    settings_on_profile,
    }

  // data () {
            
  //       },
};
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
  border-left: 0px;
}

.info-about-user {
  height: 30rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.user-profile-pic {
  height: 25rem;
  width: 35%;
  margin: auto;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
}

.generic-info {
  height: 25rem;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#user-following-followers {
  height: 55%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#user-following {
  height: 95%;
  width: 50%;
  margin: 1rem;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
}

#user-followers {
  height: 95%;
  width: 50%;
  margin: auto;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
}

#user-username-n-bio {
  height: 45%;
  //width: 10rem;
  margin: auto;
  display: flex;
  //border-radius: 0.25rem;
  border: 2px solid;
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
}

#user-private-post {
  width: 33.3%;
  border: 2px solid;
  border-left: none;
}

#user-liked-post {
  width: 33.4%;
  border: 2px solid;
  border-left: none;
}

.user-posts {
  height: 25rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.user-post-column-1 {
  height: 25rem;
  width: 33.3%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.user-post-column-2 {
  height: 25rem;
  width: 33.4%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  justify-content: space-evenly;
}

#post-settings-with-empty-space{
  height: 2rem;
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
}
</style>
