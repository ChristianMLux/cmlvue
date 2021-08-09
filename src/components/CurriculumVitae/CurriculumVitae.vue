<template>
  <ul>
    <CVElement v-for="(entry, index) in entries" :key="index" v-bind="entry" />
  </ul>
</template>

<script>
import CVElement from "@/components/CurriculumVitae/CVElement.vue";
import CVENTRIES from "@/components/CurriculumVitae/CVEntries";
export default {
  name: "CurriculumVitae",
  components: {
    CVElement,
  },
  data() {
    return {
      entries: [],
    };
  },
  created() {
    this.entries = [...CVENTRIES];
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  padding-left: 1rem;
}
ul > li {
  display: flex;
  flex-flow: column;
  margin: 1rem 0;
  border-left: 2px dotted var(--primary-color);
  background-color: var(--grey);
}
</style>
