<template>
  <section class="content-section">
    <h2 class="content-heading">{{ contentHeading }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "ContentArea",
  props: {
    contentHeading: {
      type: String,
      default: "Section Heading",
    },
  },
};
</script>

<style>
section {
  padding: 0.5rem;
  margin-right: 1rem;
}
section > p {
  padding-left: 1rem;
  text-align: justify;
  line-height: 1.8;
}
section > h2 {
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px dotted var(--primary-color);
}
</style>
