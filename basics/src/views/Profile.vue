<template>
  <div class="profile">
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
      <p id="user-banner-button">Public Posts</p>
      <p id="user-banner-button">Private Posts</p>
      <p id="user-banner-button">Liked Posts</p>
    </section>

    <section class = "user-page-post"> 

  <div class= "user-box-1">
  <div class="w3-container">
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">
    <div class= "user-image-1"> image </div>
    <h2 class = "user-likes">           
      <b-icon variant="danger" icon="heart"></b-icon> 1 like
      </h2>
  </button>
  </div>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
      <div class="modal-header"> </div>
      <div class="feed-post">
        <div class="picture">
          <b-dropdown variant="none" class="report-button" size="lg" no-caret>
            <template #button-content>
              <span>...</span>
            </template>
            <b-dropdown-item href="#">Report</b-dropdown-item>
          </b-dropdown>

          <div class="likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>

        <div class="description-comment">
          <div class="description">
            <router-link to="/ProfileOther" class="username">
              Name
            </router-link>
            <p class="caption">caption</p>
          </div>
          <!-- <div class="comment-section">
          <router-link
            to="/ProfileOther"
            id="comment-username"
            class="username"
          >
            Name
          </router-link>
          <p class="comment">comment</p>
        </div> -->
        </div>
      </div>
      </div>
    </div>
  </div>
</div>



  <div class= "user-box-1">
  <div class="w3-container">
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">
    <div class= "user-image-1"> image </div>
    <h2 class = "user-likes">           
      <b-icon variant="danger" icon="heart"></b-icon> 1 like
      </h2>
  </button>
  </div>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
      <div class="modal-header"> </div>
      <div class="feed-post">
        <div class="picture">
          <b-dropdown variant="none" class="report-button" size="lg" no-caret>
            <template #button-content>
              <span>...</span>
            </template>
            <b-dropdown-item href="#">Report</b-dropdown-item>
          </b-dropdown>

          <div class="likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>

        <div class="description-comment">
          <div class="description">
            <router-link to="/ProfileOther" class="username">
              Name
            </router-link>
            <p class="caption">caption</p>
          </div>
          <!-- <div class="comment-section">
          <router-link
            to="/ProfileOther"
            id="comment-username"
            class="username"
          >
            Name
          </router-link>
          <p class="comment">comment</p>
        </div> -->
        </div>
      </div>
      </div>
    </div>
  </div>
</div>





  <div class= "user-box-1">
  <div class="w3-container">
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">
    <div class= "user-image-1"> image </div>
    <h2 class = "user-likes">           
      <b-icon variant="danger" icon="heart"></b-icon> 1 like
      </h2>
  </button>
  </div>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
      <div class="modal-header"> </div>
      <div class="feed-post">
        <div class="picture">
          <b-dropdown variant="none" class="report-button" size="lg" no-caret>
            <template #button-content>
              <span>...</span>
            </template>
            <b-dropdown-item href="#">Report</b-dropdown-item>
          </b-dropdown>

          <div class="likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>

        <div class="description-comment">
          <div class="description">
            <router-link to="/ProfileOther" class="username">
              Name
            </router-link>
            <p class="caption">caption</p>
          </div>
          <!-- <div class="comment-section">
          <router-link
            to="/ProfileOther"
            id="comment-username"
            class="username"
          >
            Name
          </router-link>
          <p class="comment">comment</p>
        </div> -->
        </div>
      </div>
      </div>
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

@import "@/styles/Profile.scss";

</style>

