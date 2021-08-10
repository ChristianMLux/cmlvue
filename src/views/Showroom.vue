<template>
  <div class="showroom">
    <content-area :contentHeading="contentHeading">
      <div class="img-wrapper">
        <img src="@/assets/showroom/signaturen.png" />
      </div>
      <p>
        My history with Layouts & Code began in early 2003, when I started to
        browse through various online forums. In the forums, it was usually
        common to have a signature that was displayed below one's own posts. You
        could fill it with pictures. It was at this point that I had my first
        contact with Adobe Fireworks to create my first signature.
      </p>
    </content-area>
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

<style scoped>
.img-wrapper {
  display: flex;
  justify-content: center;
}
img {
  width: 80%;
  margin: 1rem 1rem 0 2rem;
  padding: 1rem 1rem 0.5rem 1.5rem;
}
</style>
