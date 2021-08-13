<template>
  <li>
    <div class="entry-heading">
      <h3>{{ entryTitle }}</h3>
      <div class="inner-entry-wrapper">
        <p>{{ entryDate }}</p>
        <p>({{ entryEmployer }})</p>
      </div>
    </div>
    <div class="entry-content">
      <p>{{ entryDescription }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "CVElements",
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

<style lang="scss" scoped>
h3 {
  text-align: left;
}
.entry-heading p {
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
.inner-entry-wrapper {
  display: flex;
  flex-flow: column;
  p {
    text-align: right;
  }
}
</style>
