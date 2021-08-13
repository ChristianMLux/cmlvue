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

<style lang="scss" scoped>
ul {
  margin: 0 1rem 0 0;
  padding: 1rem 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  list-style: none;
}
@media screen and (max-width: 399px) {
  .main-navigation {
    margin: 0;
    a {
      font-size: 0.7em;
    }
  }
}
</style>
