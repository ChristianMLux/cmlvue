<template>
  <li>
    <router-link :to="routeTarget">
      <component :is="routeIcon"></component>
      {{ routeName }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavElement",
  props: {
    routeTarget: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    routeIcon: {
      type: String,
    },
  },
};
</script>
<style scoped>
ul > li {
  display: flex;
  flex-flow: row;
}
li {
  padding: 0.5rem;
}
ul > li > a {
  color: var(--dark);
  text-decoration: none;
}
a {
  font-weight: bold;
  display: flex;
}

a > div {
  margin-right: 0.5rem;
  font-size: 2em;
}
</style>
