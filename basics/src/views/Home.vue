<template>
  <section class="home-page">
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed">
        <router-link to="/"><img src="tv.jpg" class="logo" ></router-link>
      </p>
      <div id="select-tag-container">
        <v-select id="mySelect" :options="options"></v-select>
      </div>
      <!-- <v-select id="select-tag-container" :options="options"></v-select> -->
        <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
          <div class="modal-body">
            <div class="modal-header"> </div>
            <div class="blog-picture">
              <input type="file" id = "postImg"/>
            </div>
            <div class="blog-comment">
                <textarea
                  placeholder="Caption"
                  class = "blog-caption"
                ></textarea>
            </div>

            <div class="blog-bottom-row">
              <select class="blog-tag" v-model="blog.tag">
                <option v-for="tag in tags" v-bind:key="tag">
                  {{ tag }}
                </option>
              </select>

              <select class="blog-toggle-private-public">
                <option value="1" selected>Public</option>
                <option value="2">Private</option>
              </select>

              <button class="blog-post" v-on:click="mPost()">
                Post
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
      <p id="avatar">
        <router-link to="/profile">
          <b-avatar class="avatar-icon" size="4em"></b-avatar>
        </router-link>
      </p>
    </section>

    <section class="feed">
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
        <img v-bind:src = "i_sr" :key="i_sr">
      </div>
    </section>
  </section>
</template>

<script>
import firebase from "firebase/app";

export default {
  mounted(){
    this.getPostImg()

  },
   methods:{
    mPost(){
      let user = firebase.auth().currentUser;
      let storageRef = firebase.storage().ref();
      console.log(user);

      let p_img = document.getElementById("postImg").files[0];
      let storagePic = storageRef.child('Posts/' + user.uid + '_' + p_img.name);
      storagePic.put(p_img);
      
      let db = firebase.database();
      let dbRef = db.ref("Posts/");
      console.log(p_img.name);
      storagePic.getMetadata().then((meta) =>{
        
     
        storagePic.getDownloadURL().then((durl) =>{
          dbRef.child(`${p_img.name.replace(/[^a-zA-Z ]/g, "")}`).set({
            date: `${meta.timeCreated}`,
            url: `${durl}`
          })
        })

       
        
      })
 
    },
    getPostImg(){
        let datRef = firebase.database().ref('Posts/PNG/');
        datRef.once("value").then(sn => {
          let dURL = sn.child('url').val();
          console.log(dURL);
          this.i_sr = dURL;
        })

        
    }
  },
  computed: {
    captionState() {
      return this.caption.length < 150 ? true : false;
    },
  },
  
  data() {
    return {
      caption: "",
      blog: {
        tag: "",
      },
      i_sr: '',
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
 
};


// function checkPosition() {
//   let scrollPos = 0;
//   const banner = document.querySelector(".user-banner-profile");
//   let windowY = window.scrollY;
//   if (windowY < scrollPos) {
//     // Scrolling up
//     banner.classList.add("is-visible");
//     banner.classList.remove("is-hidden");
//     console.log("scrolled up");
//   } else if (windowY > scrollPos) {
//     // Scrolling down
//     banner.classList.add("is-hidden");
//     banner.classList.remove("is-visible");
//     console.log("scrolled down");
//   }
//   scrollPos = windowY;
// }
// window.addEventListener("scroll", checkPosition);


let scrollPos = 0;

// adding scroll event
window.addEventListener('scroll', function() {
  const banner = document.querySelector('.user-banner-profile');
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
		console.log('scrolled up');
    banner.classList.remove('is-hidden');
    banner.classList.add('is-visible');
  } else {
		console.log('scrolled down');
    banner.classList.add('is-hidden');
	// saves the new position for iteration.
  }
	scrollPos = (document.body.getBoundingClientRect()).top;
});
</script>


<style lang="scss">
@import "@/styles/Home.scss";
</style>

<style>
/* .vs--searchable .vs__dropdown-toggle {
  border: none;
}
.btn-secondary {
  color: black  !important;
  width: 100%;
  height: 100%;
  border: none ;
}
.btn-secondary {
    background-color: white;
    color: black;
    border: 0rem;
} */
</style>
