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
  justify-content: space-evenly;
  list-style: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>
