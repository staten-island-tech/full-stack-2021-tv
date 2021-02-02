<template>
<!-- change home to icon  -->
  <section class="banner-home">
    <div class="home"></div>
    <p id = "logo">logo</p>
    <p id = "tag-drop-down"> drop down tags </p>
    <p id = "make-blog"> blog </p>
    <p id = "pf-button"> pf button </p>
  </section>

</template>

<style lang="scss">
.banner-home {
  height: 6rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
#logo {
  width: 5%;
  border: 2px solid;
}

#tag-drop-down {
  width: 87%;
  border: 2px solid;
  border-left: none;
}

#make-blog {
    width: 3%;
    border: 2px solid;
    border-left: none;
}
#pf-button {
    width: 5%;
    border: 2px solid;
    border-left: none;
}

</style>

<script>
// @ is an alias to /src


</script>
