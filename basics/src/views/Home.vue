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
            <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">
              &times;
            </span>
            <div class="modal-body">
              <div class="modal-header"></div>
              <div class="blog-picture">
                <b-container class="mt-3" fluid>
                  <b-form @submit.stop.prevent="onSubmit">
                    <div class="d-flex mb-3">
                      <b-form-file v-model="image" placeholder="Choose an image" class="w-auto flex-grow-1">
                      </b-form-file>
                      <b-button v-if="hasImage" variant="danger" class="ml-3" @click="clearImage">
                        Clear image
                      </b-button>
                    </div>
                    <b-img v-if="hasImage" :src="imageSrc" class="mb-3" fluid block rounded></b-img>
                    <b-button :disabled="!hasImage" variant="primary" type="submit"> Upload image </b-button>
                  </b-form>
                </b-container>
              </div>

              <div class="blog-comment">
                <textarea placeholder="Caption" class="blog-caption"></textarea>
              </div>
              <div class="blog-bottom-row">
                <select class="blog-tag" v-model="blog.tag">
                  <option v-for="tag in tags" v-bind:key="tag"> {{ tag }} </option>
                </select>

                <select class="blog-toggle-private-public">
                  <option value="1" selected> Public </option>
                  <option value="2"> Private </option>
                </select>

                <div class="blog-post">
                  Post
                </div>
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
      <section class="feed-post">
        <div id="poster-info">
          <b-avatar class="poster-icon" size="3.5em"></b-avatar>
          <p class="poster-username">Name</p>
          <b-dropdown variant="none" class="report-button" size="lg" no-caret>
            <template #button-content>
              <span>...</span>
            </template>
            <b-dropdown-item href="#"> Report </b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="picture">
          
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            class="placeholder"
          />

          <div class="likes">
            <b-icon variant="danger" icon="heart"></b-icon> 1 like
          </div>
        </div>

        <div class="description-comment">
          <div class="description">
            <router-link to="/ProfileOther" class="username"> Name </router-link>
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
      </section>
    </section>
  </section>
</template>

<script>
export default {
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

      caption: "",
      blog: {
        tag: "",
      },
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
  methods: {
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
};

//banner scroll effect
let scrollPos = 0;

window.addEventListener("scroll", function() {
  const banner = document.querySelector(".user-banner-profile");
  if (document.body.getBoundingClientRect().top > scrollPos) {
    // up
    banner.classList.remove("is-hidden");
    banner.classList.add("is-visible");
  } else {
    // down
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
