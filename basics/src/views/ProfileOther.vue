<template>
  <div class="profile-other">
    <section class="other-banner-profile">
      <div class="other-profile"></div>
      <p id="logo-for-feed">
        <router-link to="/"><img src="tv.jpg" class="logo" ></router-link>
      </p>
      <p id="other-profile-empty-space"></p>
      <b-button id="settings" v-b-modal.modal-1>
        <b-icon icon="gear"></b-icon>
      </b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
      
    </section>

    <section class="other-page-post">
      <div class="other-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button w3-black"
          >
            <div class="other-image-1">image</div>
            <h2 class="other-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright"
                >&times;</span
              >
              <div class="modal-header"></div>
              <div class="feed-post">
                <div class="picture">
                  <b-dropdown
                    variant="none"
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
            </div>
          </div>
        </div>
      </div>

      <div class="other-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button w3-black"
          >
            <div class="other-image-1">image</div>
            <h2 class="other-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright"
                >&times;</span
              >
              <div class="modal-header"></div>
              <div class="feed-post">
                <div class="picture">
                  <b-dropdown
                    variant="none"
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
            </div>
          </div>
        </div>
      </div>

      <div class="other-box-1">
        <div class="w3-container">
          <button
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-button w3-black"
          >
            <div class="other-image-1">image</div>
            <h2 class="other-likes">
              <b-icon variant="danger" icon="heart"></b-icon> 1 like
            </h2>
          </button>
        </div>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright"
                >&times;</span
              >
              <div class="modal-header"></div>
              <div class="feed-post">
                <div class="picture">
                  <b-dropdown
                    variant="none"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

@import "@/styles/ProfileOther.scss";

</style>
