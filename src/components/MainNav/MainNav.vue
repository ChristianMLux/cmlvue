<template>
  <nav>
    <ul class="main-navigation" id="links">
      <NavElement
        v-for="(route, index) in routes"
        :key="index"
        v-bind="route"
        :to="route.routeTarget"
      >
        {{ route.routeName }}
      </NavElement>
    </ul>
  </nav>
</template>

<script>
import NavElement from "./NavElement.vue";
import ROUTES from "./Routes";
export default {
  name: "MainNav",
  components: {
    NavElement,
  },
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.routes = [...ROUTES];
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
  list-style: none;
}
</style>
