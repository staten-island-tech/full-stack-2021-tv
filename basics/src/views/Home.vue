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
                <!-- This will only be shown if the preceding input has an invalid state -->
                <b-form-invalid-feedback id="input-live-feedback">
                  More than 150 charactes.
                </b-form-invalid-feedback>
                <!-- This is a form text block (formerly known as help block) -->
              </div>
            </div>

            <div class="blog-bottom-row">
              <select class="blog-tag" v-model="blog.tag">
                <option v-for="tag in tags" v-bind:key="tag">
                  {{ tag }}
                </option>
              </select>
              <!-- <select class="blog-tag">
                <option selected>Pick A Tag</option>
                <option value="blog-education">Education</option>
                <option value="blog-entertainment">Entertainment</option>
                <option value="blog-sports">Sports</option>
                <option value="blog-music">Music</option>
                <option value="blog-games">Games</option>
                <option value="blog-others">Others</option>
              </select> -->

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

<style lang="scss" scoped>
.user-banner-profile {
  height: 6rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#logo-for-feed {
  width: 5%;
  border: 2px solid;
}

#select-tag-container {
  width: 84%;
  border: 2px solid;
  border-left: none;
  margin-bottom: 1rem;
  .vs--searchable {
    font-size: 1.5rem;
    padding: 1rem;
  }
}
.vs--searchable .vs__dropdown-toggle {
  border: none !important;
}

//make a blog button
#button-to-make-blog {
  width: 6%;
  border: 2px solid;
  border-left: none;
}
.btn-secondary {
  background-color: white;
  color: black;
  border: 0rem;
}

.btn[data-v-fae5bece] {
  font-size: 2rem;
  width: 100%;
  height: 100%;
  border-radius: 0rem;
}

//modal

.form-control.is-valid {
  border: 0rem;
  background-image: none;
  color: black;
}

.modal-dialog .modal-md {
  max-width: none;
  width: 80%;
  height: 90%;
}

// @media (min-width: 576px) {
//   //from bootstrap
//   .modal-dialog {
//     max-width: none;
//     width: 80%;
//     height: 90%;
//   }
// }

.modal-body {
  height: 40rem;
}

.blog-picture {
  height: 90%;
  border: 2px solid;
  border-bottom: 0rem;
}

.blog-comment {
  border: 2px solid;
  border-bottom: 0rem;
  height: 6%;
}

.blog-bottom-row {
  display: flex;
  flex-direction: row;
  height: 5%;
}

.blog-tag {
  border: 2px solid;
  width: 80%;
}

.blog-toggle-private-public {
  border: 2px solid;
  border-left: none;
  width: 10%;
}

.blog-post {
  border: 2px solid;
  border-left: none;
  width: 10%;
  padding-left: 7px;
  cursor: pointer;
}

//
#settings {
  width: 5%;
  border: 2px solid;
  border-left: none;
}

.feed {
  width: 90%;
  border: 1px solid;
  height: 100%;
  margin: auto;
  padding-bottom: 1rem;
}

.likes {
  margin-top: 27rem;
  height: 3rem;
  border-bottom: 1px solid;
  padding-left: 0.5rem;
  background-color: #f9f8eb;
  padding-top: 0.5rem;
  font-size: 1.5rem;
}

.picture {
  border: 1px solid;
  height: 30rem;
  margin: 1rem;
  margin-bottom: 0;
}

.report-button {
  float: left;
  width: 4rem;
  height: 4rem;
}

.description-comment {
  margin-left: 1rem;
  margin-right: 1rem;
  border-left: 1px solid;
  border-right: 1px solid;
}

.description {
  height: 3rem;
  padding-top: 0rem;
  padding-left: 0.5rem;
}

.username {
  font-size: 1.5rem;
  color: black;
}

.caption {
  font-size: 1.2rem;
  display: inline-block;
}

.comment-section {
  height: 3rem;
  padding-top: 0rem;
  margin-top: -1rem;
  border-bottom: 1px solid;
}

#comment-username {
  font-size: 1.3rem;
  padding-left: 0.5rem;
}

.comment {
  font-size: 1.1rem;
  display: inline-block;
}
</style>

<style>
.vs--searchable .vs__dropdown-toggle {
  border: none ;
}
</style>
