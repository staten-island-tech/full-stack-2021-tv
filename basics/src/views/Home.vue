<template>
  <section class="home-page">
    <section class="user-banner-profile">
      <p id="logo-for-feed">
        <router-link to="/">
          <img src="@/assets/tv.png" class="logo"/>
        </router-link>
      </p>
      <p id="select-tag-container">
        <v-select id="mySelect" :options="options"></v-select>
      </p>
      <!-- <v-select id="select-tag-container" :options="options"></v-select> -->
      <p id="button-container">
        <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">
          +
        </button>
      </p>

      <div id="id01" class="w3-modal">
        <div class="w3-modal-content">
          <div class="w3-container">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="w3-button w3-display-topright"
            >
              &times;
            </span>
            <div class="modal-body">
              <div class="modal-header"></div>
              <div class="blog-picture">
                <b-container class="mt-3" fluid>
                  <b-form @submit.stop.prevent="onSubmit">
                    <div class="d-flex mb-3">
                      <b-form-file
                        id = "postImg"
                        v-model="image"
                        placeholder="Choose an image"
                        class="w-auto flex-grow-1"
                      ></b-form-file>
                      <b-button
                        v-if="hasImage"
                        variant="danger"
                        class="ml-3"
                        @click="clearImage"
                        >Clear image</b-button
                      >
                    </div>
                    <b-img id="select-image-upload"
                      v-if="hasImage"
                      :src="imageSrc"
                      class="mb-3"
                      fluid
                      block
                      rounded
                    ></b-img>
                    <!-- <b-button
                      :disabled="!hasImage"
                      variant="primary"
                      type="submit"
                      >Upload image</b-button
                    > -->
                  </b-form>
                </b-container>
              </div>
              <div class="blog-comment">
                <textarea placeholder="Caption" class="blog-caption" id = "p-caption"></textarea>
              </div>

              <div class="blog-bottom-row">
                <select class="blog-tag" v-model="blog.tag" id = "tag_select">
                  <option v-for="tag in tags" v-bind:key="tag" >
                    {{ tag }}
                  </option>
                </select>

                <select class="blog-toggle-private-public">
                  <option value="1" selected>Public</option>
                  <option value="2">Private</option>
                </select>

                <button class="blog-post" v-on:click="mPost()">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="avatar">
        <router-link to="/profile">
          <b-avatar class="avatar-icon" size="4em"></b-avatar>
        </router-link>
      </div>
    </section>

    <section class="feed">
      <div class="feed-post" v-for="sr in i_sr" :key="sr.durl">
        <div class="picture">
        <!-- report button 
          <b-dropdown variant="none" class="report-button" size="lg" no-caret>
            <template #button-content>
              <span>...</span>
            </template>
            <b-dropdown-item href="#">Report</b-dropdown-item>
          </b-dropdown> -->

          
            <img
              :src = sr.durl 
              :key="sr.durl"
              class="placeholder"
              v-on:click = "sr.disp = 'block'"
              
              
            />
          

          <div class="w3-modal" :id= sr.durl  :style = "{display: sr.disp}">
            <div class="w3-modal-content" id="pop-up-container">
              <div class="w3-container">
                
                <img
                  class="image-popUp"
                  v-bind:src = sr.durl 
                  :key="sr.durl"
                />
              </div>
            </div>
          </div>

          <div class="likes">
            <b-icon variant="danger" icon="heart" v-on:click ="likePress(sr.id, sr.likes)" v-bind:key = sr.likes ></b-icon> {{sr.likes}} likes   
          </div>
        </div>

            <div class="description-comment">
              <div class="description">
                <router-link to="/ProfileOther" class="username">
                {{sr.dName}}
                </router-link>
                <p class="caption">{{sr.caption}}</p>
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
      
    </section>
  </section>
</template>

<script>
import firebase from "firebase/app";
import Vue from 'vue';
export default {
  mounted(){
    this.getPostImg()

  },
   methods:{
    mPost(){
      let user = firebase.auth().currentUser;
      let storageRef = firebase.storage().ref();
      console.log(user);
      let c_tag = document.getElementById("tag_select").value;
      let p_img = document.getElementById("postImg").files[0];
      let p_caption = document.getElementById("p-caption").value;
      let servertime = firebase.database.ServerValue.TIMESTAMP;
      servertime = servertime.toString().replace(/[.-]/g, '');
      let storagePic = storageRef.child('Posts/' + user.uid + '_' + p_img.name + '_' + servertime);
      storagePic.put(p_img);
      
      let db = firebase.database();
      let dbRef = db.ref("Posts/");
      console.log(p_img.name);
      storagePic.getMetadata().then((meta) =>{
        
     
        storagePic.getDownloadURL().then((durl) =>{
          dbRef.child(`${p_img.name.replace(/[,.-:]/g, '') + meta.timeCreated.toString().replace(/[.-]/g, '')}`).set({
            date: `${meta.timeCreated}`,
            url: `${durl}`,
            dName: `${user.displayName}`,
            caption: `${p_caption}`,
            likes: 0,
            tag: `${c_tag}`

          })
        })

       
        
      })
 
    },
    getPostImg(){
        let datRef = firebase.database().ref('Posts/');
        let i = 0;
        
        datRef.once("value").then(sn => {
          
          sn.forEach(postChild =>{
            let displ = 'none';
            console.log(i);
            let dURL = postChild.child('url').val();
            console.log(dURL);
            let dn = postChild.child('dName').val();
            let cp = postChild.child('caption').val();
            let key = postChild.key;
            let hearts = postChild.child('likes').val();
            let tag = postChild.child('tag').val();
            
            Vue.set(this.i_sr, i, {disp: displ, durl: dURL, dName: dn, caption: cp, id: key, likes: hearts, tag: tag});
            //Vue.set(this.i_sr, i, {});


            console.log(this.i_sr[i].durl);
            console.log(this.i_sr[i].disp);
            console.log(this.i_sr[i].dName);
            console.log(this.i_sr[i].caption);
            console.log(this.i_sr[i].id);
            console.log(this.i_sr[i].likes);
            console.log(this.i_sr[i].tag);
            i++;

          });
          

          
        });
        datRef.on("value").then(sn => {
          
          sn.forEach(postChild =>{
            let displ = 'none';
            console.log(i);
            let dURL = postChild.child('url').val();
            console.log(dURL);
            let dn = postChild.child('dName').val();
            let cp = postChild.child('caption').val();
            let key = postChild.key;
            let hearts = postChild.child('likes').val();
            let tag = postChild.child('tag').val();
            
            Vue.set(this.i_sr, i, {disp: displ, durl: dURL, dName: dn, caption: cp, id: key, likes: hearts, tag: tag});
            //Vue.set(this.i_sr, i, {});


            console.log(this.i_sr[i].durl);
            console.log(this.i_sr[i].disp);
            console.log(this.i_sr[i].dName);
            console.log(this.i_sr[i].caption);
            console.log(this.i_sr[i].id);
            console.log(this.i_sr[i].likes);
            console.log(this.i_sr[i].tag);
            i++;

          });
          

          
        });
        
      
      

        
    },
    likePress(id, c_likes){
      let datRef = firebase.database().ref(`Posts/${id.toString()}/likes`);
      let n_likes = c_likes + 1;
      datRef.set(n_likes);
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
    }
  
  },
  computed: {
    hasImage() {
      return !!this.image;
    },
    captionState() {
      return this.caption.length < 150 ? true : false;
    },
  },
  
  data() {
    return {
      image: null,
      imageSrc: null,
      dispMode: [""],
      caption: "",
      blog: {
        tag: "",
      },
      i_sr: {},
      options: [
        "Education",
        "Entertainment",
        "Sports",
        "Music",
        "Games",
        "Others",
      ],
      tags: [
        "Pick a Tag",
        "Education",
        "Entertainment",
        "Sports",
        "Music",
        "Games",
        "Others",
      ],
    };
  },
  watch: {
    image(newValue, oldValue) {
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

//banner scroll effect
let scrollPos = 0;

window.addEventListener("scroll", function() {
  const banner = document.querySelector(".user-banner-profile");
  if (document.body.getBoundingClientRect().top > scrollPos) {
    console.log("scrolled up");
    banner.classList.remove("is-hidden");
    banner.classList.add("is-visible");
  } else {
    console.log("scrolled down");
    banner.classList.add("is-hidden");
  }
  scrollPos = document.body.getBoundingClientRect().top;
});

//upload image preview
const base64Encode = (data) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
</script>

<style lang="scss">
@import "@/styles/Home.scss";
</style>
