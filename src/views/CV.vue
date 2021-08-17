<template>
  <div class="cv">
    <content-area :contentHeading="eduHeading">
      <CurriculumVitae :entries="eduEntries" />
    </content-area>
    <content-area :contentHeading="expHeading"   >
      <CurriculumVitae :entries="expEntries" />
    </content-area>
  </div>
</template>
<script>
import CurriculumVitae from "@/components/CurriculumVitae/CurriculumVitae.vue";
import CVENTRIES from "@/components/CurriculumVitae/CVEntries";
export default {
  data() {
    return {
      expHeading: "Experiences",
      eduHeading: "Education",
    };
  },
  components: {
    CurriculumVitae,
  },
  computed: {
    entries() {
      return CVENTRIES;
    },
    expEntries() {
      return CVENTRIES.filter((entry) =>
        entry.entryType.includes("experience")
      );
    },
    eduEntries() {
      return CVENTRIES.filter((entry) => entry.entryType.includes("education"));
    },
  },
};
</script>
