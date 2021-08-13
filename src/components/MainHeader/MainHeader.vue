<template>
  <header class="main-header">
    <div class="header-wrapper">
      <h1 class="main-heading">{{ title }}</h1>
      <p class="main-subheading">
        {{ name }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: {
      type: String,
      required: true,
      default: "C.M.L",
    },
    name: {
      type: String,
      required: true,
      default: "Christian M. Lux",
    },
  },
};
</script>

<style scoped>
.header-wrapper {
  margin-right: 1rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
h1 b {
  color: var(--primary-color);
}
@media screen and (max-width: 399px) {
  .header-wrapper {
    margin: 0 0.5rem;
  }
}
</style>
