<template>
  <section id="profile" class="profile">
    <section class="user-banner-profile">
      <div id="logo-container">
        <router-link to="/">
          <img src="@/assets/tv.png" class="logo-png"/>
        </router-link>
      </div>
      <p id="banner-middle"></p>
      <div id="settings" class="settings-button-container">
        <button
          onclick="document.getElementById('id02').style.display='block', 
            document.getElementById('profile').style.overflowY='hidden',
            document.getElementById('profile').style.position='fixed'"
          id="settings-button"
        >
          <b-icon icon="gear" id="settings-button-png"></b-icon>
        </button>

        <div id="id02" class="w3-modal">
          <div class="w3-modal-content" id="settings-container">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id02').style.display='none', 
                  document.getElementById('profile').style.overflowY='scroll',
                  document.getElementById('profile').style.position='static'"
                class="close-button w3-button w3-display-topright"
              >
              &times;
              </span>
              <p class="settings-menu-header">Account Settings</p>
              <div class="settings-menu">
                <div id="change-pfp-button-div" class="w3-container">
                  <button
                    onclick="document.getElementById('id04').style.display='block', 
                      document.getElementById('profile').style.overflowY='hidden',
                      document.getElementById('profile').style.position='fixed'"
                    class="w3-button settings-menu-button"
                  >
                    <b-icon icon="image" class="settings-menu-icon"></b-icon> Change Profile Picture
                  </button>

                  <div id="id04" class="w3-modal">
                    <div id="pfp-content" class="w3-modal-content">
                      <div class="w3-container">
                        <span
                          onclick="document.getElementById('id04').style.display='none', 
                            document.getElementById('profile').style.overflowY='scroll',
                            document.getElementById('profile').style.position='static'"
                          class="close-button w3-button w3-display-topright"
                        >
                        &times;
                        </span>
                        <p class="settings-menu-header"> Change Profile Picture </p>
                        <div>
                          <input type="file" id="pfpUpload" accept="image/*" />
                          <button
                            type="button"
                            id="pfpUbutton"
                            v-on:click="changePfp()"
                          >
                            Change Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- changing bio button -->
                <div id="bio-button-div" class="w3-container">
                  <button
                    onclick="document.getElementById('id03').style.display='block', 
                      document.getElementById('profile').style.overflowY='hidden',
                      document.getElementById('profile').style.position='fixed'"
                    class="w3-button settings-menu-button"
                    id="bio-button-text"
                  >
                    <b-icon icon="pencil" class="settings-menu-icon"></b-icon> Edit Bio
                  </button>

                  <div id="id03" class="w3-modal">
                    <div id="bio-content" class="w3-modal-content">
                      <div class="bio-content-container w3-container">
                        <span
                          onclick="document.getElementById('id03').style.display='none', 
                            document.getElementById('profile').style.overflowY='scrolled',
                            document.getElementById('profile').style.position='static'"
                          class="close-button w3-button w3-display-topright">
                          &times;
                        </span>
                        <p class="settings-menu-header">Edit Bio</p>
                        <textarea
                          class="bio-input"
                          placeholder="Write Here...">
                        </textarea>
                        <button class="save-button w3-button w3-white w3-border"> Save </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button class="settings-menu-button w3-button" @click="signOut">
                  <b-icon icon="box-arrow-right" class="settings-menu-icon"></b-icon> Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="info-about-user">
      <img class="user-profile-pic" v-bind:src="pfp" :key="pfp" />
      <div class="generic-info">
        <div id="user-following-followers">
          <p id="user-following">Following</p>
          <p id="user-followers">Followers</p>
        </div>
        <h1 id="user-username-n-bio">Name: {{ dName }}</h1>
      </div>
    </section>
    <h1 id="user-username-n-bio-phone">Name: {{ dName }}</h1>

    <section class="user-banner-posts">
      <div class="user-posts/likes"></div>
      <p id="user-banner-button">Public Posts</p>
      <p id="user-banner-button">Private Posts</p>
      <p id="user-banner-button">Liked Posts</p>
    </section>

    <section class="user-page-post">
      <div class="user-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block', 
              document.getElementById('profile').style.overflowY='hidden',
              document.getElementById('profile').style.position='fixed'"
            class="post-button"
          >
            <div class="user-image-1">
              <img
                src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
                class="placeholder"
              />
            </div>
            <h2 class="user-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none', 
                  document.getElementById('profile').style.overflowY='scroll',
                  document.getElementById('profile').style.position='static'"
                class="close-button w3-button w3-display-topright">
                &times;
              </span>
              <div class="feed-post-container">
                <div class="picture-container">
                  <img
                    class="expanded-image"
                    src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
                  />
                  
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

      <div class="user-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="post-button"
          >
            <div class="user-image-1">
              <img
                src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
                class="placeholder"
              />
            </div>
            <h2 class="user-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright"
                >&times;</span
              >
              <div class="modal-header"></div>
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

      <div class="user-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="post-button"
          >
            <div class="user-image-1">
              <img
                src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
                class="placeholder"
              />
            </div>
            <h2 class="user-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright"
                >&times;</span
              >
              <div class="modal-header"></div>
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
import firebase from "firebase/app";
require("firebase/auth");
export default {
  mounted() {
    this.getUserData(), this.setupFirebase();
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    },
    getUserData() {
      let user = firebase.auth().currentUser;
      this.dName = user.displayName;
      this.pfp = user.photoURL;
      console.log(this.pfp);
    },
    changePfp() {
      //let uplbtn = document.getElementById("pfpUbutton");
      let imgInp = document.getElementById("pfpUpload");
      let UID = firebase.storage();
      let user = firebase.auth().currentUser;

      console.log("clicked");
      let img = imgInp.files[0];
      console.log(img);

      UID.ref()
        .child("User/UID/" + user.uid + "/pfp")
        .put(img);
      let newpfp = UID.ref().child("User/UID/" + user.uid + "/pfp");

      newpfp.getDownloadURL().then((url) => {
        console.log(url);
        user.updateProfile({
          photoURL: url,
        });
      });

      this.pfp = user.photoURL;

      console.log(this.pfp);
      
    },
  },

  data() {
    return {
      dName: "",
      pfp: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/Profile.scss";
</style>
