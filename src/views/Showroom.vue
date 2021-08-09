<template>
  <div class="showroom">
    <content-area :contentHeading="contentHeading">Blabla</content-area>
  </div>
</template>

<script>
export default {
  name: "Showroom",
  data() {
    return {
      contentHeading: "Showroom",
    };
  },
};
</script>
