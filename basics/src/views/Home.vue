<template>
  <section class="home-page">
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed">
        <router-link to="/"><img src="@/assets/tv.png" class="logo"/></router-link>
      </p>
      <div id="select-tag-container">
        <v-select id="mySelect" :options="options"></v-select>
      </div>
      <!-- <v-select id="select-tag-container" :options="options"></v-select> -->
      <button
        onclick="document.getElementById('id01').style.display='block'"
        class="w3-button w3-black"
      >
        +
      </button>

      <div id="id01" class="w3-modal">
        <div class="w3-modal-content">
          <div class="w3-container">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="w3-button w3-display-topright"
              >&times;</span
            >
            <div class="modal-body">
              <div class="modal-header"></div>
              <div class="blog-picture">
                <b-form-file
                  accept="image/jpeg, image/png, image/gif"
                ></b-form-file>
              </div>
              <div class="blog-comment">
                <textarea placeholder="Caption" class="blog-caption"></textarea>
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
      <div class="feed-post">
        <div class="picture">
          <b-dropdown variant="none" class="report-button" size="lg" no-caret>
            <template #button-content>
              <span>...</span>
            </template>
            <b-dropdown-item href="#">Report</b-dropdown-item>
          </b-dropdown>
          <img src="https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg" class="placeholder">
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
    </section>
  </section>
</template>

<script>
export default {
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
</script>

<style lang="scss">
@import "@/styles/Home.scss";
</style>
