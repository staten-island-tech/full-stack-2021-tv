<template>
  <section id="profile" class="profile">
    <h1 style="display:none"> Profile Page </h1>
    <section class="user-banner-profile">
      <div id="logo-container">
        <router-link to="/" alt="Link to Home Page">
          <img src="@/assets/tv.png" class="logo" alt="Site Logo: purple television icon"/>
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
                class="close-button"
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
                          class="close-button"
                        >
                        &times;
                        </span>
                        <p class="settings-menu-header"> Change Profile Picture </p>
                        <div>
                          <b-form @submit.stop.prevent="onSubmit">
                            <div class="d-flex mb-3">
                              <b-form-file
                                id="pfpUpload"
                                v-model="image"
                                placeholder="Or drop image here"
                                drop-placeholder="Or drop image here..."
                                class="select-image-form"
                                label="Choose an Image"
                              ></b-form-file>
                              <span
                                v-if="hasImage"
                                variant="danger"
                                class="clear-image-button"
                                @click="clearImage"
                              >Clear Image
                              </span>
                            </div>
                            <b-img
                              id="select-image-upload"
                              v-if="hasImage"
                              :src="imageSrc"
                            ></b-img>
                          </b-form>
                          <button
                            type="button"
                            id="pfpUbutton"
                            class="save-button w3-button w3-white w3-border"
                            v-on:click="changePfp()"
                            onclick="document.getElementById('id04').style.display='none', 
                            document.getElementById('profile').style.overflowY='scroll',
                            document.getElementById('profile').style.position='static'"
                          >
                            Save
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
                          class="close-button">
                          &times;
                        </span>
                        <p class="settings-menu-header">Edit Bio</p>
                        <textarea
                          class="bio-input"
                          placeholder="Write Here..."
                          maxlength="150" 
                          style="border: none">
                        </textarea>
                        <button 
                          class="save-button w3-button w3-white w3-border"
                          onclick="document.getElementById('id03').style.display='none', 
                            document.getElementById('profile').style.overflowY='scrolled',
                            document.getElementById('profile').style.position='static'"
                          > Save </button>
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
      <img class="user-profile-pic" alt="User's Profile Picture" v-bind:src="pfp" :key="pfp" />
        <!-- <div id="user-following-followers">
          <p id="user-following">Following</p>
          <p id="user-followers">Followers</p>
        </div> -->
        <div class = "username-bio">
        <h1 id="user-username" alt="Profile Username">{{ dName }}</h1>
        <div class= "seperate-username-bio"> </div>
        <p class="user-bio">sdhavbjsdbvj</p>
        </div>
    </section>
    <div class= "seperate-info-post"> </div>

    <!-- <section class="user-banner-posts">
      <div class="user-posts/likes"></div>
      <p id="user-banner-button">Public Posts</p>
      <p id="user-banner-button">Private Posts</p>
      <p id="user-banner-button">Liked Posts</p>
    </section> -->

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
          <div class="w3-modal-content w3-animate-zoom modal-container">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none', 
                  document.getElementById('profile').style.overflowY='scroll',
                  document.getElementById('profile').style.position='static'"
                class="close-button close-post-button">
                &times;
              </span>
              <div class="feed-post-container">
                <div class="picture-container">
                  <img
                    class="expanded-image"
                    src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
                  />

                  <div class="likes">
                    <b-icon class = "heart-icon" variant="danger" icon="heart"></b-icon> 1 like
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
                src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
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

      <div class="user-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="post-button"
          >
            <div class="user-image-1">
              <img
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
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
    clearImage() {
      this.image = null;
    },
    onSubmit() {
      if (!this.image) {
        alert("Please select an image.");
        return;
      }
      alert("Form submitted!");
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
  computed: {
    hasImage() {
      return !!this.image;
    },
  },

  data() {
    return {
      image: null,
      imageSrc: null,
      dName: "",
      pfp: null,
    };
  },
  watch: {
    image(newValue, oldValue) {
      const base64Encode = (data) =>
        new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      })

      if (newValue !== oldValue) {
        if (newValue) {
          base64Encode(newValue)
            .then((value) => {
              this.imageSrc = value;
            })
            .catch(() => {
              this.imageSrc = null;
            });
        } else {
          this.imageSrc = null;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/Profile.scss";
</style>
