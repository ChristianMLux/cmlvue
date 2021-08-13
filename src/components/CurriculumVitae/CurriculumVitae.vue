<template>
  <ul>
    <CVElement v-for="(entry, index) in entries" :key="index" v-bind="entry" />
  </ul>
</template>

<script>
import CVElement from "./CVElements.vue";

export default {
  name: "CurriculumVitae",
  components: {
    CVElement,
  },
  props: {
    entries: {
      type: Array,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin-right: 0.5rem;
}
ul > li {
  display: flex;
  flex-flow: column;
  margin: 1rem 0;
  border-left: 2px dotted var(--primary-color);
  background-color: var(--grey);
}
</style>
