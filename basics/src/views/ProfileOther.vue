<template>
  <section id="profile-other" class="profile-other">
    <h1 style="display:none">{{ dName }}'s Page</h1>
    <section class="other-banner-profile">
      <div id="logo-container">
        <router-link to="/" alt="Link to Home Page">
          <img
            src="@/assets/tv.png"
            class="logo"
            alt="Site Logo: purple television icon"
          />
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
      <img
        class="other-profile-pic"
        alt="Profile Picture"
        v-bind:src="pfp"
        :key="pfp"
      />
        <!-- <div id="other-following-followers">
          <p id="other-following">Following</p>
          <p id="other-followers">Followers</p>
        </div> -->
        <div class = "other-username-bio">
        <h1 id="other-username" alt="Profile Username"> Name : {{ dName }}</h1>
        <div class= "seperate-username-bio"> </div>
        <p class="other-bio">sdhavbjsdbvj</p>
        </div>
    </section>
    <div class= "seperate-info-post"> </div>


    <!-- <section class="user-banner-posts">
      <div class="user-posts/likes"></div>
      <p id="user-banner-button">Public Posts</p>
      <p id="user-banner-button">Private Posts</p>
      <p id="user-banner-button">Liked Posts</p>
    </section> -->

    <section class="other-page-post">
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
export default {
  mounted() {
    this.getUserData();
    this.getPosts();
  },
  methods:{
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
    getPosts() {
      let datRef = firebase.database().ref("Posts/");
      let user = firebase.auth().currentUser;
      let i = 0;

      datRef.once("value").then((sn) => {
        let uidRef = firebase.database().ref(`UIDs/${user.uid}/interest`);
        uidRef.once("value").then(uid =>{
          sn.forEach((postChild) => {
            let postUID = postChild.child("UID").val();
            if(postUID === uid.val()){
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
      });
    },
    getUserData() {
      let user = firebase.auth().currentUser;
      
      let uidRef = firebase.database().ref(`UIDs/${user.uid}/interest`);
      uidRef.once("value").then(uid =>{
        let nUserRef = firebase.database().ref(`UIDs/${uid.val()}/`)
        nUserRef.once("value").then(nuser =>{
          this.dName = nuser.child("dName").val();
          this.pfp = nuser.child("pfp").val();
          console.log(this.pfp, this.dName);
        })
          
       
      });
       
      
    },
  },
  data() {
    return {
      image: null,
      imageSrc: null,
      dName: "",
      pfp: null,
      i_sr: {},
    };
  },

};
</script>

<style lang="scss" scoped>
@import "@/styles/ProfileOther.scss";
</style>
