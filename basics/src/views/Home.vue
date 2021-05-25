<template>
  <section id="home-page" class="home-page">
    <h1 style="display:none">Home Page</h1>
    <section class="user-banner-profile">
      <p id="logo-for-feed">
        <router-link to="/" alt="Link to Home Page">
          <img
            src="@/assets/tv.png"
            class="logo"
            alt="Site Logo: purple television icon"
          />
        </router-link>
      </p>
      <div id="select-tag-container">
        <v-select id="mySelect" :options="options" alt="Post Tags"></v-select>
      </div>
      <!-- <v-select id="select-tag-container" :options="options"></v-select> -->
      <div id="button-container">
        <button
          onclick="document.getElementById('id01').style.display='block', 
          document.getElementById('home-page').style.overflowY='hidden',
          document.getElementById('home-page').style.position='fixed'"
          class="w3-button w3-black"
        >
          +
        </button>
      </div>

      <div id="id01" class="w3-modal">
        <div class="new-post-modal-content">
          <div class="w3-container">
            <span
              onclick="document.getElementById('id01').style.display='none',
                document.getElementById('home-page').style.overflowY='scroll',
                document.getElementById('home-page').style.position='static'"
              class="close-button"
              >&times;</span
            >
            <div class="modal-body">
              <div class="modal-header">New Post</div>
              <div class="blog-picture">
                <div class="select-image-container">
                  <b-container class="mt-3" fluid>
                    <b-form @submit.stop.prevent="onSubmit">
                      <div class="d-flex mb-3">
                        <b-form-file
                          id="postImg"
                          v-model="image"
                          placeholder="Or drop image here"
                          drop-placeholder="Or drop image here..."
                          class="select-image-form w-auto flex-grow-1"
                          label="Choose an Image"
                        ></b-form-file>
                        <b-button
                          v-if="hasImage"
                          variant="danger"
                          class="ml-3"
                          @click="clearImage"
                          >Clear image</b-button
                        >
                      </div>
                      <b-img
                        id="select-image-upload"
                        v-if="hasImage"
                        :src="imageSrc"
                        class="mb-3"
                        fluid
                        block
                        rounded
                      ></b-img>
                    </b-form>
                  </b-container>
                </div>
              </div>
              <div class="blog-comment">
                <textarea
                  maxlength="100"
                  placeholder="Caption"
                  class="blog-caption"
                  style="border: none"
                  id="p-caption"
                ></textarea>
              </div>

              <div class="blog-bottom-row">
                <select class="blog-tag" v-model="blog.tag" id="tag_select">
                  <option v-for="tag in tags" v-bind:key="tag">
                    {{ tag }}
                  </option>
                </select>

                <!-- <select class="blog-toggle-private-public">
                  <option value="1" selected>Public</option>
                  <option value="2">Private</option>
                </select> -->

                <button
                  class="blog-post"
                  onclick="document.getElementById('id01').style.display='none',
                document.getElementById('home-page').style.overflowY='scroll',
                document.getElementById('home-page').style.position='static',
                refreshPage()"
                  v-on:click="mPost()"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="avatar">
        <router-link to="/profile">
          <p style="display:none">Profile Page</p>
          <b-avatar class="avatar-icon" size="4em"></b-avatar>
        </router-link>
      </div>
    </section>

    <!-- feed section = fixing popup -->
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

          <img :src="sr.durl" :key="sr.durl" class="placeholder" />

          <div class="likes">
            <div class="likes-container">
              <b-icon
                variant="danger"
                icon="heart"
                v-on:click="likePress(sr.id, sr.likes)"
                v-bind:key="sr.likes"
              ></b-icon>
              {{ sr.likes }} likes
            </div>

            <div class="enlarge-container">
              <button
                onclick=" 
              document.getElementById('home-page').style.overflowY='hidden',
              document.getElementById('home-page').style.position='fixed'"
                class="w3-button"
                id="enlargeText"
                v-on:click="sr.disp = 'block'"
              >
                Full Image
              </button>

              <div class="w3-modal" :id="sr.durl" :style="{ display: sr.disp }">
                <div class="w3-modal-content" id="pop-up-container">
                  <div class="w3-container">
                    <span
                      onclick="
                      document.getElementById('home-page').style.overflowY='scroll',
                      document.getElementById('home-page').style.position='static'"
                      class="close-button close-post-button"
                      v-on:click="sr.disp = 'none'"
                      >&times;
                    </span>
                    <img
                      class="image-popUp"
                      v-bind:src="sr.durl"
                      :key="sr.durl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="likes">
            <b-icon variant="danger" icon="heart" v-on:click ="likePress(sr.id, sr.likes)" v-bind:key = likekey ></b-icon> {{sr.likes}} likes   
          </div> -->
          </div>
        </div>

        <div class="description-comment">
          <div class="description">
            <router-link to="/ProfileOther" class="username">
              {{ sr.dName }}
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
    </section>
  </section>
</template>

<script>
import firebase from "firebase/app";
import Vue from "vue";
export default {
  mounted() {
    this.getPostImg();
  },
  methods: {
    mPost() {
      let user = firebase.auth().currentUser;
      let storageRef = firebase.storage().ref();
      console.log(user);
      let c_tag = document.getElementById("tag_select").value;
      let p_img = document.getElementById("postImg").files[0];
      let p_caption = document.getElementById("p-caption").value;
      let servertime = firebase.database.ServerValue.TIMESTAMP;
      servertime = servertime.toString().replace(/[.-]/g, "");
      let storagePic = storageRef.child(
        "Posts/" + user.uid + "_" + p_img.name + "_" + servertime
      );
      storagePic.put(p_img);

      let db = firebase.database();
      let dbRef = db.ref("Posts/");
      console.log(p_img.name);
      try{
        storagePic.getMetadata().then((meta) => {
          storagePic.getDownloadURL().then((durl) => {
            dbRef
              .child(
                `${p_img.name.replace(/[,.-:]/g, "") +
                 meta.timeCreated.toString().replace(/[.-]/g, "")}`
              )
              .set({
                date: `${meta.timeCreated}`,
                url: `${durl}`,
                dName: `${user.displayName}`,
                caption: `${p_caption}`,
                likes: 0,
                tag: `${c_tag}`,
              });
          });
        });
      }catch(error){
        console.log("retrying databse DURL retrieval");

      }
    },
    getPostImg() {
      let datRef = firebase.database().ref("Posts/");
      let i = 0;

      datRef.once("value").then((sn) => {
        sn.forEach((postChild) => {
          let displ = "none";
          console.log(i);
          let dURL = postChild.child("url").val();
          console.log(dURL);
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
          });
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
    likePress(id, c_likes) {
      let datRef = firebase.database().ref(`Posts/${id.toString()}/likes`);
      let n_likes = c_likes + 1;
      datRef.set(n_likes);
      this.getPostImg();
      if (this.likekey === 0) {
        this.likekey++;
      } else {
        this.likekey = 0;
      }
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
      dispMode: [""],
      caption: "",
      blog: {
        tag: "",
      },
      i_sr: {},
      likekey: 0,
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
      const base64Encode = (data) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(data);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

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

<style lang="scss">
@import "@/styles/Home.scss";
</style>
