<template>
  <div class="home">
    <content-area :contentHeading="contentHeading">
      <p>Welcome! Nice that you have found your way here!</p>
      <p>
        I am <b>looking for permanent employment</b>. This page is intended to
        give you as broad an insight as possible into my previous work, so that
        you can decide whether I am the right person for your vacancy before you
        make initial contact.
      </p>
      <p>
        You can find out more about me and my person in the profiles section. A
        <b>detailed description of my career</b> to date is written down here.
      </p>
      <p>
        Since I have been designing layouts for websites and graphics for more
        than 15 years, but have also written some smaller programmes, the
        showroom will offer the possibility to view these
        <b>works of my past</b>.
      </p>
      <p>
        You can find my <b>detailed curriculum vitae</b> under the link "CV". If
        required, the CV can also be printed out.
      </p>
      <p>
        If I have aroused your interest with this portfolio, you can find all
        the <b>necessary contact information</b> under the Contact tab. Thank
        you for your interest and have a wonderful day!
      </p>
    </content-area>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      contentHeading: "Welcome! (W. I. P.)",
    };
  },
};
</script>

<style scoped></style>
