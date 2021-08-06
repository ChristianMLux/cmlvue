<template>
  <section>
    <h2 class="section-heading">{{ sectionHeading }}</h2>
    <p class="section-content">{{ sectionContent }}</p>
  </section>
</template>

<script>
export default {
  name: "ContentArea",
  props: {
    sectionHeading: {
      type: String,
    },
  },
};
</script>
