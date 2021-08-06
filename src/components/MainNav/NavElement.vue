<template>
  <li>
    <router-link :to="routeTarget">{{ routeName }}</router-link>
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
  },
};
</script>
<style scoped>
li {
  padding: 0.5rem;
}
ul > li > a {
  color: var(--dark);
  text-decoration: none;
  padding-left: 0.33rem;
  border-left: 0.5px dotted var(--dark);
}
a {
  font-weight: bold;
}
* .router-link-exact-active {
  border-left: 4px dotted var(--primary-color);
}
a::first-letter .router-link-exact-active {
  color: var(--primary-color);
}
</style>
