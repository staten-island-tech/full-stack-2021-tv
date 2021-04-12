<template>
  <div class="profile">
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed">
        <router-link to="/"><img src="@/assets/tv.png" class="logo"/></router-link>
      </p>
      <p id="banner-profile-empty-space"></p>
      <div id="settings" class="w3-container">
        <button
          onclick="document.getElementById('id02').style.display='block'"
          class="w3-button"
          id="settings-button"
        >
          <b-icon icon="gear" aria-hidden="true"></b-icon>
        </button>

        <div id="id02" class="w3-modal">
          <div class="w3-modal-content" id="settings-container">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id02').style.display='none'"
                class="w3-button w3-display-topright"
                >&times;</span
              >
              <div class="settings-button-content">
                <!-- change profile picture button  -->
                <div id="change-pfp-button-div" class="w3-container">
                  <button
                    onclick="document.getElementById('id04').style.display='block'"
                    class="w3-button w3-black"
                  >
                    Change Profile Picture
                  </button>

                  <div id="id04" class="w3-modal">
                    <div id= "pfp-content" class="w3-modal-content">
                      <div class="w3-container">
                        <span
                          onclick="document.getElementById('id04').style.display='none'"
                          class="w3-button w3-display-topright"
                          >&times;</span
                        >
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
                    onclick="document.getElementById('id03').style.display='block'"
                    class="w3-button"
                    id="bio-button-text"
                  >
                    Edit Bio
                  </button>

                  <div id="id03" class="w3-modal">
                    <div class="w3-modal-content">
                      <div class="w3-container">
                        <span
                          onclick="document.getElementById('id03').style.display='none'"
                          class="w3-button w3-display-topright"
                          >&times;</span
                        >
                        <textarea
                          class="bio-input"
                          placeholder="Write something.."
                        ></textarea>
                        <button>submit</button>
                      </div>
                    </div>
                  </div>
                </div>

                <button class="but" @click="signOut">Sign out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="info-about-user">
      <div class="user-profile-pic/generic-info"></div>
      <img class="user-profile-pic" v-bind:src="pfp" :key="pfp" />

      <div class="generic-info">
        <div id="user-following-followers">
          <p id="user-following">Following</p>
          <p id="user-followers">Followers</p>
        </div>

        <h1 id="user-username-n-bio">Name : {{ dName }}</h1>
      </div>
    </section>
    <h1 id="user-username-n-bio-phone">Name : {{ dName }}</h1>


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
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button w3-black"
          >
            <div class="user-image-1">
              <img src="https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg" class="placeholder">

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
              <div class="feed-post">
                <div class="picture">
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

      <div class="user-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button w3-black"
          >
            <div class="user-image-1">
              <img src="https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg" class="placeholder">
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
              <div class="feed-post">
                <div class="picture">
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

      <div class="user-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button w3-black"
          >
            <div class="user-image-1">
              <img src="https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg" class="placeholder">
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
              <div class="feed-post">
                <div class="picture">
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
import firebase from "firebase/app";
require("firebase/auth");
export default {
  mounted() {
    this.getUserData(), this.changePfp(), this.setupFirebase();
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
      ///         IMAGE TAKES TWO RE-RENDERS TO CHANGE, RELOADING AFTER CLICKING THE BUTTON WORKS JUST FINE, WORST CASE IM RELOADING THE WHOLE PAGE AFTER PFP CHANGE
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
