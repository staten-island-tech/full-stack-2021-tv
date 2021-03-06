<template>
  <section class="home-page">
    <section class="user-banner-profile">
      <div class="user-profile"></div>
      <p id="logo-for-feed"></p>
      <p id="banner-profile-empty-space"></p>
      <p id="button-to-make-blog">
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')"
          >+</b-button
        >
        <b-modal id="bv-modal-example" hide-footer>
          <div>
            <h3></h3>
          </div>
        </b-modal>
      </p>
      <p id="settings"></p>
    </section>

    <section class="feed">
      <div class="picture">
        <b-dropdown
          variant="outline-dark"
          class="report-button"
          size="lg"
          no-caret
        >
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
export default {};
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

#banner-profile-empty-space {
  width: 84%;
  border: 2px solid;
  border-left: none;
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
}

.btn[data-v-fae5bece] {
  font-size: 3rem;
  width: 100%;
  height: 100%;
  border-radius: 0rem;
}

.btn {
  padding: 0rem;
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
  float: right;
  width: 4rem;
  height: 4rem;
}
// css for bootstrap
.dropdown-menu {
  min-width: 5rem;
}
//

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
