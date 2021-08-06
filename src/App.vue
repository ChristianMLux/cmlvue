<template>
  <MainNav />
  <router-view />
</template>

<script>
import MainNav from "@/components/MainNav/MainNav.vue";
export default {
  name: "CML-Portfolio",
  components: {
    MainNav,
  },
};
</script>

<style lang="scss">
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
  --grey: #c8cdd0;
  --dark-grey: #415058;
  --dark: #1f292e;
  background-color: var(--bright);
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
</style>
