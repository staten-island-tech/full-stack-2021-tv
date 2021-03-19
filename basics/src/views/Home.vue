<template>
  <section class="home-page">
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed"></p>
      <div id="select-tag-container">
        <v-select id="mySelect" :options="options"></v-select>
      </div>
      <!-- <v-select id="select-tag-container" :options="options"></v-select> -->
      <p id="button-to-make-blog">
        <b-button id="show-btn" @click="$bvModal.show('making-blog')"
          >+</b-button
        >
        <b-modal id="making-blog" size="xl" hide-footer>
          <div class="modal-body">
            <div class="blog-picture">
              <b-form-file
                accept="image/jpeg, image/png, image/gif"
              ></b-form-file>
            </div>
            <div class="blog-comment">
              <div role="group">
                <b-form-input
                  v-model="caption"
                  :state="captionState"
                  placeholder="Caption"
                  trim
                ></b-form-input>
                <b-form-invalid-feedback id="input-live-feedback">
                  More than 150 charactes.
                </b-form-invalid-feedback>
              </div>
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

              <div class="blog-post" @click="$bvModal.hide('making-blog')">
                Post
              </div>
            </div>
          </div>
        </b-modal>
      </p>

      <p id="settings"></p>
    </section>

    <section class="feed">
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
          <router-link to="/ProfileOther" class="username"> Name </router-link>
          <p class="caption">caption</p>
        </div>
        <div class="comment-section">
          <router-link
            to="/ProfileOther"
            id="comment-username"
            class="username"
          >
            Name
          </router-link>
          <p class="comment">comment</p>
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
</script>


<style lang="scss">
@import "@/styles/Home.scss";
</style>

<style>
.vs--searchable .vs__dropdown-toggle {
  border: none ;
}
.btn-secondary {
    background-color: white;
    color: black;
    border: 0rem;
}
</style>

