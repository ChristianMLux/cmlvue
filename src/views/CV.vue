<template>
  <div class="cv">
    <content-area :contentHeading="contentHeading">
      <CurriculumVitae />
    </content-area>
  </div>
</template>
<script>
import CurriculumVitae from "@/components/CurriculumVitae/CurriculumVitae.vue";
export default {
  data() {
    return {
      contentHeading: "CV",
    };
  },
  components: {
    CurriculumVitae,
  },
};
</script>
