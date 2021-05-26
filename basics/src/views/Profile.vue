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
          aria-label="settings-button" 
          title="settings-button"
        >
          <b-icon icon="gear" id="settings-button-png" ></b-icon>
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
              <h2 class="settings-menu-header">Account Settings</h2>
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
                        <h3 class="settings-menu-header"> Change Profile Picture </h3>
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
                        <h3 class="settings-menu-header">Edit Bio</h3>
                        <textarea
                          class="bio-input"
                          id = "biofield"
                          placeholder="Write Here..."
                          maxlength="150" 
                          style="border: none"
                          aria-label="bio-input">
                        </textarea>
                        <button 
                          class="save-button w3-button w3-white w3-border"
                          onclick="document.getElementById('id03').style.display='none', 
                            document.getElementById('profile').style.overflowY='scrolled',
                            document.getElementById('profile').style.position='static'" v-on:click="changeBio()"
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
      <img class="user-profile-pic" alt="User's Profile Picture" v-bind:src="pfp" :key="pfp.toString()" />
        <!-- <div id="user-following-followers">
          <p id="user-following">Following</p>
          <p id="user-followers">Followers</p>
        </div> -->
        <div class = "username-bio">
        <h1 id="user-username" alt="Profile Username">{{ dName }}</h1>
        <div class= "seperate-username-bio"> </div>
        <p class="user-bio" :key="bio">{{bio}}</p>
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
      <div class="user-box-1" v-for="sr in i_sr" :key="sr.durl">
        <div class="w3-container">
          <button
            onclick="
              document.getElementById('profile').style.overflowY='hidden',
              document.getElementById('profile').style.position='fixed'"
            class="post-button" v-on:click="sr.disp = 'block'"
          >
            <div class="user-image-1">
              <img
                v-bind:src="sr.durl"
                :key="sr.durl"
                alt=""
                class="placeholder"
              />
            </div>
            <h2 class="user-likes">
              <b-icon variant="danger" icon="heart" v-on:click="likePress(sr.id)"
                v-bind:key="sr.likes"></b-icon> {{ sr.likes }} likes
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal"  :style="{ display: sr.disp }">
          <div class="w3-modal-content w3-animate-zoom modal-container">
            <div class="w3-container">
              <span
                onclick=" 
                  document.getElementById('profile').style.overflowY='scroll',
                  document.getElementById('profile').style.position='static'"
                class="close-button close-post-button" v-on:click="sr.disp = 'none'">
                &times;
              </span>
              <div class="feed-post-container">
                <div class="picture-container">
                  <img
                    alt=""
                    class="expanded-image"
                    v-bind:src="sr.durl"
                    :key="sr.durl"
                  />

                  <div class="likes">
                    <b-icon class = "heart-icon" variant="danger" icon="heart" v-on:click="likePress(sr.id)"
                    v-bind:key="sr.likes"></b-icon> {{ sr.likes }} likes
                  </div>
                </div>

                <div class="description-comment">
                  <div class="description">
                    <router-link to="/ProfileOther" class="username">
                      
                    </router-link>
                    <p class="caption">{{ sr.caption }}</p>
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
import Vue from "vue";
require("firebase/auth");
export default {
  mounted() {
    this.getUserData();
    //this.setupFirebase();
    this.getPosts();
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
    likePress(id) {
      let user = firebase.auth().currentUser;
      let userLikeRef = firebase.database().ref(`UIDs/${user.uid}/likes`);
      let postliked = false;
      userLikeRef.once("value").then((lk) => {
        lk.forEach((postkey) => {
          if (id === postkey.val()) {
            postliked = true;
          }
        });
        if (!postliked) {
          let datRef = firebase.database().ref(`Posts/${id.toString()}/likes`);
          datRef.once("value").then((likeSnapshot) => {
            let n_likes = likeSnapshot.val() + 1;
            let dat = new Date();
            datRef.set(n_likes);
            this.getPosts();
            
            userLikeRef.child(`${dat.getTime()}`).set(`${id}`);
          });
        }
      });
    },
    getUserData() {
      let user = firebase.auth().currentUser;
      this.dName = user.displayName;
      this.pfp = user.photoURL;
      let db = firebase.database();
      
      let bioRef = db.ref(`UIDs/${user.uid}/bio`);

      bioRef.once("value").then(b =>{
        this.bio = b.val();
      });
      console.log(this.pfp);
    },
    getPosts() {
      let datRef = firebase.database().ref("Posts/");
      let user = firebase.auth().currentUser;
      let i = 0;

      datRef.once("value").then((sn) => {
        sn.forEach((postChild) => {
          let postUID = postChild.child("UID").val();
          if(postUID === user.uid){
            let displ = "none";
            //console.log(i);
            let dURL = postChild.child("url").val();
            //console.log(dURL);
            let dn = postChild.child("dName").val();
            let cp = postChild.child("caption").val();
            let key = postChild.key;
            let hearts = postChild.child("likes").val();
            let tag = postChild.child("tag").val();
          

            Vue.set(this.i_sr, i, {
              disp: displ,
              durl: dURL,
              dName: dn,
              caption: cp,
              id: key,
              likes: hearts,
              tag: tag,
              uid: postUID,
            });
            //Vue.set(this.i_sr, i, {});

            console.log(this.i_sr[i].uid);
          }
          
          // console.log(this.i_sr[i].disp);
          //console.log(this.i_sr[i].dName);
          //console.log(this.i_sr[i].caption);
          //console.log(this.i_sr[i].id);
          //console.log(this.i_sr[i].likes);
          //console.log(this.i_sr[i].tag);
          i++;
        });
      });
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
    changeBio(){
      let bio = document.getElementById("biofield").value;
      let db = firebase.database();
      let user = firebase.auth().currentUser;
      let bioRef = db.ref(`UIDs/${user.uid}/bio`);
      bioRef.set(bio);

      this.getUserData();

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
        .put(img).then(data => {
          console.log(data);
            let newpfp = UID.ref().child("User/UID/" + user.uid + "/pfp");

          newpfp.getDownloadURL().then((url) => {
            console.log(url);
            this.pfp = url;
              user.updateProfile({
                photoURL: url,
              });
            dbRef.child(`${user.uid}/pfp`).set(
            `${url}`,
            );
          });
          let db = firebase.database();
          
          let dbRef = db.ref("UIDs/");
          
          console.log(this.pfp);
        });

      ;
      
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
      i_sr: {},
      bio: "",
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
