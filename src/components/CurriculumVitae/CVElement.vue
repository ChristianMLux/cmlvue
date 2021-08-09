<template>
  <li>
    <div class="entry-heading">
      <h4>{{ entryTitle }}</h4>
      <p>{{ entryDate }} ({{ entryEmployer }})</p>
    </div>
    <div class="entry-content">
      <p>{{ entryDescription }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "CVElement",
  props: {
    entryTitle: {
      type: String,
      required: true,
    },
    entryDate: {
      type: [String, Number],
      required: true,
    },
    entryEmployer: {
      type: String,
      required: true,
    },
    entryDescription: {
      type: String,
      required: true,
    },
    entryType: {
      type: String,
    },
  },
};
</script>

<style scoped>
.entry-heading > p {
  font-size: 0.8em;
}
li > div {
  padding: 0.5rem;
}
.entry-heading {
  display: flex;
  justify-content: space-between;
}
p {
  font-size: 0.9em;
  padding-left: 0.5rem;
  text-align: justify;
}
</style>
