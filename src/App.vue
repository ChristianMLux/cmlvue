<template>
  <MainNav />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/showroom">Showroom</router-link> |
    <router-link to="/cv">CV</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
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

#app {
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
