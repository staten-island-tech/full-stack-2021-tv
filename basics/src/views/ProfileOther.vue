<template>
  <section id="profile-other" class="profile-other">
    <h1 style="display:none"> {{ dName }}'s Page </h1>
    <section class="other-banner-profile">
      <div id="logo-container">
        <router-link to="/" alt="Link to Home Page">
          <img src="@/assets/tv.png" class="logo" alt="Site Logo: purple television icon"/>
        </router-link>
      </div>
      <p id="banner-middle"></p>
      
      <div id="avatar">
        <router-link to="/profile"> 
          <p style="display:none">Profile Page</p>
          <b-avatar class="avatar-icon" size="4em"></b-avatar>
        </router-link>
      </div>
    </section>



    <section class="info-about-other">
      <img class="other-profile-pic" alt="Profile Picture" v-bind:src="pfp" :key="pfp" />
      <div class="generic-info">
        <!-- <div id="other-following-followers">
          <p id="other-following">Following</p>
          <p id="other-followers">Followers</p>
        </div> -->

        <h1 id="other-username-n-bio" alt="Profile Username">Name : {{ dName }}</h1>
      </div>
    </section>
    <h1 id="other-username-n-bio-phone">Name : {{ dName }}</h1>

    <!-- <section class="user-banner-posts">
      <div class="user-posts/likes"></div>
      <p id="user-banner-button">Public Posts</p>
      <p id="user-banner-button">Private Posts</p>
      <p id="user-banner-button">Liked Posts</p>
    </section> -->

    <section class="other-page-post">
      <div class="other-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block', 
              document.getElementById('profile').style.overflowY='hidden',
              document.getElementById('profile').style.position='fixed'"
            class="post-button"
          >
            <div class="other-image-1">
              <img
                src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=PWGpcKuD"
                class="placeholder"
              />
            </div>
            <h2 class="other-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content w3-animate-zoom modal-container">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none', 
                  document.getElementById('profile').style.overflowY='scroll',
                  document.getElementById('profile').style.position='static'"
                class="close-button">
                &times;
              </span>
              <div class="feed-post-container">
                <div class="picture-container">
                  <img
                    class="expanded-image"
                    src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=PWGpcKuD"
                  />

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

      <div class="other-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="post-button"
          >
            <div class="other-image-1">
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg"
                class="placeholder"
              />
            </div>
            <h2 class="other-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright">
                &times;
              </span>
              <div class= "feed-post-container" >
                <div class= "picture-container">
                  <!-- report button 
                  <b-dropdown
                    variant="none"
                    class="report-button"
                    size="lg"
                    no-caret
                  >
                    <template #button-content>
                      <span>...</span>
                    </template>
                    <b-dropdown-item href="#">Report</b-dropdown-item>
                  </b-dropdown> -->

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

      <div class="other-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="post-button"
          >
            <div class="other-image-1">
              <img
                src="https://petcheckurgentcare.com/wp-content/uploads/2020/10/autism-in-dogs.jpg"
                class="placeholder"
              />
            </div>
            <h2 class="other-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright">
                &times;
              </span>
              <div class= "feed-post-container">
                <div class= "picture-container">
                  <!-- report button 
                  <b-dropdown
                    variant="none"
                    class="report-button"
                    size="lg"
                    no-caret
                  >
                    <template #button-content>
                      <span>...</span>
                    </template>
                    <b-dropdown-item href="#">Report</b-dropdown-item>
                  </b-dropdown> -->

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
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/ProfileOther.scss";
</style>
