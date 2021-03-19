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
      <img class="user-profile-pic" v-bind:src = "pfp" :key="pfp" />
      
      <div class="generic-info">
        <div id="user-following-followers">
          <p id="user-following">Following</p>
          <p id="user-followers">Followers</p>
        </div>
        
        <h1 id="user-username-n-bio">Name : {{dName}}</h1>
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
        <div id="user-actual-posts">
          Post
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
      <div>
        <input type="file" id="pfpUpload" accept="image/*">
        <button type = "button" id = "pfpUbutton" v-on:click="changePfp()">ok</button>
      </div>
    </section>
  </div>
</template>


<script>
import firebase from "firebase/app";
require('firebase/auth');
export default {
    mounted(){
        this.getUserData(),
        this.changePfp()
        
    },
    methods:{
        getUserData(){
            let user = firebase.auth().currentUser;
            this.dName = user.displayName;
            this.pfp = user.photoURL;
            console.log(this.pfp);
        },
        changePfp(){
          //let uplbtn = document.getElementById("pfpUbutton");
          let imgInp = document.getElementById("pfpUpload");
          let UID = firebase.storage();
          let user = firebase.auth().currentUser;
          
            console.log('clicked')
            let img = imgInp.files[0];
            console.log(img);
            
            UID.ref().child('User/UID/' + user.uid + '/pfp').put(img);
            let newpfp = UID.ref().child('User/UID/' + user.uid + '/pfp');
            
            newpfp.getDownloadURL().then((url) =>{
              console.log(url);
              user.updateProfile({
                photoURL: url
              });
            })
            
           this.pfp = user.photoURL;
          
          
        }
        
    },

    data() {
    
        return {
            dName: "",
            pfp: null
        };
  }     
}
</script>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/Profile.scss";

</style>
