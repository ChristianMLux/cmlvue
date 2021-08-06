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
