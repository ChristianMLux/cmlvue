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
      <section>
        <vueper-slides>
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :content="slide.content"
          />
        </vueper-slides>
      </section>
    </content-area>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Showroom",
  data() {
    return {
      contentHeading: "Showroom",
      slides: [
        {
          title: "Slide #1",
          content: "Slide content.",
          image: "/assets/img/slides/slide01.jpg",
        },
        {
          title: "Slide #2",
          content: "Slide 2",
          image: "/assets/img/slides/slide02.jpg",
        },
        {
          title: "Slide #3",
          content: "Slide 3",
          image: "/assets/img/slides/slide03.jpg",
        },
        {
          title: "Slide #4",
          content: "Slide 4",
          image: "/assets/img/slides/slide04.jpg",
        },
        {
          title: "Slide #5",
          content: "Slide 5",
          image: "/assets/img/slides/slide05.jpg",
        },
        {
          title: "Slide #6",
          content: "Slide 6",
          image: "/assets/img/slides/slide06.jpg",
        },
        {
          title: "Slide #7",
          content: "Slide 7",
          image: "/assets/img/slides/slide07.jpg",
        },
      ],
    };
  },
  components: { VueperSlides, VueperSlide },
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
