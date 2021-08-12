<template>
  <MainHeader :title="title" :name="name" />
  <MainNav />
  <i class="fi-rr-portrait"></i>
  <router-view />
</template>

<script>
import MainHeader from "@/components/MainHeader/MainHeader.vue";
import MainNav from "@/components/MainNav/MainNav.vue";

export default {
  name: "CML-Portfolio",
  data() {
    return {
      title: "C.M.L",
      name: "Christian M. Lux",
    };
  },
  components: {
    MainHeader,
    MainNav,
  },
  computed: {
    changeTitle: function () {
      let span = ".";
      return this.title.replaceAll(".", span);
    },
  },
};
</script>

<style lang="scss">
svg {
  fill: var(--dark-grey);
}
i {
  font-size: 5rem;
}
* {
  box-sizing: border-box;
  margin: 0;
}
*::selection {
  background-color: var(--primary-light);
}
body {
  --primary-color: #ffb549;
  --primary-light: #ffc062;
  --success: #a3db33;
  --error: #ed3221;
  --warn: #ffc642;
  --bright: #f2f2f3;
  --grey: #e4e4e4;
  --dark-grey: #415058;
  --dark: #1f292e;
  background-color: var(--bright);
}
html {
  max-width: 100ch;
  margin: 0 auto;
  color: var(--dark);
}
h2 {
  font-size: 1.2em;
}
h3 {
  font-size: 0.9em;
  font-weight: 550;
}
#app {
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
}

.router-link-active {
  color: red;
}

@media screen and (max-width: 479px) {
  #app {
    font-size: 16px;
  }
}
@media screen and (max-width: 399px) {
  #app {
    font-size: 14px;
  }
  .content-section {
    margin: 0;
  }
  .main-navigation {
    margin: 0;
  }
}
</style>
